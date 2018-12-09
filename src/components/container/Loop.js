import React, { Component } from 'react';
import {keyboardShortcutsFunction} from '../keyboardShortcutsFunction'

class Loop extends Component {

  render() {
    return (
      <div className="Loop">
      <label>Loop</label>

      <input
      type="checkbox"
      checked={this.props.loop}
      onChange={this.props.toggleLoop}
      />

      {this.renderLoopSettings()}

      </div>
    );
  }

  componentDidMount() {
    keyboardShortcutsFunction.bind(this)('loop')
  }

  ////////////////////
  // 
  // handleChange = (e) => {
  //   const container = e.target.parentElement
  //   const loopSettings = container.querySelector('.loopSettings')
  //   if (this.props.loop) {
  //     loopSettings.classList.add('hidden')
  //   }
  //   else {
  //     loopSettings.classList.remove('hidden')
  //   }
  //   this.props.toggleLoop()
  // }


  startBack = () => {
    const start = this.props.waveform.regions.loop.start
    const newStart = start - 0.05
    if (newStart >= 0) {
      this.props.setRegionsState('start', newStart)
    }
  }
  startForwards = () => {
    const start = this.props.waveform.regions.loop.start
    const end = this.props.waveform.regions.loop.end
    const newStart = start + 0.05
    if (newStart <= end) {
      this.props.setRegionsState('start', newStart)
    }
  }

  endBack = () => {
    const start = this.props.waveform.regions.loop.start
    const end = this.props.waveform.regions.loop.end
    const newEnd = end - 0.05
    if (newEnd >= start) {
      this.props.setRegionsState('end', newEnd)
    }
  }
  endForwards = () => {
    const end = this.props.waveform.regions.loop.end
    const newEnd = end + 0.05
    // if (newEnd <= ?????) { // HOW TO FIND END OF FILE?
      this.props.setRegionsState('end', newEnd)
    // }
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
