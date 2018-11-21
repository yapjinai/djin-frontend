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
      playing: false,
      queue: [],
      volume: 1
    }
  }

  render() {
    return (
      <div className="Channel">
        Channel for {this.props.channel}
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
        <Queue
          channel={this.props.channel}
          queue={this.state.queue}
        />
      </div>
    );
  }

  //////////////////////

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
