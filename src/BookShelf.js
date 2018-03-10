import React from 'react';
import './App.css';
import PropTypes from 'prop-types';
import Books from './Books';

class BookShelf extends React.Component {
  static propTypes = {
    books: PropTypes.array.isRequired
  };

  render() {

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.shelfName}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.shelfBooks.map((book) => (
              <Books
                key={book.id}
                book={book}
                changeShelf={this.props.changeShelf}
              />
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default BookShelf;
