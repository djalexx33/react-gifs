import React from 'react';

const Gif = (props) => {
  const { id } = props;
  const src = `https://media3.giphy.com/media/${id}/giphy.gif?cid=ecf05e470e5d63001542aa6b466d0a6c04c4f3cf75388414&rid=giphy.gif`;
  return (
    <img src={src} alt="" className="gif" />
  );
};

export default Gif;
