import React, { Component } from 'react';

import { connect } from 'react-redux'
import {
  setBpm,
  setCrossfade,

  revertToDefault,
  setChannelState,
  setRegionsState,

  setPlaying,

  shiftFromQueue,
  setPos
} from '../../actions'

import '../../css/Channel.css';
import Waveform from './Waveform';
import Controls from './Controls';
import Queue from './Queue';

class Channel extends Component {
  render() {
    if (this.props.channel.currentSong) {
      this.setInitialBpm()
      this.calculateAudioVolume()
      this.calculateAudioRate()
    }
    return (
      <div className={`Channel ${this.props.side}`}>
        <div className='controls'>
          <h2>{this.props.channel.currentSong ? `${this.props.channel.currentSong.title} (${parseInt(this.props.channel.currentSong.bpm)} bpm)` : 'No song playing'}</h2>

          <Waveform
            side={this.props.side}

            currentSong={this.props.channel.currentSong}
            playing={this.props.channel.playing}

            volume={this.props.channel.calculatedVolume}
            audioRate={this.props.channel.calculatedAudioRate}
            pitchShift={this.props.channel.pitchShift}
            loop={this.props.channel.loop}

            playNextFromQueue={this.playNextFromQueue}
            // setPlaying={this.props.setPlaying}
          />

          <Controls
            side={this.props.side}

            playing={this.props.channel.playing}
            togglePlaying={this.togglePlaying}

            setPos={this.props.setPos}

            volume={this.props.channel.volume}
            setVolume={this.setVolume}

            syncBpm={this.syncBpm}

            bpmFactor={this.props.channel.bpmFactor}
            setBpmFactor={this.setBpmFactor}

            pitchShift={this.props.channel.pitchShift}
            togglePitchShift={this.togglePitchShift}

            loop={this.props.channel.loop}
            toggleLoop={this.toggleLoop}

            waveform={this.props.waveform}
            setRegionsState={this.props.setRegionsState}
          />
        </div>
        <Queue
          side={this.props.side}
          setCurrentSong={this.setCurrentSong}
        />
      </div>
    );
  }
  //////////////////////
  // CHANNEL CONTROLS
  //////////////////////

  setVolume = (newVolume) => {
    this.props.setChannelState('volume', newVolume)
  }

  setBpmFactor = (type) => {
    let newBpmFactor = this.props.channel.bpmFactor
    switch (type) {
      case 'double':
        newBpmFactor *= 2
        break;
      case 'half':
        newBpmFactor /= 2
        break;
      default:
        newBpmFactor = 1
        break;
    }
    if (newBpmFactor >= 0.125 && newBpmFactor <= 8) {
      this.props.setChannelState('bpmFactor', newBpmFactor)
    }
  }

  setCurrentSong = (newSong) => {
    this.props.setChannelState('currentSong', null)
    this.props.revertToDefault()
    this.props.setChannelState('currentSong', newSong)
    // this.props.setPos(0)
  }

  togglePlaying = () => {
    if (this.props.channel.currentSong) {
      this.props.setPlaying(!this.props.channel.playing)
    }
    else if (this.props.queue[0]) {
      this.props.setPlaying(!this.props.channel.playing)

      this.playNextFromQueue()
    }
  }

  togglePitchShift = () => {
    this.props.setChannelState('pitchShift', !this.props.channel.pitchShift)
  }

  toggleLoop = () => {
    this.props.setChannelState('loop', !this.props.channel.loop)
  }
  ///////////////////////

  playNextFromQueue = () => {
    if (this.props.queue[0]) {
      const currentSong = this.props.queue[0]
      this.props.setChannelState('currentSong', currentSong)
      this.props.shiftFromQueue()
    }
    else {
      this.props.setChannelState('currentSong', null)
      this.props.setPlaying(false)
    }
  }

  //////////////////////
  // AUDIO CONTROLS
  //////////////////////

  calculateAudioVolume = () => {
    const volume = this.props.channel.volume
    const crossfade = parseFloat(this.props.crossfade)
    const side = this.props.side
    let newVolume

    if (crossfade > 0 && side === 'left') {
      newVolume = volume * (1 - crossfade)
    }
    else if (crossfade < 0 && side === 'right') {
      newVolume = volume * (1 + crossfade)
    }
    else {
      newVolume = volume
    }

    if (this.props.channel.calculatedVolume !== newVolume) {
      this.props.setChannelState('calculatedVolume', newVolume)
    }
  }

  calculateAudioRate = () => {
    const masterBpm = this.props.masterBpm
    const songBpm = this.props.channel.currentSong.bpm
    const songPlaybackRate = masterBpm / songBpm
    const bpmFactor = this.props.channel.bpmFactor

    if (songPlaybackRate > 0.1 && this.props.channel.calculatedAudioRate !== songPlaybackRate * bpmFactor) {
      this.props.setChannelState('calculatedAudioRate', songPlaybackRate * bpmFactor)
    }
  }

  //////////////////////
  // GLOBAL CONTROLS
  //////////////////////

  syncBpm = () => {
    if (this.props.channel.currentSong) {
      this.props.setBpm(this.props.channel.currentSong.bpm)
    }
  }

  setInitialBpm = () => { // if no song bpm set and song playing for first time, set bpm to current song bpm
    if (!this.props.masterBpm) {
      this.syncBpm()
    }
  }
}

///////////////////////
// redux
///////////////////////

const mapStateToProps = (state, ownProps) => ({
  // App state
  masterBpm: state.masterBpm,
  crossfade: state.crossfade,

  // Channel state
  channel: state.channels[ownProps.side],
  waveform: state.waveforms[ownProps.side],
  queue: state.queues[ownProps.side]
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  // App state setters
  setBpm: (bpm) => dispatch(setBpm(bpm)),
  setCrossfade: (crossfade) => dispatch(setCrossfade(crossfade)),

  // Channel state setters
  setChannelState: (key, newValue) => dispatch(setChannelState(ownProps.side, key, newValue)),
  revertToDefault: () => dispatch(revertToDefault()),
  setRegionsState: (key, newValue) => dispatch(setRegionsState(ownProps.side, key, newValue)),

  setPlaying: (playing) => dispatch(setPlaying(ownProps.side, playing)),

  shiftFromQueue: () => dispatch(shiftFromQueue(ownProps.side)),

  // Waveform state setters
  setPos: (pos) => dispatch(setPos(ownProps.side, pos))
})

const connectedChannel = connect(
  mapStateToProps,
  mapDispatchToProps
)(Channel)


export default connectedChannel;
