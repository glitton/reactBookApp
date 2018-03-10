import React from 'react';
import './App.css';


class Books extends React.Component {
  state = {
    value: this.props.book.shelf
  };

  // handleChange(event) {
  //   this.setState({value: event.target.value});
  //   console.log('Set state' + this.setState)
  // }

  render() {
    console.log('Book state' + this.state.value)
    return (
          <li key={this.props.book.id}>
            <div className="book">
              <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.props.book.imageLinks.smallThumbnail}`}}></div>
                <div className="book-shelf-changer">
                  <select value={this.state.value} onChange={() => this.setState({value: "changed"})}>
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
