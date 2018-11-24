import React, { Component } from 'react';
import Wavesurfer from 'react-wavesurfer';

class Waveform extends Component {
  constructor(props) {
    super(props);

    this.state = {
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

  handlePosChange = (e) => {
    this.setState({
      pos: e.originalArgs[0]
    });
  }

  renderWaveform = () => {
    if (this.props.currentSong) {


      const waveformOptions = {
        audioRate: this.props.audioRate,
        backend: this.props.pitchShift ? 'WebAudio' : 'MediaElement',

        height: 64,
        fillParent: false,
        scrollParent: true,
      }

      // console.table(waveformOptions)
      console.log(typeof this.props.volume, this.props.volume)
      return (
        <Wavesurfer
          audioFile={this.props.currentSong.url}
          playing={this.props.playing}
          volume={this.props.volume}
          options={waveformOptions}

          pos={this.state.pos}
          onPosChange={this.handlePosChange}
        />
      )
    }
  }
}

export default Waveform;
