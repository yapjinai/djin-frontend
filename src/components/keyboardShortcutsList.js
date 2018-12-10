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
      // SEEK
      '1': function () {
        if (this.props.side === 'left') {
          this.seek({forwards: false, coarse: true})
          // this.back()
        }
      },
      '2': function () {
        if (this.props.side === 'left') {
          this.seek({forwards: true, coarse: true})
          // this.forwards()
        }
      },
      '9': function () {
        if (this.props.side === 'right') {
          this.seek({forwards: false, coarse: true})
          // this.back()
        }
      },
      '0': function () {
        if (this.props.side === 'right') {
          this.seek({forwards: true, coarse: true})
          // this.forwards()
        }
      },

      // PLAY PAUSE
      'q': function () {
        if (this.props.side === 'left') {
          this.props.togglePlaying()
        }
      },
      'p': function () {
        if (this.props.side === 'right') {
          this.props.togglePlaying()
        }
      },
    },
    double: {
      shift: {
        '!': function () {
          if (this.props.side === 'left') {
            this.seek({forwards: false, coarse: false})
          }
        },
        '@': function () {
          if (this.props.side === 'left') {
            this.seek({forwards: true, coarse: false})
          }
        },
        '(': function () {
          if (this.props.side === 'right') {
            this.seek({forwards: false, coarse: false})
          }
        },
        ')': function () {
          if (this.props.side === 'right') {
            this.seek({forwards: true, coarse: false})
          }
        },

        // JUMP TO LOOP START
        'S': function () {
          if (this.props.side === 'left') {
            const loopStart = this.props.waveform.regions.loop.start
            this.props.setPos(loopStart)
          }
        },
        'L': function () {
          if (this.props.side === 'right') {
            const loopStart = this.props.waveform.regions.loop.start
            this.props.setPos(loopStart)
          }
        }
      },
      // meta: {}
    }
  },
  masterControls: {
    single: {
      // TOGGLE PLAY/PAUSE
      ' ': function () {
        this.togglePlaying()
      },

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
  },
  loop: {
    single: {
      // TOGGLE LOOP
      's': function () {
        if (this.props.side === 'left') {
          this.toggleLoop()
        }
      },
      'l': function () {
        if (this.props.side === 'right') {
          this.toggleLoop()
        }
      },

      // NUDGE LOOP START
      // nudge backwards
      'e': function () {
        if (this.props.side === 'left') {
          this.startBack()
        }
      },
      'u': function () {
        if (this.props.side === 'right') {
          this.startBack()
        }
      },
      // nudge forwards
      'r': function () {
        if (this.props.side === 'left') {
          this.startForwards()
        }
      },
      'i': function () {
        if (this.props.side === 'right') {
          this.startForwards()
        }
      },

      // NUDGE LOOP END
      // nudge backwards
      'c': function () {
        if (this.props.side === 'left') {
          this.endBack()
        }
      },
      'n': function () {
        if (this.props.side === 'right') {
          this.endBack()
        }
      },
      // nudge forwards
      'v': function () {
        if (this.props.side === 'left') {
          this.endForwards()
        }
      },
      'm': function () {
        if (this.props.side === 'right') {
          this.endForwards()
        }
      },

      // HALVE/DOUBLE LOOP
      // halve
      'd': function () {
        if (this.props.side === 'left') {
          this.loopHalf()
        }
      },
      'j': function () {
        if (this.props.side === 'right') {
          this.loopHalf()
        }
      },
      // double
      'f': function () {
        if (this.props.side === 'left') {
          this.loopDouble()
        }
      },
      'k': function () {
        if (this.props.side === 'right') {
          this.loopDouble()
        }
      },
    },
    double: {
      shift: {
      // REFACTOR COMPONENTS
        //
        // // JUMP TO LOOP START
        // 'S': function () {
        //   if (this.props.side === 'left') {
        //     const loopStartLeft = this.props.waveform.regions.loop.start
        //     if (this.props.waveform.pos !== loopStartLeft) {
        //     //   this.props.setPos('left', loopStartLeft)
        //     // }
        //     console.log(this.props.waveform.pos);
        //     console.log(loopStartLeft);
        //   }
        // },
        // 'L': function () {
        //   if (this.props.side === 'right') {
        //     const loopStartRight = this.props.waveform.regions.loop.start
        //     this.props.setPos('right', loopStartRight)
        //   }
        // },
      },
      meta: {}
    }
  },
}

// Loop controls
// (with Shift: nudge slower)
// Shift + S, Shift + L: jump to loop start

// Shift + D, Shift + J: halve loop from end
// Shift + F, Shift + K: double loop from end
