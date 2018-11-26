import React from 'react';

const QueueSong = ({song, side, removeFromQueue, changeCurrentSong}) => {
  // const handleClickLoad = (e) => {
  //   removeFromQueue(side, song)
  //   changeCurrentSong(song)
  // }
  //
  // const handleClickRemove = (e) => {
  //   removeFromQueue(side, song)
  // }

  return (
    <li
      className="QueueSong"
    >
      <span>
        <button
          // onClick={handleClickLoad}
        >
          Load
        </button>
        <button
          // onClick={handleClickRemove}
        >
          Remove
        </button>
      </span>

      {song.title}
    </li>
  );
}

export default QueueSong;
