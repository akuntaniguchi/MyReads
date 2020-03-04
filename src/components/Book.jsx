import React from 'react';
import PropTypes from 'prop-types';
import ShelfChangerDropDown from './ShelfChangerDropDown';
import BlankImage from '../images/blank.png'

const Book = props => {
  const { book, books, changeShelf } = props;
  const coverImg = book.imageLinks && book.imageLinks.thumbnail ? book.imageLinks.thumbnail : BlankImage;
  const title = book.title;

  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{ width: 128, height: 188, backgroundImage: `url(${coverImg})` }}
          />
          <ShelfChangerDropDown book={book} books={books} changeShelf={changeShelf} />
        </div>
        <div className="book-title">{title}</div>
        {book.authors && book.authors.map((author, index) => (
          <div className="book-authors" key={index}>
            {author}
          </div>
        ))}
      </div>
    </li>
  );
};

Book.propTypes = {
  book: PropTypes.object.isRequired,
  books: PropTypes.array.isRequired,
  changeShelf: PropTypes.func.isRequired
};

export default Book;
