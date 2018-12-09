import React, { Component } from 'react';
import {keyboardShortcutsFunction} from '../keyboardShortcutsFunction'

import { connect } from 'react-redux'
import {
  setBpm,
  setCrossfade,
  setPlaying,

  setChannelState,

  shiftFromQueue
 } from '../../actions'

import '../../css/MasterControls.css';

import MasterPlayPause from '../presentational/MasterPlayPause';
import Crossfader from '../presentational/Crossfader';
import Bpm from '../presentational/Bpm';
import Help from './Help';

class MasterControls extends Component {
  render() {
    return (
      <span className="MasterControls"
       style={{display: 'flex'}}
      >
        <MasterPlayPause
          togglePlaying={this.togglePlaying}
          masterPlaying={this.masterPlaying}
        />
        <Crossfader
          crossfade={this.props.crossfade}
          setCrossfade={this.props.setCrossfade}
        />
        <Bpm
          masterBpm={this.props.masterBpm}
          setBpm={this.props.setBpm}
        />
        <Help/>
      </span>
    );
  }

  componentDidMount() {
    keyboardShortcutsFunction.bind(this)('masterControls')
  }

  ////////////////////////

  masterPlaying = () => {
    return this.props.leftPlaying || this.props.rightPlaying
  }

  togglePlaying = () => {
    if (this.masterPlaying()) {
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

  }
}


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
  setBpm: (bpm) => dispatch(setBpm(bpm)),
  setCrossfade: (crossfade) => dispatch(setCrossfade(crossfade)),

  // Channel state setters
  setChannelState: (side, key, newValue) => dispatch(setChannelState(side, key, newValue)),

  shiftFromQueue: (side) => dispatch(shiftFromQueue(side)),
  setPlaying: (side, play) => dispatch(setPlaying(side, play)),
})

const connectedMasterControls = connect(
  mapStateToProps,
  mapDispatchToProps
)(MasterControls)


export default connectedMasterControls;
