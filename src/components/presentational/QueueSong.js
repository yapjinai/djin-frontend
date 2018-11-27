import React from 'react';

const QueueSong = ({song, removeFromQueue, setCurrentSong}) => {
  const handleClickLoad = (e) => {
    removeFromQueue(song)

    setCurrentSong(song)
  }

  const handleClickRemove = (e) => {
    removeFromQueue(song)
  }

  return (
    <li
      className="QueueSong"
    >
      <span className='drag'>☰</span>
      <span>
        <button
          onClick={handleClickLoad}
        >
          Load
        </button>
        <button
          onClick={handleClickRemove}
        >
          Remove
        </button>
      </span>

      {song.title}

    </li>
  );
}

export default QueueSong;
