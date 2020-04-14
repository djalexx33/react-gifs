import React from 'react';
import Gif from './gif';

const GifList = (props) => {
  const { gifs } = props;
  return (
    <div className="gif-list">
      {gifs.map((gif) => {
        return <Gif id={gif.id} key={gif.id} selectGif={props.selectGif} />;
      })}
    </div>
  );
};

export default GifList;
