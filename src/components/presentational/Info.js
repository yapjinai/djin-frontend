import React from 'react';

const Info = ({song, pushToQueue, browserFilterQuery, setBrowserFilterQuery}) => {
  const handleClick = (e) => {
    pushToQueue(e.target.name, song)
  }

  const clickSearch = (e) => {
    if (browserFilterQuery !== e.target.innerHTML) {
      setBrowserFilterQuery(e.target.innerHTML)
    }
    else {
      setBrowserFilterQuery('')
    }
  }

  return (
    <div className='Info hidden'>
      <label>Shortcuts:</label>
      <ul>
        <li>
          Space: play/pause master
        </li>
        <li>
          ←, →: crossfade left/right
        </li>
        <li>
          ↑, ↓: BPM up/down
        </li>
        <li>
          Q, P: play/pause left/right
        </li>
        <li>
          S, L: toggle looping left/right
        </li>
      </ul>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut velit in libero maximus dapibus quis quis arcu. Donec nisi metus, tempor ultrices finibus eget, posuere vitae nisl. Quisque rutrum nibh ut turpis faucibus, vel elementum leo pellentesque. Ut blandit nisl mauris, id volutpat ex dapibus lobortis. Sed sit amet lobortis arcu. Phasellus dignissim nibh quis gravida rhoncus. Vivamus pulvinar mauris purus, et feugiat metus sollicitudin eu.
      </p>
    </div>
  );
}

export default Info;
