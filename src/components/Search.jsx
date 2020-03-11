import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Book from './Book';
import * as BooksAPI from '../utils/BooksAPI';

class Search extends Component {
  state = {
    input: '',
    newBooks: [],
    error: false
  };

  getBooks = event => {
    const input = event.target.value;
    this.setState({ input });

    if(input) {
      BooksAPI.search(input).then(books => {
        if(books.length > 0) {
          this.setState({ 
            newBooks: books, 
            error: false
          });
        } else {
          this.setState({ 
            newBooks: [], 
            error: true 
          });
        }
      });
    } else {
      this.setState({ 
        newBooks: [], 
        error: true
      })
    }
  };

  render() {
    const { input, newBooks, error } = this.state;
    const { books, changeShelf } = this.props;

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={input}
              onChange={this.getBooks}
            />
          </div>
        </div>
        <div className="search-books-results">
          {newBooks.length > 0 && (
            <div>
              <ol className="books-grid">
                {newBooks.map(book => (
                  <Book book={book} books={books} key={book.id} changeShelf={changeShelf} />
                ))}
              </ol>
            </div>
          )}
          {error && (
            <h2>Books not found</h2>
          )}
        </div>
      </div>
    );
  }

  static propTypes = {
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
  };
}

export default Search;
