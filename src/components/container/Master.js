import React, { Component } from 'react';
import Crossfader from '../presentational/Crossfader';
import Bpm from '../presentational/Bpm';
import Browser from './Browser';

class Master extends Component {
  render() {
    return (
      <div className="Master">
        Master control
        <Crossfader
          crossFade={this.props.crossFade}
          changeState={this.props.changeState}
        />
        <Bpm
          bpm={this.props.bpm}
          changeState={this.props.changeState}
        />
        <Browser
          allSongs={this.props.allSongs}
          pushToQueue={this.props.pushToQueue}
        />
      </div>
    );
  }
}

export default Master;
