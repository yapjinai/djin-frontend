import React from 'react';

const MasterPlayPause = (props) => {
  // const masterPlayPause = () => {
  //   if (masterPlaying) {
  //     return 'Pause'
  //   }
  //   else {
  //     return 'Play'
  //   }
  // }

  // const handleClick = () => {
  //   changeState({masterPlaying: !masterPlaying})
  // }

  return (
    <div className="MasterPlayPause">
      <button
        // onClick={handleClick}
      >
        PLAY/PAUSE
      </button>
    </div>
  );
}

export default MasterPlayPause;
