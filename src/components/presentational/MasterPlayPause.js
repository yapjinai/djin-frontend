import React from 'react';

const Master = (props) => {
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
    <div className="Master">
      <button
        onClick={handleClick}
      >
        {masterPlayPause()}
      </button>
    </div>
  );
}

export default Master;
