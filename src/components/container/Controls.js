import React, { Component } from 'react';
import '../../css/Controls.css';

import Loop from './Loop';
import Seek from './Seek';

const Volume = (props) => {
  const handleChange = (e) => {
    props.setVolume(parseFloat(e.target.value))
  }

  return (
    <div className="Volume">
      <label>Volume</label>
      <br />
      <input
        type="range"
        orient="vertical"
        min="0"
        max="1"
        step=".01"
        value={props.volume}
        onChange={handleChange}
      />
    </div>
  );
}
const DoubleHalf = (props) => {
  const handleClick = (e) => {
    props.setBpmFactor(e.target.name)
  }

  const displaySpeed = () => {
    let speed = `${props.bpmFactor} ×`
    switch (props.bpmFactor) {
      case 0.125:
        speed = '⅛'
        break;
      case 0.25:
        speed = '¼'
        break;
      case 0.5:
        speed = '½'
        break;
      default:
        break;
    }
    return `${speed} speed`
  }

  return (
    <div className="DoubleHalf">
    {displaySpeed()}
      <div className='double-half-buttons'>
        <button
          name='half'
          onClick={handleClick}
        >
          /2
        </button>
        <button
          name='original'
          onClick={handleClick}
        >
          original
        </button>
        <button
          name='double'
          onClick={handleClick}
        >
          ×2
        </button>
      </div>
    </div>
  );
}

class Controls extends Component {
  render() {
    return (
      <div className='Controls'>
        <div className='toggles'>
          <div className='top'>
            <div className='buttons'>
              <Seek
                currentSong={this.props.currentSong}
                // side={this.props.side}
                playing={this.props.playing}
                togglePlaying={this.props.togglePlaying}
                setPos={this.props.setPos}
                waveform={this.props.waveform}
              />

              <button
                onClick={this.props.syncBpm}
              >
                Sync master
              </button>
            </div>

            <div className='checkboxes'>

              <Loop
                side={this.props.side}

                loop={this.props.loop}
                toggleLoop={this.props.toggleLoop}

                setPos={this.props.setPos}

                waveform={this.props.waveform}
                setRegionsState={this.props.setRegionsState}
              />
            </div>
          </div>

          <DoubleHalf
            bpmFactor={this.props.bpmFactor}
            setBpmFactor={this.props.setBpmFactor}
          />
        </div>

        <div className='sliders'>
          <Volume
            volume={this.props.volume}
            setVolume={this.props.setVolume}
          />
        </div>
      </div>
    )
  }

  componentDidMount() {
  }

  //////////
}
export default Controls;

// <PitchShift
// pitchShift={this.props.pitchShift}
// togglePitchShift={this.props.togglePitchShift}
// />
