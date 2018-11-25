import React from 'react';

const BrowserSong = (props) => {
  const handleClick = (e) => {
    props.pushToQueue(e.target.name, props.song)
  }

  return (
    <tr
      className="BrowserSong"
    >
      <td>
        {props.song.title}
      </td>
      <td>
        {props.song.artist}
      </td>
      <td>
        {props.song.bpm}
      </td>
      <td>
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
      </td>
    </tr>
  );
}

export default BrowserSong;
