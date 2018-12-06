import React, { Component } from 'react';
import addKeyboardShortcutsSeek from '../KeyboardShortcutsSeek';

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
    addKeyboardShortcutsSeek.bind(this)()
  }

  ////////////////////

  playPause = () => {
    if (this.props.playing) {
      return 'Pause'
    }
    else {
      return 'Play'
    }
  }

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
    let newPos = pos - 0.9

    if (this.props.currentSong) {
      const bpm = this.props.currentSong.bpm
      const beat = 60/bpm
      newPos = pos - beat + 0.1
    }

    if (newPos > 0) {
      this.props.setPos(newPos)
    }
  }
  fastForwards = () => {
    const pos = this.props.waveform.pos
    let newPos = pos + 0.9

    if (this.props.currentSong) {
      const bpm = this.props.currentSong.bpm
      const beat = 60/bpm
      newPos = pos + beat - 0.1
    }

    this.props.setPos(newPos)
  }

}

export default Seek;
