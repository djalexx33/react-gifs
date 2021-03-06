import React, { Component } from 'react';

class SearchBar extends Component {
  handleUpdate = this.handleUpdate.bind(this);

  handleUpdate(event) {
    const { searchFunction } = this.props;
    // Change the state of term
    searchFunction(event.target.value);
  }

  render() {
    return (
      <input
        type="text"
        className="form-control form-search"
        onChange={this.handleUpdate}
      />
    );
  }
}

export default SearchBar;
