import React from 'react';

const BrowserSong = (props) => {
  const handleClick = (e) => {
    console.log(`${props.song.title} for side ${e.target.name}`);
    props.pushToQueue(e.target.name, props.song)
  }

  return (
    <li
      className="BrowserSong"
    >
      {props.song.title}
      <span>
        <button
          name='left'
          onClick={handleClick}
        >
          L
        </button>
        <button
          name='right'
          onClick={handleClick}
        >
          R
        </button>
      </span>
    </li>
  );
}

export default BrowserSong;
