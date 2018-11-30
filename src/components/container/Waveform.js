import React, { Component } from 'react';
import Wavesurfer from 'react-wavesurfer';
import Regions from 'react-wavesurfer/src/plugins/regions';
import '../../css/Waveform.css';
// import Regions from 'wavesurfer.js/dist/plugin/wavesurfer.regions.min.js';

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

  handleFinish = () => {
    console.log('finished');
    // this.props.setPlaying(this.props.side, false)
    this.props.playNextFromQueue()
  }

  renderWaveform = () => {
    if (this.props.currentSong) {
      const waveformOptions = {
        audioRate: this.props.audioRate,
        // backend: this.props.pitchShift ? 'WebAudio' : 'MediaElement',

        height: 128,
        fillParent: false,
        scrollParent: true,

        interact: false,
      }

      const regionsObjects = {
        loop: {
          id: 'loop',
          start: 0,
          end: 2,
          loop: true,
        }
      }

      return (
        <Wavesurfer
          audioFile={this.props.currentSong.url}
          playing={this.props.playing}
          volume={this.props.volume}
          options={waveformOptions}

          pos={this.state.pos}
          onPosChange={this.handlePosChange}
          onFinish={this.handleFinish}
        >

          <Regions
            regions={regionsObjects}
          />

        </Wavesurfer>
      )
    }
  }
}

export default Waveform;
