import React, { Component } from 'react';
import '../../css/Channels.css';
import Channel from './Channel';

class Channels extends Component {
  render() {
    return (
      <div className="Channels">
      Channels
        <div className="Channels">
          {this.displayChannel('left')}
          {this.displayChannel('right')}
        </div>
      </div>
    );
  }

  //////////////////////

  displayChannel = (side) => {
    return (
      <Channel
        side={side}
        masterPlaying={this.props.masterPlaying}
        queue={this.props.queues[side]}
        crossFade={this.props.crossFade}
        masterBpm={this.props.masterBpm}

        changeState={this.props.changeState}
        shiftFromQueue={this.props.shiftFromQueue}
        removeFromQueue={this.props.removeFromQueue}
      />
    )
  }
}

export default Channels;
