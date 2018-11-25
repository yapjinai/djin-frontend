import React, { Component } from 'react';
import '../../css/Browser.css';
import BrowserSong from '../presentational/BrowserSong';

const uuid = require('uuid/v4');

class Browser extends Component {
  render() {
    return (
      <div className="Browser">
      <input
        placeholder='Filter'
        value={this.props.browserFilterQuery}
        onChange={this.handleChange}
      >
      </input>
        <table>
          <thead>
            <td id='titleHead'>
              Title
            </td>
            <td id='artistHead'>
              Artist
            </td>
            <td>
              BPM
            </td>
            <td>
              Queue
            </td>
          </thead>
          {this.renderAllSongs()}
        </table>
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
          pushToQueue={this.props.pushToQueue}
        />
      )
    })
  }

  handleChange = (e) => {
    this.props.changeState({
      browserFilterQuery: e.target.value
    })
  }
}

export default Browser;
