import React from 'react';
import PropTypes from 'prop-types';

const ShelfChangerDropDown = (props) => {
  const {book, books} = props;
  let currentShelf = 'none'
  
  const updateShelf = e => {
    props.changeShelf(props.book, e.target.value);
  }


  books.forEach(bookItem => {
    if(book.id === bookItem.id) {
      currentShelf = bookItem.shelf;
      return;
    }
  })
    
  return (
    <div className="book-shelf-changer">
      <select onChange={updateShelf} defaultValue={currentShelf}>
        <option value="move" disabled>Move to...</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  )
}

ShelfChangerDropDown.propTypes = {
  book: PropTypes.object.isRequired,
  books: PropTypes.array.isRequired,
  changeShelf: PropTypes.func.isRequired
}

export default ShelfChangerDropDown;
