import React from 'react';

const BrowserSong = ({song, pushToQueue, browserFilterQuery, setBrowserFilterQuery}) => {
  const handleClick = (e) => {
    pushToQueue(e.target.name, song)
  }

  const clickSearch = (e) => {
    if (browserFilterQuery !== e.target.innerHTML) {
      setBrowserFilterQuery(e.target.innerHTML)
    }
    else {
      setBrowserFilterQuery('')
    }
  }

  return (
    <tr
      className="BrowserSong"
    >
      <td className='queue'>
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
      <td
        className='artist'
        onClick={clickSearch}
      >
        {song.artist}
      </td>
      <td className='bpm'>
        {song.bpm}
      </td>
    </tr>
  );
}

export default BrowserSong;
