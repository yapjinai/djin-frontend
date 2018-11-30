import React, { Component } from 'react';

import { connect } from 'react-redux'
import {
  setPos,
  setWaveformState,
  setRegionsState,
} from '../../actions'

import '../../css/Waveform.css';
import Wavesurfer from 'react-wavesurfer';
import Regions from 'react-wavesurfer/src/plugins/regions';
// import Regions from 'wavesurfer.js/dist/plugin/wavesurfer.regions.min.js';

class Waveform extends Component {
  render() {
    this.setAudioRate()

    return (
      <div className="Waveform">
        {this.props.currentSong ? this.renderWaveform() : null}
      </div>
    );
  }

  ////////////////////

  setAudioRate = () => {
    if (this.props.waveform.waveformOptions.audioRate !== this.props.channel.calculatedAudioRate) {
      this.props.setWaveformState('audioRate', this.props.audioRate)
    }
  }

  // WAVEFORM METHODS

  handlePosChange = (e) => {
    const newPos = e.originalArgs[0]
    if (newPos < this.props.waveform.regions.loop.start || newPos > this.props.waveform.regions.loop.end) {
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

    const newRegions = {...this.props.waveform.regions}
    const newLoop = {...this.props.waveform.loop}

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

          options={this.props.waveform.waveformOptions}
          pos={this.props.waveform.pos}

          onPosChange={this.handlePosChange}
          onFinish={this.handleFinish}
        >

          <Regions
            regions={this.props.waveform.regions}
            onRegionUpdated={this.handleRegionUpdated}
          />

        </Wavesurfer>
      )
  }
}

///////////////////////
// redux
///////////////////////

const mapStateToProps = (state, ownProps) => ({
  channel: state.channels[ownProps.side],
  waveform: state.waveforms[ownProps.side]
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  setPos: (pos) => dispatch(setPos(ownProps.side, pos)),
  setWaveformState: (key, newValue) => dispatch(setWaveformState(ownProps.side, key, newValue)),
  setRegionsState: (key, newValue) => dispatch(setRegionsState(ownProps.side, key, newValue)),
})

const connectedWaveform = connect(
  mapStateToProps,
  mapDispatchToProps
)(Waveform)


export default connectedWaveform;
