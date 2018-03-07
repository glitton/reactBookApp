import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import BookShelf from './BookShelf';


class BooksApp extends React.Component {
  state = {
    showSearchPage: false,
    books: [],
    shelf: ''
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
      // console.log(books);
    })
  }

  shelfBooks = (shelf) => {
    return this.state.books.filter((book) => book.shelf === shelf)
  }

  updateShelf = (event) => {
    BooksAPI.update(this.props.book.id, this.props.book.shelf)
      .then(data => {
        let newShelf = data.results;
        console.log(newShelf)
      })
      this.setState({ shelf: event.target.value })
  }

  render(){
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <div className="search-books">
            <div className="search-books-bar">
              <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author"/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>
        ) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>

                <BookShelf shelfName={'Currently Reading'}
                           books={this.state.books}
                           shelfBooks={this.shelfBooks('currentlyReading')}
                           />
                <BookShelf shelfName={'Want To Read'}
                           books={this.state.books}
                           shelfBooks={this.shelfBooks('wantToRead')}
                           />
                <BookShelf shelfName={'Read'}
                           books={this.state.books}
                           shelfBooks={this.shelfBooks('read')}
                           />

              </div>
            </div>
            <div className="open-search">
              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default BooksApp;
