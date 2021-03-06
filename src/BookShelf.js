import React from 'react';
import './App.css';
import PropTypes from 'prop-types';
import Books from './Books';

class BookShelf extends React.Component {
  static propTypes = {
    books: PropTypes.array.isRequired
  };

  state = {
    shelfValue: this.props.shelfName
  }

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

              />
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default BookShelf;
