import React, { Component } from 'react';
import '../../css/Channel.css';
import Waveform from '../presentational/Waveform';
import PlayPause from '../presentational/PlayPause';
import Volume from '../presentational/Volume';
import Queue from '../presentational/Queue';

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
            changePlaying={this.changePlaying}
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

  playAudio = () => {
    if (this.state.playing) {
      if (this.state.currentSong) {
        this.state.audio.play()
      }
      else {
        const currentSong = this.props.popFromQueue(this.props.side)
        this.setState({
          currentSong: currentSong
        })
      }
    }
    else {
      this.state.audio.pause()
    }
  }

  displayQueue = () => {
    return (
      <Queue
        side={this.props.side}
        queue={this.props.queue}
      />
    )
  }

  changeVolume = (newVolume) => {
    this.setState({
      volume: newVolume
    })
  }

  changePlaying = () => {
    this.setState({
      playing: !this.state.playing
    }, () => {
      this.playAudio()
    })
  }
}

export default Channel;
