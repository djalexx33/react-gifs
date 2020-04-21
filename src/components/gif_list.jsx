import React from 'react';
import Gif from './gif';

// Destructuring (no more props)

const GifList = ({ gifs, selectGif }) => {
  return (
    <div className="gif-list">
      {gifs.map(({ id }) => {
        return <Gif id={id} key={id} selectGif={selectGif} />;
      })}
    </div>
  );
};

export default GifList;
