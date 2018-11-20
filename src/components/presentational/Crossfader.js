import React, { Component } from 'react';

class Crossfader extends Component {
  render() {
    return (
      <div className="Crossfader">
        <label>
          Crossfader
        </label>
        <br />
        <input id="crossfader" type="range" min="-1" max="1" value="0" step=".01" />
      </div>
    );
  }
}

export default Crossfader;
