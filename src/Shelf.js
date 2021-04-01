import React from 'react';
import Book from './Book';

class Shelf extends React.Component {
  render() {
    const { books } = this.props;
    const gonnaRead = books.filter(book => book.shelf === "gonnaRead");
    const ReadingRN = books.filter( book => book.shelf === "ReadingRN");
    const dReading = books.filter(book => book.shelf === "dReading");

    return (
      <div>
        <div className="shelf">
          <h1 className="shelf-title">Will read it</h1>
          <div className="books">
            <ol className="booksGrid">
              {gonnaRead.map( book => (
                <li key={book.id}>
                  <Book
                    books={ this.props.books }
                    book={ book }
                    newUpdate={this.props.newUpdate}
                  />
                </li>
              ))
              }
            </ol>
          </div>
        </div>
        <div className="shelf">
          <h2 className="shelf-title">Reading right now</h2>
          <div className="books">
            <ol className="booksGrid">
              {ReadingRN.map( book => (
                <li key={book.id}>
                  <Book
                    books={ this.props.books }
                    book={ book }
                    newUpdate={this.props.newUpdate}
                  />
                </li>
              ))
              }
            </ol>
          </div>
        </div>
        <div className="shelf">
          <h3 className="shelf-title">Done reading</h3>
          <div className="books">
            <ol className="bookGrid">
              {dReading.map( book => (
                <li key={book.id}>
                  <Book
                    books={ this.props.books }
                    book={ book }
                    newUpdate={this.props.newUpdate}
                  />
                </li>
              ))
              }
            </ol>
          </div>
        </div>
      </div>
    )
  }
}

export default Shelf
