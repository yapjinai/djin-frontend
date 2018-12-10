import React from 'react';

const MasterPlayPause = ({masterPlaying, togglePlaying}) => {
  return (
    <div className="MasterPlayPause">
      <button
        onClick={togglePlaying}
      >
        {masterPlaying() ? 'Pause' : 'Play'}
      </button>
    </div>
  );
}

export default MasterPlayPause;
