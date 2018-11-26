import React from 'react';

const Bpm = ({masterBpm, setBpm}) => {
  const handleChange = (e) => {
    setBpm(parseInt(e.target.value))
    // changeState({
    //   masterBpm: parseInt(e.target.value)
    // })
  }

  return (
    <div className="Bpm">
      <label>BPM: {masterBpm}</label>
      <br />
      <input
        id="bpmValue"
        type="number"
        min="1"
        max="300"
        step="1"
        value={masterBpm}
        onChange={handleChange}
      />
      <br />
      <input
        id="bpmSlider"
        type="range"
        min="1"
        max="300"
        step="1"
        value={masterBpm}
        onChange={handleChange}
      />
    </div>
  );
}

export default Bpm;
