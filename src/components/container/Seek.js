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

  back = () => {
    const pos = this.props.waveform.pos
    const newPos = pos - 0.1
    if (newPos > 0) {
      this.props.setPos(newPos)
    }
  }
  forwards = () => {
    const pos = this.props.waveform.pos
    const newPos = pos + 0.1
    this.props.setPos(newPos)
  }

  fastBack = () => {
    const pos = this.props.waveform.pos
    let newPos = pos - 1

    if (this.props.channel.currentSong) {
      const bpm = this.props.channel.currentSong.bpm
      const beat = 60/bpm
      newPos = pos - beat
    }

    if (newPos > 0) {
      this.props.setPos(newPos)
    }
  }
  fastForwards = () => {
    const pos = this.props.waveform.pos
    let newPos = pos + 1

    if (this.props.channel.currentSong) {
      const bpm = this.props.channel.currentSong.bpm
      const beat = 60/bpm
      newPos = pos + beat
    }

    this.props.setPos(newPos)
  }

  /////////////////////////

}

export default Seek;
