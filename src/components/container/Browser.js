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
            <tr>
              <th
                id='title'
                className={this.sortByClass('title')}
                onClick={this.handleClick}
              >
                Title
              </th>
              <th
                id='artist'
                className={this.sortByClass('artist')}
                onClick={this.handleClick}
              >
                Artist
              </th>
              <th
                id='bpm'
                className={this.sortByClass('bpm')}
                onClick={this.handleClick}
              >
                BPM
              </th>
              <th>
                Queue
              </th>
            </tr>
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

  sortByClass = (param) => {
    if (this.props.sortBy === param) {
      return 'sortBy'
    }
    else {
      return null
    }
  }

  handleClick = (e) => {
    if (this.props.sortBy !== e.target.id) { // if filtering by different param
      this.props.changeState({
        sortBy: e.target.id,
        reverseSort: false
      })
    }
    else { // toggle between high-low and low-high
      this.props.changeState({
        reverseSort: !this.props.reverseSort
      })
    }
  }
}

export default Browser;
