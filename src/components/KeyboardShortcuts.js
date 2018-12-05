// called in App.js

export default function addKeyboardShortcuts() {
  document.addEventListener('keydown', (e) => {
    let commandPressed = false
    let shiftPressed = false
    // SETUP FOR DOUBLE KEY SHORTCUTS

    if (!commandPressed) {
      if (e.key === 'Meta') {
        commandPressed = true
        console.log(commandPressed);
        document.addEventListener('keyup', (e) => {
          if (e.key === 'Meta') {
            commandPressed = false
            console.log(commandPressed);
          }
        })
      }
    }
    if (!shiftPressed) {
      if (e.key === 'Shift') {
        shiftPressed = true
        document.addEventListener('keyup', (e) => {
          if (e.key === 'Shift') {
            shiftPressed = false
          }
        })
      }
    }

    // DOUBLE KEY SHORTCUTS

    // SINGLE KEY SHORTCUTS

    const leftStart = this.props.waveforms['left'].regions.loop.start
    const leftEnd = this.props.waveforms['left'].regions.loop.end
    const leftLength = leftEnd - leftStart
    const rightStart = this.props.waveforms['right'].regions.loop.start
    const rightEnd = this.props.waveforms['right'].regions.loop.end
    const rightLength = rightEnd - rightStart

    if (e.target.type !== 'text' && e.target.type !== 'number' && !commandPressed && !shiftPressed) {
      switch (e.key) {
        case ' ':
          e.preventDefault()
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
          e.preventDefault()
          const decrCrossfade = this.props.crossfade - .1
          if (decrCrossfade >= -1) {
            this.props.setCrossfade(decrCrossfade)
          }
        break;
        case 'ArrowRight':
          e.preventDefault()
          const incrCrossfade = this.props.crossfade + .1
          if (incrCrossfade <= 1) {
            this.props.setCrossfade(incrCrossfade)
          }
        break;
        case 'ArrowUp':
          e.preventDefault()
          const incrBpm = this.props.masterBpm + 1
          if (incrBpm <= 300) {
            this.props.setBpm(incrBpm)
          }
        break;
        case 'ArrowDown':
          e.preventDefault()
          const decrBpm = this.props.masterBpm - 1
          if (decrBpm > 0) {
            this.props.setBpm(decrBpm)
          }
        break;

        // channel

        // PLAY
        case 'q':
          // e.preventDefault()
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
          // e.preventDefault()
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
          // e.preventDefault()
          const newLoopLeft = !this.props.waveforms.left.regions.loop.loop
          this.props.setRegionsState('left', 'loop', newLoopLeft)
          this.props.setChannelState('left', 'loop', newLoopLeft)
        break;
        case 'l':
          // e.preventDefault()
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


  })
}
