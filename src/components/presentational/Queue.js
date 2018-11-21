import React from 'react';
import '../../css/Queue.css';
const uuid = require('uuid/v4');

const Queue = (props) => {
  const renderQueue = () => {
    return props.queue.map(s => {
      return (
        <li
          key={uuid()}
        >
          {s.title}
        </li>
      )
    })
  }

  return (
    <div className="Queue">
      Queue for {props.channel} channel
      <ul>
        {renderQueue()}
      </ul>
    </div>
  );
}

export default Queue;
