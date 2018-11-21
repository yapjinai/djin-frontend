import React from 'react';

const Volume = (props) => {
  const handleChange = (e) => {
    props.changeVolume(e.target.value)
  }

  ////////////////////////////////////

  return (
    <div className="Volume">
      <label>Volume</label>
      <br />
      <input
        id="leftVolumeSlider"
        type="range"
        orient="vertical"
        min="0"
        max="1"
        step=".01"
        value={props.volume}
        onChange={handleChange}
      />
    </div>
  );
}

export default Volume;
