import React from 'react';

const QueueSong = ({song, removeFromQueue, changeCurrentSong}) => {
  const handleClickLoad = (e) => {
    removeFromQueue(song)

    changeCurrentSong(song)
  }

  const handleClickRemove = (e) => {
    removeFromQueue(song)
  }

  return (
    <li
      className="QueueSong"
    >
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
