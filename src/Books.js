import React from 'react';
import './App.css';


class Books extends React.Component {
  state = {
    shelf: this.props.book.shelf
  }

  updateShelf = (event) => {
    BooksAPI.update(this.props.book.id, this.props.book.shelf)
    this.setState({ shelf: event.target.value })
  }

  render() {
    console.log(this.setState)
    return (

          <li key={this.props.book.id}>
            <div className="book">
              <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.props.book.imageLinks.smallThumbnail}`}}></div>
                <div className="book-shelf-changer">
                  <select defaultValue={this.state.shelf} onChange={this.updateShelf}>
                    <option value="none" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                  </select>
                </div>
              </div>
              <div className="book-title">{this.props.book.title}</div>
              <div className="book-authors">{this.props.book.authors}</div>
            </div>
          </li>

    )}
  }


export default Books;
