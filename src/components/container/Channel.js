import React, { Component } from 'react';
import '../../css/Channel.css';
import Waveform from '../presentational/Waveform';
import PlayPause from '../presentational/PlayPause';
import Volume from '../presentational/Volume';
import Tempo from '../presentational/Tempo';

class Channel extends Component {
  render() {
    return (
      <div className="Channel">
        Channel for {this.props.channel}
        <Waveform />
        <PlayPause />
        <Volume />
        <Tempo />
      </div>
    );
  }
}

export default Channel;
