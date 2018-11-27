import React, { Component } from 'react';
import Sortable from 'sortablejs'

import { connect } from 'react-redux'
import { setSideQueue } from '../../actions'

import '../../css/Queue.css';
import QueueSong from '../presentational/QueueSong';
const uuid = require('uuid/v4');

class Queue extends Component {

  render() {
    return (
      <div className="Queue">
        <ul id={`${this.props.side}-queue`}>
          {this.renderQueue()}
        </ul>
      </div>
    );
  }

  componentDidMount() {
    const list = document.getElementById(`${this.props.side}-queue`);
    Sortable.create(list, {
      animation: 150,
      handle: '.drag'
    })
  }

  ////////////////

  renderQueue = () => {
    return this.props.queue.map(s => {
      return (
        <QueueSong
          song={s}
          key={uuid()}
          removeFromQueue={this.removeFromQueue}
          setCurrentSong={this.props.setCurrentSong}
        />
      )
    })
  }

  removeFromQueue = (song) => {
    const side = this.props.side
    const newQueue = [...this.props.queue].filter(s => s !== song)

    this.props.setSideQueue(side, newQueue)
  }
}

const mapStateToProps = (state, ownProps) => ({
  queue: state.queues[ownProps.side]
})
const mapDispatchToProps = (dispatch, ownProps) => ({
  setSideQueue: (side, queue) => dispatch(setSideQueue(side, queue))
})

const connectedQueue = connect(
  mapStateToProps,
  mapDispatchToProps
)(Queue)


export default connectedQueue;
