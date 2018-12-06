// called in App.js

export default function addKeyboardShortcuts() {

  document.addEventListener('keydown', (firstEvent) => {
    if (firstEvent.target.type !== 'text' && firstEvent.target.type !== 'number') {
      //////////////// DO NOT CHANGE ABOVE
      firstEvent.preventDefault()


      let commandPressed = false
      let shiftPressed = false


      // SETUP FOR DOUBLE KEY SHORTCUTS - CMD
      if (!commandPressed) {
        if (firstEvent.key === 'Meta') {
          commandPressed = true

          document.addEventListener('keyup', (secondEvent) => {
            if (secondEvent.key === 'Meta') {
              commandPressed = false
            }
          })

          // DOUBLE KEY SHORTCUTS - CMD
          document.addEventListener('keydown', (secondEvent) => {
            secondEvent.preventDefault()

            const leftStart = this.props.waveforms['left'].regions.loop.start
            const leftEnd = this.props.waveforms['left'].regions.loop.end
            const leftLength = leftEnd - leftStart
            const rightStart = this.props.waveforms['right'].regions.loop.start
            const rightEnd = this.props.waveforms['right'].regions.loop.end
            const rightLength = rightEnd - rightStart

            if (commandPressed) {
              console.log(commandPressed);
              switch (secondEvent.key) {


                // CROSSFADE IN MIDDLE
                case 'ArrowDown':
                  secondEvent.preventDefault()
                  this.props.setCrossfade(0)
                break;



                default:
              }
            }
          })
        }
      }

      // SETUP FOR DOUBLE KEY SHORTCUTS - SHIFT
      if (!shiftPressed) {
        if (firstEvent.key === 'Shift') {

          shiftPressed = true

          document.addEventListener('keyup', (secondEvent) => {
            if (secondEvent.key === 'Shift') {
              shiftPressed = false
            }
          })

          // DOUBLE KEY SHORTCUTS - SHIFT
          document.addEventListener('keydown', (secondEvent) => {
            secondEvent.preventDefault()

            const leftStart = this.props.waveforms['left'].regions.loop.start
            const leftEnd = this.props.waveforms['left'].regions.loop.end
            const leftLength = leftEnd - leftStart
            const rightStart = this.props.waveforms['right'].regions.loop.start
            const rightEnd = this.props.waveforms['right'].regions.loop.end
            const rightLength = rightEnd - rightStart


            if (shiftPressed) {
              switch (secondEvent.key) {
                // HELP
                case '?':

                break;

                // HARD CROSSFADE
                case 'ArrowLeft':
                  secondEvent.preventDefault()
                  this.props.setCrossfade(-1)
                break;
                case 'ArrowRight':
                  secondEvent.preventDefault()
                  this.props.setCrossfade(1)
                break;

                // FASTER BPM INCR/DECREASE
                case 'ArrowUp':
                  const incrBpm = this.props.masterBpm + 9
                  if (incrBpm <= 300) {
                    this.props.setBpm(incrBpm)
                  }
                break;
                case 'ArrowDown':
                  const decrBpm = this.props.masterBpm - 9
                  if (decrBpm > 0) {
                    this.props.setBpm(decrBpm)
                  }
                break;




                // FASTER MOVE LOOP START
                // E, U: nudge loop start backwards left/right
                case 'E':
                  const startBackLeft = leftStart - 0.95
                  if (startBackLeft >= 0) {
                    this.props.setRegionsState('left', 'start', startBackLeft)
                  }
                break;
                case 'U':
                  const startBackRight = rightStart - 0.95
                  if (startBackRight >= 0) {
                    this.props.setRegionsState('right', 'start', startBackRight)
                  }
                break;

                // R, I: nudge loop start forwards left/right
                case 'R':
                  const startForwardsLeft = leftStart + 0.95
                  if (startForwardsLeft <= leftEnd) {
                    this.props.setRegionsState('left', 'start', startForwardsLeft)
                  }
                break;
                case 'I':
                  const startForwardsRight = rightStart + 0.95
                  if (startForwardsRight <= rightEnd) {
                    this.props.setRegionsState('right', 'start', startForwardsRight)
                  }
                break;

                // FASTER MOVE LOOP END
                // C, N: nudge loop end backwards left/right
                case 'C':
                  const endBackLeft = leftEnd - 0.95
                  if (endBackLeft >= leftStart) {
                    this.props.setRegionsState('left', 'end', endBackLeft)
                  }
                break;
                case 'N':
                  secondEvent.preventDefault()
                  const endBackRight = rightEnd - 0.95
                  if (endBackRight >= rightStart) {
                    this.props.setRegionsState('right', 'end', endBackRight)
                  }
                break;
                // V, M: nudge loop end forwards left/right
                case 'V':
                  const endForwardsLeft = leftEnd + 0.95
                  // if (endForwardsLeft <= ?????) { // HOW TO FIND END OF FILE?
                    this.props.setRegionsState('left', 'end', endForwardsLeft)
                  // }
                break;
                case 'M':
                  const endForwardsRight = rightEnd + 0.95
                  // if (endForwardsRight <= ?????) { // HOW TO FIND END OF FILE?
                    this.props.setRegionsState('right', 'end', endForwardsRight)
                  // }
                break;





                default:

              }
            }
          })
        }
      }


      if (commandPressed) {
        // console.log('command is pressed');
      }
      else if (shiftPressed) {
        // console.log('hi');
      }

      // SINGLE KEY SHORTCUTS

      // if (!commandPressed && !shiftPressed) {
      else { // unfortunately these events fire even if cmd and shift are pressed. work around this

          const leftStart = this.props.waveforms['left'].regions.loop.start
          const leftEnd = this.props.waveforms['left'].regions.loop.end
          const leftLength = leftEnd - leftStart
          const rightStart = this.props.waveforms['right'].regions.loop.start
          const rightEnd = this.props.waveforms['right'].regions.loop.end
          const rightLength = rightEnd - rightStart

        switch (firstEvent.key) {
          case ' ':
            if (this.props.channels.left.playing || this.props.channels.right.playing) { // master playing
              this.props.setPlaying('left', false)
              this.props.setPlaying('right', false)
            }
            else {
              ['left', 'right'].forEach(s => {
                if (this.props.channels[s].currentSong) {
                  this.props.setPlaying(s, true)
                }
                else if (this.props.queues[s][0]) {
                  this.props.setChannelState(s, 'playing', true)
                  const currentSong = this.props.queues[s][0]
                  this.props.shiftFromQueue(s)
                  this.props.setChannelState(s, 'currentSong', currentSong)
                }
              })
            }
          break;

          // global
          case 'ArrowLeft':
            const decrCrossfade = this.props.crossfade - .1
            if (decrCrossfade >= -1) {
              this.props.setCrossfade(decrCrossfade)
            }
          break;
          case 'ArrowRight':
            const incrCrossfade = this.props.crossfade + .1
            if (incrCrossfade <= 1) {
              this.props.setCrossfade(incrCrossfade)
            }
          break;
          case 'ArrowUp':
            const incrBpm = this.props.masterBpm + 1
            if (incrBpm <= 300) {
              this.props.setBpm(incrBpm)
            }
          break;
          case 'ArrowDown':
            const decrBpm = this.props.masterBpm - 1
            if (decrBpm > 0) {
              this.props.setBpm(decrBpm)
            }
          break;

          // channel

          // TOGGLE PLAYING
          case 'q':
            if (this.props.channels.left.currentSong) {
              const newPlayingLeft = !this.props.channels.left.playing
              this.props.setPlaying('left', newPlayingLeft)
            }
            else if (this.props.queues['left'][0]) {
              this.props.setChannelState('left', 'playing', true)
              const currentSong = this.props.queues['left'][0]
              this.props.shiftFromQueue('left')
              this.props.setChannelState('left', 'currentSong', currentSong)
            }
          break;
          case 'p':
            if (this.props.channels.right.currentSong) {
              const newPlayingRight = !this.props.channels.right.playing
              this.props.setPlaying('right', newPlayingRight)
            }
            else if (this.props.queues['right'][0]) {
              this.props.setChannelState('right', 'playing', true)
              const currentSong = this.props.queues['right'][0]
              this.props.shiftFromQueue('right')
              this.props.setChannelState('right', 'currentSong', currentSong)
            }
          break;

          // TOGGLE LOOP
          case 's':
            const newLoopLeft = !this.props.waveforms.left.regions.loop.loop
            this.props.setRegionsState('left', 'loop', newLoopLeft)
            this.props.setChannelState('left', 'loop', newLoopLeft)
          break;
          case 'l':
            const newLoopRight = !this.props.waveforms.right.regions.loop.loop
            this.props.setRegionsState('right', 'loop', newLoopRight)
            this.props.setChannelState('right', 'loop', newLoopRight)
            break;

          // MOVE LOOP START
          // E, U: nudge loop start backwards left/right
          case 'e':
            const startBackLeft = leftStart - 0.05
            if (startBackLeft >= 0) {
              this.props.setRegionsState('left', 'start', startBackLeft)
            }
          break;
          case 'u':
            const startBackRight = rightStart - 0.05
            if (startBackRight >= 0) {
              this.props.setRegionsState('right', 'start', startBackRight)
            }
          break;

          // R, I: nudge loop start forwards left/right
          case 'r':
            const startForwardsLeft = leftStart + 0.05
            if (startForwardsLeft <= leftEnd) {
              this.props.setRegionsState('left', 'start', startForwardsLeft)
            }
          break;
          case 'i':
            const startForwardsRight = rightStart + 0.05
            if (startForwardsRight <= rightEnd) {
              this.props.setRegionsState('right', 'start', startForwardsRight)
            }
          break;

          // MOVE LOOP END
          // C, N: nudge loop end backwards left/right
          case 'c':
            const endBackLeft = leftEnd - 0.05
            if (endBackLeft >= leftStart) {
              this.props.setRegionsState('left', 'end', endBackLeft)
            }
          break;
          case 'n':
            const endBackRight = rightEnd - 0.05
            if (endBackRight >= rightStart) {
              this.props.setRegionsState('right', 'end', endBackRight)
            }
          break;
          // V, M: nudge loop end forwards left/right
          case 'v':
            const endForwardsLeft = leftEnd + 0.05
            // if (endForwardsLeft <= ?????) { // HOW TO FIND END OF FILE?
              this.props.setRegionsState('left', 'end', endForwardsLeft)
            // }
          break;
          case 'm':
            const endForwardsRight = rightEnd + 0.05
            // if (endForwardsRight <= ?????) { // HOW TO FIND END OF FILE?
              this.props.setRegionsState('right', 'end', endForwardsRight)
            // }
          break;

          // HALVE/DOUBLE LOOP
          // D, J: halve loop left/right
          case 'd':
            const halfLengthLeft = leftLength / 2
            if (halfLengthLeft > .01) {
              this.props.setRegionsState('left', 'end', leftStart + halfLengthLeft)
            }
          break;
          case 'j':
            const halfLengthRight = rightLength / 2
            if (halfLengthRight > .01) {
              this.props.setRegionsState('right', 'end', rightStart + halfLengthRight)
            }
          break;
          // F, K: double loop left/right
          case 'f':
            const doubleLengthLeft = leftLength * 2
            // if (start + doubleLengthLeft < ?????) { // HOW TO FIND END OF FILE?
              this.props.setRegionsState('left', 'end', leftStart + doubleLengthLeft)
            // }
          break;
          case 'k':
            const doubleLengthRight = rightLength * 2
            // if (start + doubleLengthRight < ?????) { // HOW TO FIND END OF FILE?
              this.props.setRegionsState('right', 'end', rightStart + doubleLengthRight)
            // }
          break;
          default:
        }
      } // END SINGLE KEY SWITCH

    } // end prevent shortcuts when input is focused
  }) // end event listener
}
