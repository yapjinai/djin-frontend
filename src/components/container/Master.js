import React, { Component } from 'react';
import Crossfader from '../presentational/Crossfader';
import Browser from './Browser';

class Master extends Component {
  render() {
    return (
      <div className="Master">
        Master control

        <Crossfader />
        <Browser />
      </div>
    );
  }
}

export default Master;
