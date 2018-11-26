import React, { Component } from 'react';
import '../../css/App.css';
import Channel from './Channel';

import Master from './Master';
// import Channels from './Channels';

// const apiUrl = 'http://localhost:3000'

class App extends Component {
  // constructor() {
  //   super()
  //   this.state = {
  //     queues: {
  //       left: [],
  //       right: []
  //     }
  //   }
  // }

  render() {
    return (
      <div className="App">
        <Channel
          side='left'
          // queue={this.state.queues.left}
          //
          // shiftFromQueue={this.shiftFromQueue}
          // removeFromQueue={this.removeFromQueue}
        />
        <Master
          // pushToQueue={this.pushToQueue}
        />
        <Channel
          side='right'
          // queue={this.state.queues.right}
          //
          // shiftFromQueue={this.shiftFromQueue}
          // removeFromQueue={this.removeFromQueue}
        />
      </div>
    );
  }

  ///////////////////////////
  //
  // changeState = (newStateObject) => {
  //   this.setState(newStateObject)
  // }

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
}

export default App;
