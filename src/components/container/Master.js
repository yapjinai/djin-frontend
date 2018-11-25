import React, { Component } from 'react';
import MasterPlayPause from '../presentational/MasterPlayPause';
import Crossfader from '../presentational/Crossfader';
import Bpm from '../presentational/Bpm';
import Browser from './Browser';

class Master extends Component {
  render() {
    return (
      <div className="Master"
       style={{display: 'flex'}}
      >
        Master control
        <div>
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
        <Browser
          allSongs={this.props.allSongs}
          pushToQueue={this.props.pushToQueue}
        />
      </div>
    );
  }
}

export default Master;
