import React from 'react';

const Bpm = (props) => {
  const handleChange = (e) => {
    props.changeState({
      bpm: e.target.value
    })
  }

  return (
    <div className="Bpm">
      <label>BPM: {props.bpm}</label>
      <br />
      <input
        id="bpmValue"
        type="number"
        min="1"
        max="300"
        step="1"
        value={props.bpm}
        onChange={handleChange}
      />
      <br />
      <input
        id="bpmSlider"
        type="range"
        min="1"
        max="300"
        step="1"
        value={props.bpm}
        onChange={handleChange}
      />
    </div>
  );
}

export default Bpm;
