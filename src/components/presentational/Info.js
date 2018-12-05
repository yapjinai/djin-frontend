import React from 'react';

const Info = () => {
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

      <hr />

      <label>DJin</label>
      <p>
        was created by <a href='https://github.com/yapjinai'>Jin Ai Yap</a>.
      </p>
    </div>
  );
}

export default Info;
