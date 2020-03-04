import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import BookList from './components/BookList';
import Search from './components/Search';
import * as BooksAPI from './utils/BooksAPI';
import './App.css';


class BooksApp extends Component {
  state = { books: [] }

  componentDidMount = () => BooksAPI.getAll().then(books => this.setState({ books }))

  changeShelf = (bookToChange, shelf) => {
    BooksAPI.update(bookToChange, shelf).then(() => {
      bookToChange.shelf = shelf;
      this.setState(prevState => ({
        books: prevState.books.filter(book => bookToChange.id !== book.id).concat(bookToChange)
      }));
    });
  };
  
  render() {
    const { books } = this.state;

    return (
      <div className="app">
        <Switch>
          <Route path="/search"
            render={() => (
              <Search books={books} changeShelf={this.changeShelf} />
            )}
          />
          <Route exact path="/"
            render={() => (
              <div className="list-books">
                <div className="list-books-title">
                  <h1>MyReads</h1>
                </div>
                <BookList books={books} changeShelf={this.changeShelf} />
                <div className="open-search">
                  <Link to="/search"><button>Search</button></Link>
                </div>
              </div>
            )}
          />
        </Switch>
      </div>
    )
  }
}

export default BooksApp;
