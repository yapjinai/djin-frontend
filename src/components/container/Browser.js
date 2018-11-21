import React, { Component } from 'react';
import '../../css/Browser.css';
import BrowserSong from '../presentational/BrowserSong';

const uuid = require('uuid/v4');

class Browser extends Component {
  render() {
    return (
      <div className="Browser">
      Browser
        <ul>
          {this.renderAllSongs()}
        </ul>
      </div>
    );
  }

  //////////////////////
  renderAllSongs = () => {
    return this.props.allSongs.map(s => {
      return (
        <BrowserSong
          song={s}
          key={uuid()}
          addToQueue={this.props.addToQueue}
        />
      )
    })
  }
}

export default Browser;
