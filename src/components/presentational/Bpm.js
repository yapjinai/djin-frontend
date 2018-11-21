import React from 'react';

const Bpm = (props) => {
  const handleChange = (e) => {
    props.changeState({
      bpm: e.target.value
    })
  }

  return (
    <div className="Bpm">
      <label>BPM</label>
      <br />
      <input
        id="bpmValue"
        type="number"
        min="0.01"
        max="2"
        step=".01"
        value={props.bpm}
        onChange={handleChange}
      />
      <br />
      <input
        id="bpmSlider"
        type="range"
        min="0.01"
        max="2"
        step=".01"
        value={props.bpm}
        onChange={handleChange}
      />
    </div>
  );
}

export default Bpm;
