import React, { Component } from 'react';
import Wavesurfer from 'react-wavesurfer';
import Regions from 'react-wavesurfer/src/plugins/regions';
import '../../css/Waveform.css';
// import Regions from 'wavesurfer.js/dist/plugin/wavesurfer.regions.min.js';

class Waveform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pos: 0,
      waveformOptions: {
        audioRate: this.props.audioRate,
        // backend: this.props.pitchShift ? 'WebAudio' : 'MediaElement',

        height: 128,
        fillParent: false,
        scrollParent: true,
      },
      regions: {
        loop: {
          id: 'loop',
          start: 6,
          end: 8,
          loop: true,
        }
      }
    };
  }

  render() {
    return (
      <div className="Waveform">
        {this.props.currentSong ? this.renderWaveform() : null}
      </div>
    );
  }

  ////////////////////

  // WAVEFORM METHODS

  handlePosChange = (e) => {
    const newPos = e.originalArgs[0]
    if (newPos < this.state.regions.loop.start || newPos > this.state.regions.loop.end) {
      this.setState({
        pos: newPos
      });
    }
  }

  handleFinish = () => {
    console.log('finished');
    this.props.playNextFromQueue()
  }

  // REGIONS METHODS

  handleRegionUpdated = (e) => {
    console.log('updating region');

    const newRegions = {...this.state.regions}
    const newLoop = {...this.state.loop}

    newLoop.start = e.originalArgs[0].start
    newLoop.end = e.originalArgs[0].end

    newRegions.loop = newLoop
    this.setState({
      regions: newRegions
    })
  }

  // RENDER

  renderWaveform = () => {

      return (
        <Wavesurfer
          audioFile={this.props.currentSong.url}
          playing={this.props.playing}
          volume={this.props.volume}

          options={this.state.waveformOptions}
          pos={this.state.pos}

          onPosChange={this.handlePosChange}
          onFinish={this.handleFinish}
        >

          <Regions
            regions={this.state.regions}
            onRegionUpdated={this.handleRegionUpdated}
          />

        </Wavesurfer>
      )
  }
}

export default Waveform;
