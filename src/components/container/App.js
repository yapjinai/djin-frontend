import React, { Component } from 'react';
import '../../css/App.css';

import { connect } from 'react-redux'
import {
  setPos,
  setBpm,
  setCrossfade,

  setChannelState,
  setPlaying,
  shiftFromQueue,

  setRegionsState
} from '../../actions'

import Channel from './Channel';
import Master from './Master';
import addKeyboardShortcuts from '../KeyboardShortcuts';

class App extends Component {
  // constructor() {
  //   super()
  //   this.state = {
  //     commandPressed: false,
  //     shiftPressed: false,
  //   }
  // }

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
    addKeyboardShortcuts.bind(this)()
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
  setPos: (side, pos) => dispatch(setPos(side, pos)),
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
