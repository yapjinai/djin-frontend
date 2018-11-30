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
    this.setBackend()
    this.setLoop()

    return (
      <div className="Waveform">
        {this.props.currentSong ? this.renderWaveform() : null}
      </div>
    );
  }

  ////////////////////

  setAudioRate = () => {
    const givenAudioRate = this.props.audioRate
    const actualAudioRate = this.props.waveform.waveformOptions.audioRate

    if (actualAudioRate !== givenAudioRate) {
      this.props.setWaveformState('audioRate', givenAudioRate)
    }
  }

// todo: the redux and state work, but pitch shift toggle not working
  setBackend = () => {
    const pitchShift = this.props.pitchShift
    const backend = this.props.waveform.waveformOptions.backend

    if (pitchShift && (backend === 'MediaElement')) {
      this.props.setWaveformState('backend', 'WebAudio')
    }
    else if (!pitchShift && (backend === 'WebAudio')) {
      this.props.setWaveformState('backend', 'MediaElement')
    }
  }

  setLoop = () => {
    const givenLoop = this.props.loop
    const actualLoop = this.props.waveform.regions.loop.loop

    if (actualLoop !== givenLoop) {
      this.props.setRegionsState('loop', givenLoop)
    }
  }

  // WAVEFORM METHODS

  handlePosChange = (e) => {
    const newPos = e.originalArgs[0]
    if (newPos < this.props.waveform.regions.loop.start || newPos > this.props.waveform.regions.loop.end) {
      this.props.setPos(newPos)
    }
  }

  handleFinish = () => {
    console.log('finished');
    this.props.playNextFromQueue()
  }

  // REGIONS METHODS

  handleRegionUpdateEnd = (e) => {
    this.props.setRegionsState('start', e.originalArgs[0].start)
    this.props.setRegionsState('end', e.originalArgs[0].end)
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
            onRegionUpdateEnd={this.handleRegionUpdateEnd}
          />
        </Wavesurfer>
      )
  }
}

///////////////////////
// redux
///////////////////////

const mapStateToProps = (state, ownProps) => ({
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
