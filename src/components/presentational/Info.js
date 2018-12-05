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

        <br />

        <li>
          Q, P: play/pause left/right
        </li>
        <li>
          S, L: toggle looping left/right
        </li>

        <br />
        
        <li>
          E, U: nudge loop start backwards left/right
        </li>
        <li>
          R, I: nudge loop start forwards left/right
        </li>

        <br />

        <li>
          C, N: nudge loop end backwards left/right
        </li>
        <li>
          V, M: nudge loop end forwards left/right
        </li>

        <br />

        <li>
          D, J: halve loop left/right
        </li>
        <li>
          F, K: double loop left/right
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
