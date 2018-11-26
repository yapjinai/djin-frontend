import React, { Component } from 'react';
import '../../css/App.css';
import Channel from './Channel';

import Master from './Master';
// import Channels from './Channels';

const apiUrl = 'http://localhost:3000'

class App extends Component {
  constructor() {
    super()
    this.state = {
      allSongs: [],
      filteredSongs: [],
      browserFilterQuery: '',
      sortBy: 'bpm',
      reverseSort: false,

      masterPlaying: false,
      // crossfade: 0,
      // masterBpm: 1,
      masterVolume: 1,

      queues: {
        left: [],
        right: []
      }
    }
  }

  render() {
    this.filterSongs()
    this.sortSongs()

    return (
      <div className="App">
        <Channel
          side='left'
          masterPlaying={this.state.masterPlaying}
          queue={this.state.queues.left}
          // crossfade={this.state.crossfade}
          // masterBpm={this.state.masterBpm}

          // changeState={this.changeState}
          shiftFromQueue={this.shiftFromQueue}
          removeFromQueue={this.removeFromQueue}
        />
        <Master
          masterPlaying={this.state.masterPlaying}
          // crossfade={this.state.crossfade}
          // masterBpm={this.state.masterBpm}
          // changeState={this.changeState}

          // for browser
          allSongs={this.state.filteredSongs}
          browserFilterQuery={this.browserFilterQuery}
          sortBy={this.state.sortBy}
          reverseSort={this.state.reverseSort}

          // methods to change App state
          pushToQueue={this.pushToQueue}
        />
        <Channel
          side='right'
          masterPlaying={this.state.masterPlaying}
          queue={this.state.queues.right}
          // crossfade={this.state.crossfade}
          // masterBpm={this.state.masterBpm}

          // changeState={this.changeState}
          shiftFromQueue={this.shiftFromQueue}
          removeFromQueue={this.removeFromQueue}
        />
      </div>
    );
  }

  componentDidMount() {
    this.fetchAllSongs()
    // this.addKeyboardShortcuts()
  }

  ///////////////////////////

  changeState = (newStateObject) => {
    this.setState(newStateObject)
  }

  setNewQueues = (side, newQueue) => {
    const newQueues = {
      ...this.state.queues
    }
    newQueues[side] = newQueue

    this.setState({
      queues: newQueues
    })
  }

  pushToQueue = (side, song) => {
    const newQueue = [...this.state.queues[side]]
    if (!newQueue.includes(song)) {
      newQueue.push(song)

      this.setNewQueues(side, newQueue)
    }
  }

  shiftFromQueue = (side) => { // combine this method with removeFromQueue ?
    const newQueue = [...this.state.queues[side]]
    const currentSong = newQueue.shift()

    this.setNewQueues(side, newQueue)

    return currentSong
  }

  removeFromQueue = (side, song) => {
    const oldQueue = [...this.state.queues[side]]
    const newQueue = oldQueue.filter(s => s !== song)

    this.setNewQueues(side, newQueue)
  }

  ///////////////////////////

  // ALL SONGS methods

  fetchAllSongs = () => {
    fetch(`${apiUrl}/songs`)
    .then(r => r.json())
    .then(r => {
      this.setState({
        allSongs: r
      })
    })
  }

  filterSongs = () => {
    const newSongs = this.state.allSongs.filter(s => {
      const query = this.state.browserFilterQuery.toLowerCase().split(' ').join('')
      const title = s.title.toLowerCase().split(' ').join('')
      const artist = s.artist.toLowerCase().split(' ').join('')

      return title.includes(query) || artist.includes(query)
    })

    if (this.state.filteredSongs.length !== newSongs.length) {
      this.setState({
        filteredSongs: newSongs
      })
    }
  }

  sortSongs = () => {
    const sortBy = this.state.sortBy
    const sortedSongs = this.state.filteredSongs.sort((a, b) => {
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
    if (this.state.reverseSort) {
      newSongs = sortedSongs.reverse()
    }

    // check whether old state is same as new state
    let changed = false
    this.state.filteredSongs.forEach((s, i) => {
      if (s !== newSongs[i]) {
        changed = true
      }
    })

    if (changed) {
      this.setState({
        filteredSongs: newSongs
      })
    }
  }

  // addKeyboardShortcuts = () => {
  //   window.addEventListener('keydown', (e) => {
  //     let newStateValue
  //     switch (e.key) {
  //       case 'v':
  //         newStateValue = this.state.crossfade - .1
  //         if (newStateValue >= -1) {
  //           this.setState({
  //             crossfade: newStateValue
  //           })
  //         }
  //         break;
  //       case 'n':
  //         let newStateValue = this.state.crossfade + .1
  //         if (newStateValue <= 1) {
  //           this.setState({
  //             crossfade: newStateValue
  //           })
  //         }
  //         break;
  //       default:
  //     }
  //   })
  // }
}

export default App;
