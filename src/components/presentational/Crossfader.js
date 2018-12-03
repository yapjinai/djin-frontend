import React from 'react';

const Crossfader = ({crossfade, setCrossfade}) => {
  const handleChange = (e) => {
    setCrossfade(e.target.value)
  }

  return (
    <div className="Crossfader">
      <label>
        Crossfader
      </label>
      <br />
      <input
        id="crossfader"
        type="range"
        min="-1"
        max="1"
        step=".01"
        value={crossfade}
        onChange={handleChange}
      />
    </div>
  );
}

export default Crossfader;
