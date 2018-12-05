import React, { Component } from 'react';
import '../../css/Controls.css';

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
// const PitchShift = (props) => {
//   return (
//     <div className="PitchShift">
//       <label>Pitch shift</label>
//       <br />
//       <input
//         type="checkbox"
//         checked={props.loop}
//         onChange={props.togglePitchShift}
//       />
//     </div>
//   );
// }
const Loop = ({loop, toggleLoop, waveform, setRegionsState}) => {
  const setLoopStart = (e) => {
    // if (e.target.value < waveform.regions.loopEnd) {
      setRegionsState('start', e.target.value)
    // }
  }
  const setLoopEnd = (e) => {
    // if (e.target.value > waveform.regions.loopStart) {
      setRegionsState('end', e.target.value)
    // }
  }

  return (
    <div className="Loop">
      <label>Loop</label>
      <br />
      <input
        type="checkbox"
        checked={loop}
        onChange={toggleLoop}
      />
      <div className="loopSliders">
        <div>
          <label>Loop start</label>
          <input
            id='loopStart'
            type="range"
            name='loopStart'
            value={waveform.regions.loop.start}
            onChange={setLoopStart}
          />
        </div>
        <div>
          <label>Loop end</label>
          <input
            id='loopEnd'
            type="range"
            name='loopEnd'
            value={waveform.regions.loop.end}
            onChange={setLoopEnd}
          />
        </div>
      </div>
    </div>
  );
}

class Controls extends Component {
  render() {
    console.log(this.props.waveform.regions.loop);

    return (
      <div className='Controls'>
        <div className='toggles'>
          <div className='top'>
            <div className='buttons'>
              <button
                onClick={this.props.togglePlaying}
                className='play-pause'
              >
                {this.playPause()}
              </button>
              <br />
              <button
                onClick={this.props.syncBpm}
              >
                Sync master
              </button>
            </div>

            <div className='checkboxes'>

              <Loop
              loop={this.props.loop}
              toggleLoop={this.props.toggleLoop}

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

  //////////

  playPause = () => {
    if (this.props.playing) {
      return 'Pause'
    }
    else {
      return 'Play'
    }
  }
}
export default Controls;

// <PitchShift
// pitchShift={this.props.pitchShift}
// togglePitchShift={this.props.togglePitchShift}
// />
