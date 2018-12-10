import React, { Component } from 'react';
import {keyboardShortcutsFunction} from '../keyboardShortcutsFunction'

class Seek extends Component {
  render() {
    return (
      <div className="Seek">
        <button
          onClick={this.back}
        >
          {'<<'}
        </button>

        <button
          onClick={this.props.togglePlaying}
          className='play-pause'
        >
          {this.playPause()}
        </button>

        <button
          onClick={this.forwards}
        >
          {'>>'}
        </button>
      </div>
    );
  }

  componentDidMount() {
    keyboardShortcutsFunction.bind(this)('seek')
  }

  ////////////////////
  // PLAYING CONTROLS

  playPause = () => {
    if (this.props.channel.playing) {
      return 'Pause'
    }
    else {
      return 'Play'
    }
  }

  ///////////////////////////////////
  //// SEEK CONTROLS

  seek = ({forwards, coarse}) => {
    const pos = this.props.waveform.pos

    let amount
    if (coarse) {
      amount = 1
      if (this.props.channel.currentSong) {
        const bpm = this.props.channel.currentSong.bpm
        amount = 60/bpm
      }
    }
    else {
      amount = 0.1
    }

    let newPos
    if (forwards) {
      newPos = pos + amount
    }
    else {
      newPos = pos - amount
    }

    if (newPos > 0) {
      this.props.setPos(newPos)
    }
    else {
      this.props.setPos(0)
    }
  }

  /////////////////////////

}

export default Seek;
