import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

const BookShelf = (props) => {
  const { books, changeShelf } = props;

  return (
    <ol className="books-grid">
      {books.map(book => (
        <Book book={book} books={books} changeShelf={changeShelf} key={book.id}/>
      ))}
    </ol>
  )
}

BookShelf.propTypes = {
  books: PropTypes.array.isRequired,
  changeShelf: PropTypes.func.isRequired
}

export default BookShelf;
