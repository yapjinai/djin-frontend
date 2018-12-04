import React, { Component } from 'react';
import '../../css/App.css';

import { connect } from 'react-redux'
import {
  setBpm,
  setCrossfade,

  setChannelState,
  setPlaying,
  shiftFromQueue,

  setRegionsState
} from '../../actions'

import Channel from './Channel';
import Master from './Master';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Channel side='left' />
        <Master />
        <Channel side='right' />
      </div>
    );
  }

  componentDidMount() {
    document.addEventListener('keydown', (e) => {
      switch (e.key) {
        case ' ':
        // console.log('space');
          e.preventDefault()
          if (this.props.channels.left.playing || this.props.channels.right.playing) { // master playing
            this.props.setPlaying('left', false)
            this.props.setPlaying('right', false)
          }
          else {
            ['left', 'right'].forEach(s => {
              if (this.props.channels[s].currentSong) {
                this.props.setPlaying(s, true)
              }
              else if (this.props.queues[s][0]) {
                this.props.setChannelState(s, 'playing', true)
                const currentSong = this.props.queues[s][0]
                this.props.shiftFromQueue(s)
                this.props.setChannelState(s, 'currentSong', currentSong)
              }
            })
          }
          break;

        // global
        case 'ArrowLeft':
          const decrCrossfade = this.props.crossfade - .1
          if (decrCrossfade >= -1) {
            this.props.setCrossfade(decrCrossfade)
          }
          break;
        case 'ArrowRight':
          const incrCrossfade = this.props.crossfade + .1
          if (incrCrossfade <= 1) {
            this.props.setCrossfade(incrCrossfade)
          }
          break;
        case 'ArrowUp':
          const incrBpm = this.props.masterBpm + 1
          if (incrBpm <= 300) {
            this.props.setBpm(incrBpm)
          }
          break;
        case 'ArrowDown':
          const decrBpm = this.props.masterBpm - 1
          if (decrBpm > 0) {
            this.props.setBpm(decrBpm)
          }
          break;

        // channel
        case 'q':
          if (this.props.channels.left.currentSong) {
            const newPlayingLeft = !this.props.channels.left.playing
            this.props.setPlaying('left', newPlayingLeft)
          }
          break;
        case 'p':
          if (this.props.channels.right.currentSong) {
            const newPlayingRight = !this.props.channels.right.playing
            this.props.setPlaying('right', newPlayingRight)
          }
          break;
        case 's':
          const newLoopLeft = !this.props.waveforms.left.regions.loop.loop
          this.props.setRegionsState('left', 'loop', newLoopLeft)
          this.props.setChannelState('left', 'loop', newLoopLeft)
          break;
        case 'l':
          const newLoopRight = !this.props.waveforms.right.regions.loop.loop
          this.props.setRegionsState('right', 'loop', newLoopRight)
          this.props.setChannelState('right', 'loop', newLoopRight)
          break;
        default:
      }
    })
  }
}

// export default App;
///////////////////////
// redux
///////////////////////

const mapStateToProps = (state, ownProps) => ({
  masterBpm: state.masterBpm,
  crossfade: state.crossfade,
  leftPlaying: state.channels.left.playing,
  rightPlaying: state.channels.right.playing,

  // Channel states
  channels: state.channels,
  waveforms: state.waveforms,
  queues: state.queues
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  // App state setters
  setBpm: (bpm) => dispatch(setBpm(bpm)),
  setCrossfade: (crossfade) => dispatch(setCrossfade(crossfade)),

  // Channel state setters
  setChannelState: (side, key, newValue) => dispatch(setChannelState(side, key, newValue)),
  setPlaying: (side, playing) => dispatch(setPlaying(side, playing)),
  shiftFromQueue: (side) => dispatch(shiftFromQueue(side)),

  // Waveform state setters
  setRegionsState: (side, key, newValue) => dispatch(setRegionsState(side, key, newValue)),
})

const connectedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)


export default connectedApp;
