import React, { Component } from 'react';
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
          changeState={this.props.changeState}
        />
      </div>
    );
  }
}

export default MasterControls;
