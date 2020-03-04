import React from 'react';
import PropTypes from 'prop-types';
import BookShelf from './BookShelf';

const BookList = props => {
  const { books, changeShelf } = props;
  
  const shelves = [
    { type: 'currentlyReading', title: 'Currently Reading' },
    { type: 'wantToRead', title: 'Want to Read' },
    { type: 'read', title: 'Read' }
  ];

  return (
    <div className="list-books-content">
      {shelves.map((shelf, index) => {
        const shelfTypeBooks = books.filter(book => book.shelf === shelf.type);
        return (
          <div className="bookshelf" key={index}>
            <h2 className="bookshelf-title">{shelf.title}</h2>
            <div className="bookshelf-books">
              <BookShelf books={shelfTypeBooks} changeShelf={changeShelf} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

BookList.propTypes = {
  books: PropTypes.array.isRequired,
  changeShelf: PropTypes.func.isRequired
};

export default BookList;
