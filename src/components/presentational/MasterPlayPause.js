import React from 'react';

const MasterPlayPause = ({masterPlaying, changeState}) => {
  const masterPlayPause = () => {
    if (masterPlaying) {
      return 'Pause'
    }
    else {
      return 'Play'
    }
  }

  const handleClick = () => {
    changeState({masterPlaying: !masterPlaying})
  }

  return (
    <div className="MasterPlayPause">
      <button
        onClick={handleClick}
      >
        {masterPlayPause()}
      </button>
    </div>
  );
}

export default MasterPlayPause;
