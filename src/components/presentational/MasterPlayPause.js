import React from 'react';

const MasterPlayPause = (props) => {
  const masterPlayPause = () => {
    if (props.masterPlaying) {
      return 'Pause'
    }
    else {
      return 'Play'
    }
  }

  const handleClick = () => {
    props.changeState({masterPlaying: !props.masterPlaying})
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
