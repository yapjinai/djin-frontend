export const keyboardShortcuts = {
  help: {
    // single: {},
    double: {
      shift: {
        '?': function () {
          this.handleClick()
        }
      },
      // meta: {}
    }
  },
  seek: {
    single: {
      '1': function () {
        if (this.props.side === 'left') {
          this.fastBack()
        }
      },
      '2': function () {
        if (this.props.side === 'left') {
          this.fastForwards()
        }
      },
      '9': function () {
        if (this.props.side === 'right') {
          this.fastBack()
        }
      },
      '0': function () {
        if (this.props.side === 'right') {
          this.fastForwards()
        }
      },
    },
    double: {
      shift: {
        '!': function () {
          if (this.props.side === 'left') {
            this.back()
          }
        },
        '@': function () {
          if (this.props.side === 'left') {
            this.forwards()
          }
        },
        '(': function () {
          if (this.props.side === 'right') {
            this.back()
          }
        },
        ')': function () {
          if (this.props.side === 'right') {
            this.forwards()
          }
        },
      },
      // meta: {}
    }
  },
  masterControls: {
    single: {
      // CROSSFADE
      'ArrowLeft': function () {
        const decrCrossfade = this.props.crossfade - .1
        if (decrCrossfade >= -1) {
          this.props.setCrossfade(decrCrossfade)
        }
      },
      'ArrowRight': function () {
        const incrCrossfade = this.props.crossfade + .1
        if (incrCrossfade <= 1) {
          this.props.setCrossfade(incrCrossfade)
        }
      },

      // BPM INCR/DECR
      'ArrowUp': function () {
        const incrBpm = this.props.masterBpm + 10
        if (incrBpm <= 300) {
          this.props.setBpm(incrBpm)
        }
      },
      'ArrowDown': function () {
        const decrBpm = this.props.masterBpm - 10
        if (decrBpm > 0) {
          this.props.setBpm(decrBpm)
        }
      },
    },
    double: {
      shift: {
        // HARD CROSSFADE
        'ArrowLeft': function () {
          this.props.setCrossfade(-1)
        },
        'ArrowRight': function () {
          this.props.setCrossfade(1)
        },

        // SLOWER BPM INCR/DECR
        'ArrowUp': function () {
          const incrBpm = this.props.masterBpm + 1
          if (incrBpm <= 300) {
            this.props.setBpm(incrBpm)
          }
        },
        'ArrowDown': function () {
          const decrBpm = this.props.masterBpm - 1
          if (decrBpm > 0) {
            this.props.setBpm(decrBpm)
          }
        },
      },
      meta: {
        'ArrowDown': function () {
          this.props.setCrossfade(0)
        }
      }
    }
  }

}

// Master controls
// Space: play/pause master
//
// Q, P: play/pause left/right
// S, L: toggle looping left/right



// Loop controls
// (with Shift: nudge faster)
// Shift + S, Shift + L: jump to loop start
//
// E, U: nudge loop start backwards
// R, I: nudge loop start forwards
//
// C, N: nudge loop end backwards
// V, M: nudge loop end forwards
//
// D, J: halve loop
// F, K: double loop
//
// Shift + D, Shift + J: halve loop from end
// Shift + F, Shift + K: double loop from end
