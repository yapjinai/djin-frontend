import React, { Component } from 'react';

import { connect } from 'react-redux'
import {
  setAllSongs,

  // setBrowserFilterQuery,
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
  constructor() {
    super()
    this.state = {
      browserFilterQuery: '',
      tags: []
    }
  }

  render() {
    this.filterSongs()
    this.sortSongs()

    return (
      <div className="Browser">
        <span className='filter'>
          <div className='genres'>
            <div className='genre pop'>
              <label
                htmlFor='pop'
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
                htmlFor='house'
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
                htmlFor='trap'
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
                htmlFor='rnb'
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
                htmlFor='hiphop'
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
                htmlFor='weird'
              >
                Weird
              </label>
              <input
                type='checkbox'
                name='weird'
                onChange={this.handleCheckboxChange}
              />
            </div>
            <div className='genre beat'>
              <label
                htmlFor='beat'
              >
                Beat-heavy
              </label>
              <input
                type='checkbox'
                name='beat'
                onChange={this.handleCheckboxChange}
              />
            </div>
            <div className='genre flatiron'>
              <label
                htmlFor='flatiron'
              >
                :)
              </label>
              <input
                type='checkbox'
                name='flatiron'
                onChange={this.handleCheckboxChange}
              />
            </div>
          </div>

            <input
              type='text'
              placeholder='Search'
              value={this.state.browserFilterQuery}
              onChange={this.handleChange}
            />

          <button
            onClick={this.clearQueries}
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
          setBrowserFilterQuery={this.setBrowserFilterQuery}
          browserFilterQuery={this.state.browserFilterQuery}
        />
      )
    })
  }

  //////////////////////
  // FILTER

  handleChange = (e) => {
    this.setBrowserFilterQuery(e.target.value)
  }

  handleCheckboxChange = (e) => {
    if (e.target.checked) {
      const newTags = [...this.state.tags]
      newTags.push(e.target.name)
      this.setState({
        tags: newTags
      })
    }
    else {
      const newTags = this.state.tags.filter(g => g !== e.target.name)
      this.setState({
        tags: newTags
      })
    }
  }

  setBrowserFilterQuery = (query) => {
    this.setState({
      browserFilterQuery: query
    })
  }

  clearQueries = () => {
    this.setBrowserFilterQuery('')
    this.setState({
      tags: []
    })
    document.querySelectorAll('[type=checkbox]').forEach(c => {
      c.checked = false
    })
  }

  filterSongs = () => {
    const newSongs = this.props.allSongs.filter(s => {
      const query = this.state.browserFilterQuery.toLowerCase().split(' ').join('')
      const title = s.title.toLowerCase().split(' ').join('')
      const artist = s.artist.toLowerCase().split(' ').join('')
      const tags = s.tags

      let matchesTags = true
      this.state.tags.forEach(t => {
        if (!tags.includes(t)) {
          matchesTags = false
        }
      })

      return (
        (title.includes(query) || artist.includes(query)) &&
        matchesTags)
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
  // browserFilterQuery: state.browserFilterQuery,
  sortBy: state.sortBy,
  reverseSort: state.reverseSort,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  setAllSongs: (allSongs) => dispatch(setAllSongs(allSongs)),

  setFilteredSongs: (filteredSongs) => dispatch(setFilteredSongs(filteredSongs)),
  // setBrowserFilterQuery: (browserFilterQuery) => dispatch(setBrowserFilterQuery(browserFilterQuery)),
  setSortBy: (sortBy) => dispatch(setSortBy(sortBy)),
  setReverseSort: (reverseSort) => dispatch(setReverseSort(reverseSort)),

  pushToQueue: (side, song) => dispatch(pushToQueue(side, song)),
})

const connectedBrowser = connect(
  mapStateToProps,
  mapDispatchToProps
)(Browser)


export default connectedBrowser;
