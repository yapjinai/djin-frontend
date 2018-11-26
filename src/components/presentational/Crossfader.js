import React from 'react';

const Crossfader = ({crossFade, changeState}) => {
  const handleChange = (e) => {
    changeState({
      crossFade: e.target.value
    })
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
        value={crossFade}
        onChange={handleChange}
      />
    </div>
  );
}

export default Crossfader;
