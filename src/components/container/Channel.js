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
      audio: new Audio(),
      playing: false,
      volume: 1
    }
  }

  render() {
    if (this.state.currentSong && this.state.audio.src !== this.state.currentSong.url) {
      this.state.audio.src = this.state.currentSong.url
    }
    // popFromQueue={this.props.popFromQueue}

    return (
      <div className={`Channel ${this.props.side}`}>
        {this.props.side === 'left' ? this.displayQueue() : null}
        <div className='controls'>
          {this.state.currentSong ? this.state.currentSong.title : 'No song playing'}
          <Waveform
            currentSong = {this.state.currentSong}
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

  toggleAudio = () => {
    if (this.state.playing) {
      this.state.audio.play()
    }
    else {
      this.state.audio.pause()
    }
  }

  ///////////////////////
}

export default Channel;
