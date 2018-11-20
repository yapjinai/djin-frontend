import React, { Component } from 'react';

class Tempo extends Component {
  render() {
    return (
      <div className="Tempo">
        <label>Tempo</label>
        <br />
        <input id="leftTempoValue" type="number" min="0.01" max="2" value="1" step=".01" />
        <input id="leftTempoSlider" type="range" min="0.01" max="2" value="1" step=".01" />
      </div>
    );
  }
}

export default Tempo;
