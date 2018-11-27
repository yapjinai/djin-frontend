import React from 'react';

const BrowserSong = ({song, pushToQueue}) => {
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
      <td className='title'>
        {song.title}
      </td>
      <td className='artist'>
        {song.artist}
      </td>
      <td className='bpm'>
        {song.bpm}
      </td>
    </tr>
  );
}

export default BrowserSong;
