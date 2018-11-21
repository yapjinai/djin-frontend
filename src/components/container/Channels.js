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
            channel='left'
          />
          <Channel
            channel='right'
          />
        </div>
      </div>
    );
  }
}

export default Channels;
