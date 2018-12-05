import React, { Component } from 'react';

import { connect } from 'react-redux'
import {
  setAllSongs,

  setBrowserFilterQuery,
  setFilteredSongs,
  setSortBy,
  setReverseSort,

  pushToQueue,
} from '../../actions'

import '../../css/Browser.css';
import BrowserSong from '../presentational/BrowserSong';

const uuid = require('uuid/v4');
const apiUrl = 'http://localhost:3000'

class Browser extends Component {
  render() {
    this.filterSongs()
    this.sortSongs()

    return (
      <div className="Browser">
        <span className='filter'>
          <div className='genres'>
            <div className='genre pop'>
              <label
                for='pop'
              >
                Pop
              </label>
              <input
                type='checkbox'
                name='pop'
                onChange={this.handleCheckboxChange}
              />
            </div>
            <div className='genre house'>
              <label
                for='house'
              >
                House
              </label>
              <input
                type='checkbox'
                name='house'
                onChange={this.handleCheckboxChange}
              />
            </div>
            <div className='genre trap'>
              <label
                for='trap'
              >
                Trap
              </label>
              <input
                type='checkbox'
                name='trap'
                onChange={this.handleCheckboxChange}
              />
            </div>
            <div className='genre rnb'>
              <label
                for='rnb'
              >
                R&B
              </label>
              <input
                type='checkbox'
                name='rnb'
                onChange={this.handleCheckboxChange}
              />
            </div>
            <div className='genre hiphop'>
              <label
                for='hiphop'
              >
                Hip Hop
              </label>
              <input
                type='checkbox'
                name='hiphop'
                onChange={this.handleCheckboxChange}
              />
            </div>
            <div className='genre weird'>
              <label
                for='weird'
              >
                Weird
              </label>
              <input
                type='checkbox'
                name='weird'
                onChange={this.handleCheckboxChange}
              />
            </div>
            <div className='genre straight'>
              <label
                for='straight'
              >
                Beat-heavy
              </label>
              <input
                type='checkbox'
                name='straight'
                onChange={this.handleCheckboxChange}
              />
            </div>
          </div>

            <input
              type='text'
              placeholder='Search'
              value={this.props.browserFilterQuery}
              onChange={this.handleChange}
            />

          <button
            onClick={() => this.props.setBrowserFilterQuery('')}
          >
            Clear
          </button>
        </span>

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
    .then(songs => songs.json())
    .then(songs => {
      fetch(`${apiUrl}/uploaded_songs`)
      .then(uploaded => uploaded.json())
      .then(uploaded => {
        this.props.setAllSongs(songs.concat(uploaded))
      })
    })
  }

  renderAllSongs = () => {
    return this.props.filteredSongs.map(s => {
      return (
        <BrowserSong
          song={s}
          key={uuid()}
          pushToQueue={this.props.pushToQueue}
          setBrowserFilterQuery={this.props.setBrowserFilterQuery}
          browserFilterQuery={this.props.browserFilterQuery}
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
      // const tags = s.tags.toLowerCase().split(' ').join('')

      return title.includes(query) || artist.includes(query)// || tags.includes(query)
    })

    if (this.props.filteredSongs.length !== newSongs.length) {
      this.props.setFilteredSongs(newSongs)
    }
  }

  //////////////
  // SORT
  sortSongs = () => {
    const sortBy = this.props.sortBy
    const sortedSongs = this.props.filteredSongs.sort((a, b) => {
      const paramA = a[sortBy]
      const paramB = b[sortBy]
      if (sortBy === 'bpm') { // sort numerically
        return paramA - paramB
      }
      else { // sort alphabetically
        return paramA.toLowerCase().localeCompare(paramB.toLowerCase())
      }
    })

    let newSongs = sortedSongs
    if (this.props.reverseSort) {
      newSongs = sortedSongs.reverse()
    }

    if (this.props.filteredSongs !== newSongs) {
      this.props.setFilteredSongs(newSongs)
    }
  }

  sortByClass = (param) => { // to add CSS class
    if (this.props.sortBy === param) {
      return 'sortedBy'
    }
    else {
      return null
    }
  }

  handleClick = (e) => {
    if (this.props.sortBy !== e.target.id) { // if filtering by different param
      this.props.setSortBy(e.target.id)
      this.props.setReverseSort(false)
    }
    else { // toggle between high-low and low-high
      this.props.setReverseSort(!this.props.reverseSort)
    }
  }
}


const mapStateToProps = (state, ownProps) => ({
  allSongs: state.allSongs,

  filteredSongs: state.filteredSongs,
  browserFilterQuery: state.browserFilterQuery,
  sortBy: state.sortBy,
  reverseSort: state.reverseSort,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  setAllSongs: (allSongs) => dispatch(setAllSongs(allSongs)),

  setFilteredSongs: (filteredSongs) => dispatch(setFilteredSongs(filteredSongs)),
  setBrowserFilterQuery: (browserFilterQuery) => dispatch(setBrowserFilterQuery(browserFilterQuery)),
  setSortBy: (sortBy) => dispatch(setSortBy(sortBy)),
  setReverseSort: (reverseSort) => dispatch(setReverseSort(reverseSort)),

  pushToQueue: (side, song) => dispatch(pushToQueue(side, song)),
})

const connectedBrowser = connect(
  mapStateToProps,
  mapDispatchToProps
)(Browser)


export default connectedBrowser;
