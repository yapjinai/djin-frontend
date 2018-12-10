// // called in App.js
//
// export default function addKeyboardShortcuts() {
//
//   document.addEventListener('keydown', (firstEvent) => {
//     if (firstEvent.target.type !== 'text' && firstEvent.target.type !== 'number') {
//       //////////////// DO NOT CHANGE ABOVE
//
//       // SETUP FOR DOUBLE KEY SHORTCUTS - SHIFT
//       if (!shiftPressed) {
//         if (firstEvent.key === 'Shift') {
//
//           shiftPressed = true
//
//           document.addEventListener('keyup', (secondEvent) => {
//             if (secondEvent.key === 'Shift') {
//               shiftPressed = false
//             }
//           })
//
//           // DOUBLE KEY SHORTCUTS - SHIFT
//           document.addEventListener('keydown', (secondEvent) => {
//             if (secondEvent.target.type !== 'text' && secondEvent.target.type !== 'number') {
//               secondEvent.preventDefault()
//
//               const leftStart = this.props.waveforms['left'].regions.loop.start
//               const leftEnd = this.props.waveforms['left'].regions.loop.end
//               const leftLength = leftEnd - leftStart
//               const rightStart = this.props.waveforms['right'].regions.loop.start
//               const rightEnd = this.props.waveforms['right'].regions.loop.end
//               const rightLength = rightEnd - rightStart
//
//
//               // const leftPos = this.props.waveforms['left'].pos
//               // const rightPos = this.props.waveforms['right'].pos
//               let leftBeat = 0.95
//               let rightBeat = 0.95
//               if (this.props.channels['left'].currentSong) {
//                 const leftBpm = this.props.channels['left'].currentSong.bpm
//                 leftBeat = 60/leftBpm
//               }
//               if (this.props.channels['right'].currentSong) {
//                 const rightBpm = this.props.channels['right'].currentSong.bpm
//                 rightBeat = 60/rightBpm
//               }
//
//
//               if (shiftPressed) {
//                 switch (secondEvent.key) {
//                   //
//                   // // FASTER MOVE LOOP START
//                   // // E, U: nudge loop start backwards left/right
//                   // case 'E':
//                   //   const startBackLeft = leftStart - leftBeat
//                   //   if (startBackLeft >= 0) {
//                   //     this.props.setRegionsState('left', 'start', startBackLeft)
//                   //   }
//                   // break;
//                   // case 'U':
//                   //   const startBackRight = rightStart - rightBeat
//                   //   if (startBackRight >= 0) {
//                   //     this.props.setRegionsState('right', 'start', startBackRight)
//                   //   }
//                   // break;
//                   //
//                   // // R, I: nudge loop start forwards left/right
//                   // case 'R':
//                   //   const startForwardsLeft = leftStart + leftBeat
//                   //   if (startForwardsLeft <= leftEnd) {
//                   //     this.props.setRegionsState('left', 'start', startForwardsLeft)
//                   //   }
//                   // break;
//                   // case 'I':
//                   //   const startForwardsRight = rightStart + rightBeat
//                   //   if (startForwardsRight <= rightEnd) {
//                   //     this.props.setRegionsState('right', 'start', startForwardsRight)
//                   //   }
//                   // break;
//                   //
//                   // // FASTER MOVE LOOP END
//                   // // C, N: nudge loop end backwards left/right
//                   // case 'C':
//                   //   const endBackLeft = leftEnd - leftBeat
//                   //   if (endBackLeft >= leftStart) {
//                   //     this.props.setRegionsState('left', 'end', endBackLeft)
//                   //   }
//                   // break;
//                   // case 'N':
//                   //   secondEvent.preventDefault()
//                   //   const endBackRight = rightEnd - rightBeat
//                   //   if (endBackRight >= rightStart) {
//                   //     this.props.setRegionsState('right', 'end', endBackRight)
//                   //   }
//                   // break;
//                   // // V, M: nudge loop end forwards left/right
//                   // case 'V':
//                   //   const endForwardsLeft = leftEnd + leftBeat
//                   //   // if (endForwardsLeft <= ?????) { // HOW TO FIND END OF FILE?
//                   //     this.props.setRegionsState('left', 'end', endForwardsLeft)
//                   //   // }
//                   // break;
//                   // case 'M':
//                   //   const endForwardsRight = rightEnd + rightBeat
//                   //   console.log(rightBeat);
//                   //   // if (endForwardsRight <= ?????) { // HOW TO FIND END OF FILE?
//                   //     this.props.setRegionsState('right', 'end', endForwardsRight)
//                   //   // }
//                   // break;
//                   //
//                   //
//                   // // HALVE/DOUBLE LOOP FROM END
//                   // // D, J: halve loop left/right from end
//                   // case 'D':
//                   //   const halfLengthLeft = leftLength / 2
//                   //   if (halfLengthLeft > .01) {
//                   //     this.props.setRegionsState('left', 'start', leftEnd - halfLengthLeft)
//                   //   }
//                   // break;
//                   // case 'J':
//                   //   const halfLengthRight = rightLength / 2
//                   //   if (halfLengthRight > .01) {
//                   //     this.props.setRegionsState('right', 'start', rightEnd - halfLengthRight)
//                   //   }
//                   // break;
//                   // // F, K: double loop left/right from end
//                   // case 'F':
//                   //   const doubleLengthLeft = leftLength * 2
//                   //   if (leftEnd - doubleLengthLeft >= 0) {
//                   //     this.props.setRegionsState('left', 'start', leftEnd - doubleLengthLeft)
//                   //   }
//                   // break;
//                   // case 'K':
//                   //   const doubleLengthRight = rightLength * 2
//                   //   if (rightEnd - doubleLengthRight >= 0) {
//                   //     this.props.setRegionsState('right', 'start', rightEnd - doubleLengthRight)
//                   //   }
//                   // break;
//                   default:
//
//                 }
//               }
//             }
//           })
//         }
//       }
//     } // end prevent shortcuts when input is focused
//   }) // end event listener
// }
