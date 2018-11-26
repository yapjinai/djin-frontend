import React from 'react';

const QueueSong = (props) => {
  const handleClickLoad = (e) => {
    props.removeFromQueue(props.side, props.song)
    props.changeCurrentSong(props.song)
  }

  const handleClickRemove = (e) => {
    props.removeFromQueue(props.side, props.song)
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

      {props.song.title}
    </li>
  );
}

export default QueueSong;
