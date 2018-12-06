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
          ←, →: crossfade left/right<br />
          (with Shift: hard crossfade)
        </li>
        <li>
          ↑, ↓: BPM up/down<br />
          (with Shift: faster up/down)
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
          E, U: nudge loop start backwards left/right<br />
          (with Shift: nudge faster)
        </li>
        <li>
          R, I: nudge loop start forwards left/right<br />
          (with Shift: nudge faster)
        </li>

        <br />

        <li>
          C, N: nudge loop end backwards left/right<br />
          (with Shift: nudge faster)
        </li>
        <li>
          V, M: nudge loop end forwards left/right
          (with Shift: nudge faster)
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
