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
        queue={this.props.queues[side]}
        crossFade={this.props.crossFade}
        bpm={this.props.bpm}

        changeState={this.props.changeState}
        popFromQueue={this.props.popFromQueue}
        removeFromQueue={this.props.removeFromQueue}
      />
    )
  }
}

export default Channels;
