import React, { Component } from 'react';

import { connect } from 'react-redux'
import {
  setBpm,
  setCrossfade,

  setChannelState,

  shiftFromQueue
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

    console.log(this.props.channel.currentSong);

    return (
      <div className={`Channel ${this.props.side}`}>
        <div className='controls'>
          <h2>{this.props.channel.currentSong ? `${this.props.channel.currentSong.title} (${this.props.channel.currentSong.bpm} bpm)` : 'No song playing'}</h2>

          <Waveform
            currentSong={this.props.channel.currentSong}
            playing={this.props.channel.playing}

            volume={this.props.channel.calculatedVolume}
            audioRate={this.props.channel.calculatedAudioRate}

            playNextFromQueue={this.playNextFromQueue}
          />

          <Controls
            playing={this.props.channel.playing}
            togglePlaying={this.togglePlaying}

            volume={this.props.channel.volume}
            setVolume={this.setVolume}

            syncBpm={this.syncBpm}

            bpmFactor={this.props.channel.bpmFactor}
            setBpmFactor={this.setBpmFactor}
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
    this.props.setChannelState(this.props.side, 'volume', newVolume)
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
      this.props.setChannelState(this.props.side, 'bpmFactor', newBpmFactor)
    }
  }

  setCurrentSong = (newSong) => {
    this.props.setChannelState(this.props.side, 'currentSong', newSong)
  }

  togglePlaying = () => {
    if (this.props.channel.currentSong) {
      this.props.setChannelState(this.props.side, 'playing', !this.props.channel.playing)
    }
    else if (this.props.queue[0]) {
      this.props.setChannelState(this.props.side, 'playing', !this.props.channel.playing)

      this.playCurrentOrQueue()
    }
  }
  ///////////////////////

  playCurrentOrQueue = () => {
    if (this.props.channel.currentSong) {

    }
    else {
      this.playNextFromQueue()
    }
  }

  playNextFromQueue = () => {
    if (this.props.queue[0]) {
      const currentSong = this.props.queue[0]
      this.props.shiftFromQueue(this.props.side)
      this.props.setChannelState(this.props.side, 'currentSong', currentSong)
      this.props.setChannelState(this.props.side, 'playing', true)
    }
    else {
      this.props.setChannelState(this.props.side, 'currentSong', null)
      this.props.setChannelState(this.props.side, 'playing', false)
    }
  }

  //////////////////////
  // AUDIO CONTROLS
  //////////////////////

  calculateAudioVolume = () => {
    console.log(this.props.crossfade);
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
      this.props.setChannelState(this.props.side, 'calculatedVolume', newVolume)
    }
  }

  calculateAudioRate = () => {
    const masterBpm = this.props.masterBpm
    const songBpm = this.props.channel.currentSong.bpm
    const songPlaybackRate = masterBpm / songBpm
    const bpmFactor = this.props.channel.bpmFactor

    if (songPlaybackRate > 0.1 && this.props.channel.calculatedAudioRate !== songPlaybackRate * bpmFactor) {
      this.props.setChannelState(this.props.side, 'calculatedAudioRate', songPlaybackRate * bpmFactor)
    }
  }

  //////////////////////
  // GLOBAL CONTROLS
  //////////////////////

  syncBpm = () => {
    if (this.props.channel.currentSong) {
      console.log(this.props.channel.currentSong);
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

  queue: state.queues[ownProps.side]
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  // App state setters
  setBpm: (bpm) => dispatch(setBpm(bpm)),
  setCrossfade: (crossfade) => dispatch(setCrossfade(crossfade)),

  // Channel state setters
  setChannelState: (side, key, newValue) => dispatch(setChannelState(side, key, newValue)),

  shiftFromQueue: (side) => dispatch(shiftFromQueue(side))
})

const connectedChannel = connect(
  mapStateToProps,
  mapDispatchToProps
)(Channel)


export default connectedChannel;
