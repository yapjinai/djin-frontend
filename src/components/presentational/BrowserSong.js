import React from 'react';

const BrowserSong = ({song, key, pushToQueue}) => {
  const handleClick = (e) => {
    pushToQueue(e.target.name, song)
  }

  return (
    <tr
      className="BrowserSong"
    >
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
      <td>
        {song.title}
      </td>
      <td>
        {song.artist}
      </td>
      <td>
        {song.bpm}
      </td>
    </tr>
  );
}

export default BrowserSong;
