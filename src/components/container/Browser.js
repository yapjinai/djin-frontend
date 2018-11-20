import React, { Component } from 'react';
import '../../css/Browser.css';
import Queue from '../presentational/Queue';
import AllSongs from '../presentational/AllSongs';

class Browser extends Component {
  render() {
    return (
      <div className="Browser">
        <Queue
          channel='left'
        />
        <AllSongs />
        <Queue
          channel='right'
        />
      </div>
    );
  }
}

export default Browser;
