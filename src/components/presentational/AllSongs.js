import React from 'react';
import '../../css/AllSongs.css';
const uuid = require('uuid/v4');

const AllSongs = (props) => {
  const handleClick = (e) => {

  }

  const renderAllSongs = () => {
    return (
      props.allSongs.map(s => {
        return (
          <li
            key={uuid()}
          >
            <span>{s.title}</span>
            <span>
              <button
                name='left'
                onClick={handleClick}
              >
                L
              </button>
              <button
                name='right'
                onClick={handleClick}
              >
                R
              </button>
            </span>
          </li>
        )
      })
    )
  }

  return (
    <div className="AllSongs">
    All songs
      <ul>
        {renderAllSongs()}
      </ul>
    </div>
  );
}

export default AllSongs;
