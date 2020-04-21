import React, { Component } from 'react';

class Gif extends Component {
  handleClick = () => {
    const { selectGif, id } = this.props;
    if (selectGif) {
      selectGif(id);
    }
  }


  render() {
    const { id } = this.props;
    const src = `https://media2.giphy.com/media/${id}/200.gif`;
    if (!id) {
      return null;
    }
    return (
      <img src={src} alt="" className="gif" onClick={() => this.handleClick()} onKeyPress={() => this.handleClick()} />
    );
  }
}

export default Gif;
