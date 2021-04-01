import React from 'react';

class Selector extends React.Component {
  render() {
    const { newUpdate, book } = this.props;

    return (
      <div className="catogery">
        <select
          value={book.shelf}
          onChange={(event) => newUpdate(book, event.target.value)}
        >
          <option value="gonnaRead">Will read it</option>
          <option value="ReadingRN">Reading Right Now</option>
          <option value="dReading">Read</option>
          <option value="none" selected>None</option>
        </select>
      </div>
    )
  }
}

export default Selector
