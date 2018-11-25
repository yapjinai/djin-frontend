import React, { Component } from 'react';
import '../../css/Controls.css';

const PlayPause = (props) => {
  const playPause = () => {
    if (props.playing) {
      return 'Pause'
    }
    else {
      return 'Play'
    }
  }

  return (
    <div className="PlayPause">
      <button
        onClick={props.togglePlaying}
      >
        {playPause()}
      </button>
    </div>
  );
}
const Volume = (props) => {
  const handleChange = (e) => {
    props.changeVolume(parseFloat(e.target.value))
  }

  return (
    <div className="Volume">
      <label>Volume</label>
      <br />
      <input
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
const BpmSync = (props) => {
  return (
    <div className="BpmSync">
      <label>Sync to this BPM</label>
      <br />
      <button
        onClick={props.syncBpm}
      >
        Sync
      </button>
    </div>
  );
}
const PitchShift = (props) => {
  return (
    <div className="PitchShift">
      <label>Shift pitch with tempo</label>
      <br />
      <input
        type="checkbox"
        value={props.pitchShift}
        onChange={props.togglePitchShift}
      />
    </div>
  );
}

class Controls extends Component {
  render() {
    return (
      <div className='Controls'>
        <PlayPause
          playing={this.props.playing}
          togglePlaying={this.props.togglePlaying}
        />
        <Volume
          volume={this.props.volume}
          changeVolume={this.props.changeVolume}
        />
        <BpmSync
          syncBpm={this.props.syncBpm}
        />
      </div>
    )
  }
}
export default Controls;

// <PitchShift
// pitchShift={this.props.pitchShift}
// togglePitchShift={this.props.togglePitchShift}
// />
