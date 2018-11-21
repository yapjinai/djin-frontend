import React from 'react';

const PlayPause = (props) => {
  const playPause = () => {
    if (props.playing) {
      return 'Pause'
    }
    else {
      return 'Play'
    }
  }

  return (
    <div className="PlayPause">
      <button
        onClick={props.changePlaying}
      >
        {playPause()}
      </button>
    </div>
  );
}

export default PlayPause;
