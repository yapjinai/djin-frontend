import React, { Component } from 'react';
import '../../css/Channel.css';
import Waveform from '../presentational/Waveform';
import PlayPause from '../presentational/PlayPause';
import Volume from '../presentational/Volume';
import Queue from './Queue';

class Channel extends Component {
  constructor() {
    super()
    this.state = {
      currentSong: null,
      // audio: new Audio(),
      playing: false,
      volume: .5,
      calculatedVolume: .5,
      calculatedAudioRate: 1
    }
  }

  render() {
    // if (this.state.currentSong && this.state.audio.src !== this.state.currentSong.url) {
    //   this.state.audio.src = this.state.currentSong.url
    // }

    if (this.state.currentSong) {
      this.setBpm()
      this.setAudioVolume()
      this.setAudioBpm()
    }

    return (
      <div className={`Channel ${this.props.side}`}>
        {this.props.side === 'left' ? this.displayQueue() : null}
        <div className='controls'>
          <h2>{this.state.currentSong ? `${this.state.currentSong.title} (${this.state.currentSong.bpm} bpm)` : 'No song playing'}</h2>

          <Waveform
            currentSong = {this.state.currentSong}

            playing={this.state.playing}
            volume={this.state.calculatedVolume}
            audioRate={this.state.calculatedAudioRate}
          />
          <PlayPause
            playing={this.state.playing}
            togglePlaying={this.togglePlaying}
          />
          <Volume
            volume={this.state.volume}
            changeVolume={this.changeVolume}
          />
        </div>
        {this.props.side === 'right' ? this.displayQueue() : null}
      </div>
    );
  }

  //////////////////////
  // CHANNEL CONTROLS
  //////////////////////

  displayQueue = () => {
    return (
      <Queue
        side={this.props.side}
        queue={this.props.queue}
        removeFromQueue={this.props.removeFromQueue}
        changeCurrentSong={this.changeCurrentSong}
      />
    )
  }

  changeVolume = (newVolume) => {
    this.setState({
      volume: newVolume
    })
  }

  changeCurrentSong = (newSong) => {
    this.setState({
      currentSong: newSong,
      playing: true
    }, () => {
      this.playCurrentOrQueue()
    })
  }

  ///////////////////////

  // TODO: hacky

  togglePlaying = () => {
    if (this.state.currentSong || this.props.queue[0]) {
      this.setState({
        playing: !this.state.playing
      }, () => {
        this.playCurrentOrQueue()
      })
    }
  }

  playCurrentOrQueue = () => {
    if (this.state.currentSong) {
      this.toggleAudio()
    }
    else {
      const currentSong = this.props.popFromQueue(this.props.side)
      this.setState({
        currentSong: currentSong
      }, () => {
        this.toggleAudio()
      })
    }
  }

  //////////////////////
  // AUDIO CONTROLS
  //////////////////////

  toggleAudio = () => {
    if (this.state.playing) {
      // this.state.audio.play()
      this.props.changeState({masterPlaying: true})
    }
    else {
      // this.state.audio.pause()
    }
  }

  setAudioVolume = () => {
    const volume = this.state.volume
    const crossFade = parseFloat(this.props.crossFade)
    const side = this.props.side
    let newVolume

    if (crossFade > 0 && side === 'left') {
      newVolume = volume * (1 - crossFade)
    }
    else if (crossFade < 0 && side === 'right') {
      newVolume = volume * (1 + crossFade)
    }
    else {
      newVolume = volume
    }

    if (this.state.calculatedVolume !== newVolume) {
      this.setState({
        calculatedVolume: newVolume
      }, () => {console.log(this.state.calculatedVolume, typeof this.state.calculatedVolume)})
    }
  }

  setAudioBpm = () => {
    const globalBpm = this.props.masterBpm
    const songBpm = this.state.currentSong.bpm
    const songPlaybackRate = globalBpm / songBpm

    if (songPlaybackRate > 0.1 && this.state.calculatedAudioRate !== songPlaybackRate) {
      // this.state.audio.playbackRate = songPlaybackRate
      this.setState({
        calculatedAudioRate: songPlaybackRate
      })
    }
  }

  //////////////////////
  // GLOBAL CONTROLS
  //////////////////////


//////////////TODO THIS IS HACKY FIX IT!!!!!!!!
  setBpm = () => { // if no song bpm set and song playing for first time, set bpm to current song bpm
    if (!this.props.masterBpm) {
      this.props.changeState({
        masterBpm: this.state.currentSong.bpm
      })
    }
  }

  ///////////////////////
}

export default Channel;
