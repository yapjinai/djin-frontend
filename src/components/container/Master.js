import React, { Component } from 'react';
import '../../css/Master.css';

import MasterControls from './MasterControls';
import Browser from './Browser';


class Master extends Component {
  render() {
    return (
      <div className="Master"
       style={{display: 'flex'}}
      >
        <MasterControls
        />
        <Browser
          // methods to change App state
          pushToQueue={this.props.pushToQueue}
        />
      </div>
    );
  }
}

export default Master;
