import React, { Component } from 'react';

import { connect } from 'react-redux'
import { setBpm, setCrossfade } from '../../actions'

import '../../css/Channel.css';
import Waveform from './Waveform';
import Controls from './Controls';
import Queue from './Queue';

class Channel extends Component {
  constructor() {
    super()
    this.state = {
      currentSong: null,
      playing: false,
      waveformPlaying: false,
      volume: .5,
      pitchShift: false,
      calculatedVolume: .5,
      bpmFactor: 1,
      calculatedAudioRate: 1
    }
  }

  render() {
    if (this.state.currentSong) {
      this.setBpm()
      this.setAudioVolume()
      this.setAudioBpm()
    }

    return (
      <div className={`Channel ${this.props.side}`}>
        <div className='controls'>
          <h2>{this.state.currentSong ? `${this.state.currentSong.title} (${this.state.currentSong.bpm} bpm)` : 'No song playing'}</h2>

          <Waveform
            currentSong={this.state.currentSong}

            playing={this.state.waveformPlaying}
            volume={this.state.calculatedVolume}
            audioRate={this.state.calculatedAudioRate}
            pitchShift={this.state.pitchShift}

            // playNextFromQueue={this.playNextFromQueue}
          />

          <Controls
            playing={this.state.playing}
            togglePlaying={this.togglePlaying}

            volume={this.state.volume}
            changeVolume={this.changeVolume}

            syncBpm={this.syncBpm}

            bpmFactor={this.state.bpmFactor}
            changeBpmFactor={this.changeBpmFactor}

            pitchShift={this.state.pitchShift}
            togglePitchShift={this.togglePitchShift}
          />
        </div>
        <Queue
          side={this.props.side}
        />
      </div>
    );
  }
  //////////////////////
  // CHANNEL CONTROLS
  //////////////////////


  changeVolume = (newVolume) => {
    this.setState({
      volume: newVolume
    })
  }

  changeBpmFactor = (type) => {
    let newBpmFactor = this.state.bpmFactor
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
      this.setState({
        bpmFactor: newBpmFactor
      })
    }
  }

  ////

  syncBpm = () => {
    if (this.state.currentSong) {
      this.props.setBpm(this.state.currentSong.bpm)
    }
  }

  ////

  togglePitchShift = () => {
    this.setState({
      pitchShift: !this.state.pitchShift
    })
  }

  changeCurrentSong = (newSong) => {
    this.setState({
      currentSong: newSong,
      // playing: true
    }, () => {
      this.playCurrentOrQueue()
    })
  }

  ///////////////////////

  // TODO: hacky

  togglePlaying = () => {
    if (this.state.currentSong || this.props.queue[0]) {
      this.setState({
        playing: !this.state.playing,
        waveformPlaying: !this.state.waveformPlaying
      }, () => {
        this.playCurrentOrQueue()
      })
    }
  }

  playCurrentOrQueue = () => {
    if (this.state.currentSong) {
      // this.toggleAudio()
    }
    else {
      this.playNextFromQueue()
    }
  }

  playNextFromQueue = () => {
    if (this.props.queue[0]) {
      const currentSong = this.props.shiftFromQueue(this.props.side)
      this.setState({
        currentSong: currentSong
      }
      // , () => {
      //   this.toggleAudio()
      // }
      )
    }
    else {
      this.setState({
        currentSong: null,
        playing: false
      })
    }
  }

  //////////////////////
  // AUDIO CONTROLS
  //////////////////////
  //
  // toggleAudio = () => {
  //   if (this.state.playing) {
  //     // this.state.audio.play()
  //   }
  //   else {
  //     // this.state.audio.pause()
  //   }
  // }

  setAudioVolume = () => {
    console.log(this.props.crossfade);
    const volume = this.state.volume
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

    if (this.state.calculatedVolume !== newVolume) {
      this.setState({
        calculatedVolume: newVolume
      })
    }
  }

  setAudioBpm = () => {
    const masterBpm = this.props.masterBpm
    const songBpm = this.state.currentSong.bpm
    const songPlaybackRate = masterBpm / songBpm
    const bpmFactor = this.state.bpmFactor

    if (songPlaybackRate > 0.1 && this.state.calculatedAudioRate !== songPlaybackRate * bpmFactor) {
      // this.state.audio.playbackRate = songPlaybackRate
      this.setState({
        calculatedAudioRate: songPlaybackRate * bpmFactor
      })
    }
  }

  //////////////////////
  // GLOBAL CONTROLS
  //////////////////////


//////////////TODO THIS IS HACKY FIX IT!!!!!!!!
  setBpm = () => { // if no song bpm set and song playing for first time, set bpm to current song bpm
    if (!this.props.masterBpm) {
      this.syncBpm()
    }
  }

  ///////////////////////
}

const mapStateToProps = (state, ownProps) => ({
  masterBpm: state.masterBpm,
  crossfade: state.crossfade
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  setBpm: (bpm) => dispatch(setBpm(bpm)),
  setCrossfade: (crossfade) => dispatch(setCrossfade(crossfade)),
})

const connectedChannel = connect(
  mapStateToProps,
  mapDispatchToProps
)(Channel)


export default connectedChannel;
