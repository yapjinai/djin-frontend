import React from 'react';

const MasterPlayPause = ({leftPlaying, rightPlaying, playAll}) => {
  const masterPlaying = () => {
    return leftPlaying || rightPlaying
  }

  const handleClick = () => {
    if (masterPlaying()) {
      playAll(false)
    }
    else {
      playAll(true)
    }
  }

  return (
    <div className="MasterPlayPause">
      <button
        onClick={handleClick}
      >
        {masterPlaying() ? 'Pause' : 'Play'}
      </button>
    </div>
  );
}

export default MasterPlayPause;
