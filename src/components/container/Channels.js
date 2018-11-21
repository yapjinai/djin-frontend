import React, { Component } from 'react';
import '../../css/Channels.css';
import Channel from './Channel';

class Channels extends Component {
  render() {
    return (
      <div className="Channels">
      Channels
        <div className="Channels">
          <Channel
            side='left'
            queue={this.props.queues.left}
          />
          <Channel
            side='right'
            queue={this.props.queues.right}
          />
        </div>
      </div>
    );
  }
}

export default Channels;
