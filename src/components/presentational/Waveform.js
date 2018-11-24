import React, { Component } from 'react';
import Wavesurfer from 'react-wavesurfer';

class Waveform extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playing: true,
      pos: 0
    };
  }

  render() {
    return (
      <div className="Waveform">
        {this.renderWaveform()}
      </div>
    );
  }

  ////////////////////

  handleTogglePlay = () => {
    this.setState({
      playing: !this.state.playing
    });
  }
  handlePosChange = (e) => {
    this.setState({
      pos: e.originalArgs[0]
    });
  }

  renderWaveform = () => {
    if (this.props.currentSong) {
      const waveformOptions = {
        // interact: false,
        height: 64,
        fillParent: false,
        scrollParent: true,
        // minPxPerSec: 100
      }

      return (
        <Wavesurfer
          audioFile={this.props.currentSong.url}
          pos={this.state.pos}
          onPosChange={this.handlePosChange}
          playing={this.state.playing}
          options={waveformOptions}
        />
      )
    }
  }
}

export default Waveform;
