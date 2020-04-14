import React, { Component } from 'react';
import giphy from 'giphy-api';

import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';

const GIPHY_API_KEY = '085XVSAJ77ow9H0wiXpJe9DtsXoMqeAs';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "Vjsh4xz3qfao0"
    };
  }

  search = (query) => {
    giphy({ apiKey: GIPHY_API_KEY }).search({
      q: query,
      rating: 'g',
      limit: 10
    }, (err, res) => {
      this.setState({
        gifs: res.data
      });
    });
  }

  selectGif = (id) => {
    this.setState({
      selectedGifId: id
    });
  }

  render() {
    const { selectedGifId } = this.state;
    const { gifs } = this.state;
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
          <div className="selected-gif">
            <Gif id={selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={gifs} selectGif={this.selectGif} />
        </div>
      </div>
    );
  }
}

export default App;
