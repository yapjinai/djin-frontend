import React from 'react';

const Info = () => {
  return (
    <div className='Info hidden'>
      <h3>Keyboard shortcuts:</h3>
      <ul>

        <span>
          <li>
            <strong>?</strong>: open help menu
          </li>
          <br />

          <label>Master controls</label>
          <br />

          <li>
            <strong>Space</strong>: play/pause master
          </li>

          <br />

          <li>
            <strong>←</strong>, <strong>→</strong>: crossfade left/right<br />
            <em>(with <strong>Shift</strong>: fine crossfade)</em>
          </li>
          <li>
            <strong>Cmd</strong> + <strong>↓</strong>: crossfade to center
          </li>

          <br />

          <li>
          <strong>↑</strong>, <strong>↓</strong>: BPM up/down<br />
            <em>(with <strong>Shift</strong>: fine adjust</em>
          </li>

          <br />

          <li>
            <strong>Q</strong>, <strong>P</strong>: play/pause left/right
          </li>
          <li>
            <strong>S</strong>, <strong>L</strong>: toggle looping left/right
          </li>

          <br />
          <label>Seek forwards/backwards</label>
          <br />
          <em>(with <strong>Shift</strong>: fine adjust)</em>


          <li>
            <strong>1</strong>, <strong>9</strong>: seek backwards
          </li>
          <li>
            <strong>2</strong>, <strong>0</strong>: seek forwards
          </li>
        </span>

        <span>
          <label>Loop controls</label>
          <br />
          <em>(with <strong>Shift</strong>: fine adjust)</em>

          <li>
            <strong>Shift</strong> + <strong>S</strong>, <strong>Shift</strong> + <strong>L</strong>: jump to loop start
          </li>

          <br />

          <li>
            <strong>E</strong>, <strong>U</strong>: nudge loop start backwards
          </li>
          <li>
            <strong>R</strong>, <strong>I</strong>: nudge loop start forwards
          </li>

          <br />

          <li>
            <strong>C</strong>, <strong>N</strong>: nudge loop end backwards
          </li>
          <li>
            <strong>V</strong>, <strong>M</strong>: nudge loop end forwards
          </li>

          <br />

          <li>
            <strong>D</strong>, <strong>J</strong>: halve loop
          </li>
          <li>
            <strong>F</strong>, <strong>K</strong>: double loop
          </li>

          <br />

          <li>
            <strong>Shift</strong> + <strong>D</strong>, <strong>Shift</strong> + <strong>J</strong>: halve loop from end
          </li>
          <li>
            <strong>Shift</strong> + <strong>F</strong>, <strong>Shift</strong> + <strong>K</strong>: double loop from end
          </li>
        </span>


      </ul>

      <hr />

      <h3>DJin</h3>
      <p>
        was created by <a href='https://github.com/yapjinai'>Jin Ai Yap</a>.
      </p>
    </div>
  );
}

export default Info;
