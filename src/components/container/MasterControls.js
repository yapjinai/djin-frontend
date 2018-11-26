import React, { Component } from 'react';

import { connect } from 'react-redux'
import { setBpm } from '../../actions'

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
          masterPlaying={this.props.masterPlaying}
          changeState={this.props.changeState}
        />
        <Crossfader
          crossFade={this.props.crossFade}
          changeState={this.props.changeState}
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
  masterBpm: state.masterBpm
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  setBpm: (bpm) => dispatch(setBpm(bpm))
})

const connectedMasterControls = connect(
  mapStateToProps,
  mapDispatchToProps
)(MasterControls)


export default connectedMasterControls;
