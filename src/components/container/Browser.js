import React, { Component } from 'react';

import { connect } from 'react-redux'
import { setAllSongs, setBrowserFilterQuery, setFilteredSongs } from '../../actions'

import '../../css/Browser.css';
import BrowserSong from '../presentational/BrowserSong';

const uuid = require('uuid/v4');
const apiUrl = 'http://localhost:3000'

class Browser extends Component {
  render() {
    this.filterSongs()

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
                id='queue'
              >
                Queue
              </th>
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
            </tr>
          </thead>
          <tbody>
            {this.renderAllSongs()}
          </tbody>
        </table>
      </div>
    );
  }

  componentDidMount() {
    this.fetchAllSongs()
  }

/////////////////////////

  fetchAllSongs = () => {
    fetch(`${apiUrl}/songs`)
    .then(r => r.json())
    .then(r => {
      this.props.setAllSongs(r)
    })
  }

  renderAllSongs = () => {
    return this.props.filteredSongs.map(s => {
      return (
        <BrowserSong
          song={s}
          key={uuid()}
          pushToQueue={this.props.pushToQueue}
        />
      )
    })
  }

  //////////////////////
  // FILTER

  handleChange = (e) => {
    this.props.setBrowserFilterQuery(e.target.value)
  }

  filterSongs = () => {
    const newSongs = this.props.allSongs.filter(s => {
      const query = this.props.browserFilterQuery.toLowerCase().split(' ').join('')
      const title = s.title.toLowerCase().split(' ').join('')
      const artist = s.artist.toLowerCase().split(' ').join('')

      return title.includes(query) || artist.includes(query)
    })

    if (this.props.filteredSongs.length !== newSongs.length) {
      this.props.setFilteredSongs(newSongs)
    }
  }

  //////////////
  // SORT

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


const mapStateToProps = (state, ownProps) => ({
  allSongs: state.allSongs,
  filteredSongs: state.filteredSongs,
  browserFilterQuery: state.browserFilterQuery,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  setAllSongs: (allSongs) => dispatch(setAllSongs(allSongs)),
  setFilteredSongs: (filteredSongs) => dispatch(setFilteredSongs(filteredSongs)),
  setBrowserFilterQuery: (browserFilterQuery) => dispatch(setBrowserFilterQuery(browserFilterQuery)),
})

const connectedBrowser = connect(
  mapStateToProps,
  mapDispatchToProps
)(Browser)


export default connectedBrowser;
