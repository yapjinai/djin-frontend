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

  handleClick = (e) => {
    console.log('choosing song');
  }

  renderAllSongs = () => {
    return this.props.allSongs.map(s => {
      return (
        <BrowserSong
          song={s}
          key={uuid()}
        />
      )
    })
  }
}

export default Browser;
