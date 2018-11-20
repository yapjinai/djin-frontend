import React, { Component } from 'react';

class Volume extends Component {
  render() {
    return (
      <div className="Volume">
        <label>Volume</label>
        <br />
        <input id="leftVolumeSlider" type="range" min="0" max="1" value="1" step=".01" />
      </div>
    );
  }
}

export default Volume;
