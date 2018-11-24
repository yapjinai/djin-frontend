import React from 'react';

const Bpm = (props) => {
  const handleChange = (e) => {
    props.changeState({
      masterBpm: parseInt(e.target.value)
    })
  }

  return (
    <div className="Bpm">
      <label>BPM: {props.masterBpm}</label>
      <br />
      <input
        id="bpmValue"
        type="number"
        min="1"
        max="300"
        step="1"
        value={props.masterBpm}
        onChange={handleChange}
      />
      <br />
      <input
        id="bpmSlider"
        type="range"
        min="1"
        max="300"
        step="1"
        value={props.masterBpm}
        onChange={handleChange}
      />
    </div>
  );
}

export default Bpm;
