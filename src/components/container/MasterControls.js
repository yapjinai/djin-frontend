import React, { Component } from 'react';

import { connect } from 'react-redux'
import {
  setBpm,
  setCrossfade,
  playAll
 } from '../../actions'

import '../../css/MasterControls.css';

import MasterPlayPause from '../presentational/MasterPlayPause';
import Crossfader from '../presentational/Crossfader';
import Bpm from '../presentational/Bpm';


class MasterControls extends Component {
  render() {
    return (
      <div className="MasterControls"
       style={{display: 'flex'}}
      >
        <MasterPlayPause
          leftPlaying={this.props.leftPlaying}
          rightPlaying={this.props.rightPlaying}
          playAll={this.props.playAll}
        />
        <Crossfader
          crossfade={this.props.crossfade}
          setCrossfade={this.props.setCrossfade}
        />
        <Bpm
          masterBpm={this.props.masterBpm}
          setBpm={this.props.setBpm}
        />
      </div>
    );
  }
}


const mapStateToProps = (state, ownProps) => ({
  masterBpm: state.masterBpm,
  crossfade: state.crossfade,
  leftPlaying: state.channels.left.playing,
  rightPlaying: state.channels.right.playing,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  setBpm: (bpm) => dispatch(setBpm(bpm)),
  setCrossfade: (crossfade) => dispatch(setCrossfade(crossfade)),
  playAll: (play) => dispatch(playAll(play)),
})

const connectedMasterControls = connect(
  mapStateToProps,
  mapDispatchToProps
)(MasterControls)


export default connectedMasterControls;
