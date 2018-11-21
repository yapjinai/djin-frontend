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
    if (this.state.currentSong) {
      this.state.audio.src = this.state.currentSong.url
    }
    else {
      this.state.audio.src = 'http://localhost:3001/Smile.mp3'
    }
  }

  render() {
    console.log('rendering');

            if (this.state.playing) {
              this.state.audio.play()
            }
            else {
              this.state.audio.pause()
            }

    return (
      <div className={`Channel ${this.props.side}`}>
        {this.props.side === 'left' ? this.displayQueue() : null}
        <div className='controls'>
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
    })

  }
}

export default Channel;
