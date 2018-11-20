import React, { Component } from 'react';

class Queue extends Component {
  render() {
    return (
      <div className="Queue">
        Queue for channel {this.props.channel}
      </div>
    );
  }
}

export default Queue;
