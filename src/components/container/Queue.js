import React, { Component } from 'react';
import '../../css/Queue.css';
import QueueSong from '../presentational/QueueSong';
const uuid = require('uuid/v4');

class Queue extends Component {

  render() {
    return (
      <div className="Queue">
        Queue for {this.props.side} side
        <ul>
          {this.renderQueue()}
        </ul>
      </div>
    );
  }

  ////////////////

  renderQueue = () => {
    return this.props.queue.map(s => {
      return (
        <QueueSong
          song={s}
          key={uuid()}
          side={this.props.side}
          removeFromQueue={this.props.removeFromQueue}
          changeCurrentSong={this.props.changeCurrentSong}
        />
      )
    })
  }
}

export default Queue;
