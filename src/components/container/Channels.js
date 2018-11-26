import React, { Component } from 'react';
import '../../css/Channels.css';
import Channel from './Channel';
import Master from './Master';

class Channels extends Component {
  render() {
    return (
      <div className="Channels">
        <div className="Channels">
          {this.displayChannel('left')}

          <Master
            // App state
            masterPlaying={this.props.masterPlaying}
            crossFade={this.props.crossFade}
            masterBpm={this.props.masterBpm}
            browserFilter={this.props.browserFilter}

            // methods to change App state
            changeState={this.props.changeState}
          />

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
