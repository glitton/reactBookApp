import React from 'react';
import './App.css';
import PropTypes from 'prop-types';
import Books from './Books';

class BookShelf extends React.Component {
  static propTypes = {
    books: PropTypes.array.isRequired
  }

  state = {
      shelf: ''
  }

  // updateShelf = (event) => {
  //   BooksAPI.update(this.props.book.id, this.props.book.shelf)
  //     .then(data => {
  //       let newShelf = data.results;
  //       console.log(newShelf)
  //     })
  //     this.setState({ shelf: event.target.value })
  // }

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
                newShelf={this.state.shelf}
              />
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default BookShelf;
