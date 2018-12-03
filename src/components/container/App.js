import React, { Component } from 'react';
import '../../css/App.css';

import { connect } from 'react-redux'
import {
  setBpm,
  setCrossfade,

  setChannelState,
  setPlaying,

  shiftFromQueue
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
    // const masterPlaying = () => {
    //   return this.props.leftPlaying || this.props.rightPlaying
    // }
    //
    // const masterPlayPause = () => {
    //   if (masterPlaying()) {
    //     this.props.setPlaying('left', false)
    //     this.props.setPlaying('right', false)
    //   }
    //   else {
    //     ['left', 'right'].forEach(s => {
    //       if (this.props.channels[s].currentSong) {
    //         this.props.setPlaying(s, true)
    //       }
    //       else if (this.props.queues[s][0]) {
    //         this.props.setChannelState(s, 'playing', true)
    //         const currentSong = this.props.queues[s][0]
    //         this.props.shiftFromQueue(s)
    //         this.props.setChannelState(s, 'currentSong', currentSong)
    //       }
    //     })
    //   }
    // }

    document.addEventListener('keydown', (e) => {
      console.log(e.key);
      switch (e.key) {
        case ' ':
          // masterPlayPause()
          break;
        case 'arrowLeft':

          break;
        case 'arrowRight':

          break;
        case 'arrowUp':

          break;
        case 'arrowDown':

          break;
        case 'q':

          break;
        case 'p':

          break;
        case 'a':

          break;
        case 'l':

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

  // Channel state
  channels: state.channels,

  queues: state.queues
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  // App state setters
  setBpm: (bpm) => dispatch(setBpm(bpm)),
  setCrossfade: (crossfade) => dispatch(setCrossfade(crossfade)),

  // Channel state setters
  setChannelState: (key, newValue) => dispatch(setChannelState(ownProps.side, key, newValue)),
  setPlaying: (playing) => dispatch(setPlaying(ownProps.side, playing)),

  shiftFromQueue: () => dispatch(shiftFromQueue(ownProps.side))
})

const connectedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)


export default connectedApp;
