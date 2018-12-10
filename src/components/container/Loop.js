import React, { Component } from 'react';
import {keyboardShortcutsFunction} from '../keyboardShortcutsFunction'

class Loop extends Component {

  render() {
    return (
      <div className="Loop">
      <label>Loop</label>

      <input
      type="checkbox"
      checked={this.props.channel.loop}
      onChange={this.toggleLoop}
      />

      {this.renderLoopSettings()}

      </div>
    );
  }

  componentDidMount() {
    keyboardShortcutsFunction.bind(this)('loop')
  }
  //
  // let beat = 0.95
  // // if (this.props.channels['left'].currentSong) {
  //   const leftBpm = this.props.channels['left'].currentSong.bpm
  //   beat = 60/leftBpm
  // // }

  /////////////////
  // TOGGLE LOOP
  toggleLoop = () => {
    this.props.setChannelState('loop', !this.props.channel.loop)
  }

  /////////////////
  // MOVE LOOP

  moveLoop = ({moveStart, forwards, coarse}) => {
    const start = this.props.waveform.regions.loop.start
    const end = this.props.waveform.regions.loop.end

    let pos
    if (moveStart) {
      pos = start
    }
    else {
      pos = end
    }

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

    if (moveStart) {
      if (
        newPos >= 0 &&
        newPos < end
      ) {
        this.props.setRegionsState('start', newPos)
      }
    }
    else {
      if (
        newPos > start
      ) {
        this.props.setRegionsState('end', newPos)
      }
    }
  }

  resizeLoop = ({double, fromStart}) => {
    console.log('resizing', double, fromStart);
    const start = this.props.waveform.regions.loop.start
    const end = this.props.waveform.regions.loop.end
    const length = end - start
    let newLength
    if (double) {
      newLength = length * 2
    }
    else {
      newLength = length / 2
    }

    if (fromStart) {
      if (newLength > .01) {
        this.props.setRegionsState('end', start + newLength)
      }
    }
    else {
      if (
        newLength > .01 &&
        end - newLength >= 0
      ) {
        this.props.setRegionsState('start', end - newLength)
      }
    }
  }

  loopHalf = () => {
    const start = this.props.waveform.regions.loop.start
    const end = this.props.waveform.regions.loop.end
    const length = end - start
    const newLength = length / 2
    if (newLength > .01) {
      this.props.setRegionsState('end', start + newLength)
    }
  }
  loopDouble = () => {
    const start = this.props.waveform.regions.loop.start
    const end = this.props.waveform.regions.loop.end
    const length = end - start
    const newLength = length * 2
    // if (start + newLength < ?????) { // HOW TO FIND END OF FILE?
      this.props.setRegionsState('end', start + newLength)
    // }
  }

  renderLoopSettings = () => {
    return (
      <div className="loopSettings">
        <div>
          <label>Loop start</label>
          <br />
          <span>
            <button
              onClick={this.startBack}
            >
              {'<'}
            </button>
            <button
              onClick={this.startForwards}
            >
              {'>'}
            </button>
          </span>
        </div>

        <div>
          <label>Loop length</label>
          <br />
          <span>
            <button
              onClick={this.loopHalf}
            >
              /2
            </button>
            <button
              onClick={this.loopDouble}
            >
              ×2
            </button>
          </span>
        </div>

        <div>
          <label>Loop end</label>
          <br />
          <span>
            <button
              onClick={this.endBack}
            >
              {'<'}
            </button>
            <button
              onClick={this.endForwards}
            >
              {'>'}
            </button>
          </span>
        </div>
      </div>
    )
  }

}

export default Loop;
