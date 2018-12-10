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
        }
      },
      '2': function () {
        if (this.props.side === 'left') {
          this.seek({forwards: true, coarse: true})
        }
      },
      '9': function () {
        if (this.props.side === 'right') {
          this.seek({forwards: false, coarse: true})
        }
      },
      '0': function () {
        if (this.props.side === 'right') {
          this.seek({forwards: true, coarse: true})
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
          this.moveLoop({
            moveStart: true,
            forwards: false,
            coarse: true
          })
        }
      },
      'u': function () {
        if (this.props.side === 'right') {
          this.moveLoop({
            moveStart: true,
            forwards: false,
            coarse: true
          })
        }
      },
      // nudge forwards
      'r': function () {
        if (this.props.side === 'left') {
          this.moveLoop({
            moveStart: true,
            forwards: true,
            coarse: true
          })
        }
      },
      'i': function () {
        if (this.props.side === 'right') {
          this.moveLoop({
            moveStart: true,
            forwards: true,
            coarse: true
          })
        }
      },

      // NUDGE LOOP END
      // nudge backwards
      'c': function () {
        if (this.props.side === 'left') {
          this.moveLoop({
            moveStart: false,
            forwards: false,
            coarse: true
          })
        }
      },
      'n': function () {
        if (this.props.side === 'right') {
          this.moveLoop({
            moveStart: false,
            forwards: false,
            coarse: true
          })
        }
      },
      // nudge forwards
      'v': function () {
        if (this.props.side === 'left') {
          this.moveLoop({
            moveStart: false,
            forwards: true,
            coarse: true
          })
        }
      },
      'm': function () {
        if (this.props.side === 'right') {
          this.moveLoop({
            moveStart: false,
            forwards: true,
            coarse: true
          })
        }
      },

      // HALVE/DOUBLE LOOP
      // halve
      'd': function () {
        if (this.props.side === 'left') {
          this.resizeLoop({
            double: false,
            fromStart: true
          })
        }
      },
      'j': function () {
        if (this.props.side === 'right') {
          this.resizeLoop({
            double: false,
            fromStart: true
          })
        }
      },
      // double
      'f': function () {
        if (this.props.side === 'left') {
          this.resizeLoop({
            double: true,
            fromStart: true
          })
        }
      },
      'k': function () {
        if (this.props.side === 'right') {
          this.resizeLoop({
            double: true,
            fromStart: true
          })
        }
      },
    },
    double: {
      shift: {
        // NUDGE LOOP START
        // nudge backwards
        'E': function () {
          if (this.props.side === 'left') {
            this.moveLoop({
              moveStart: true,
              forwards: false,
              coarse: false
            })
          }
        },
        'U': function () {
          if (this.props.side === 'right') {
            this.moveLoop({
              moveStart: true,
              forwards: false,
              coarse: false
            })
          }
        },
        // nudge forwards
        'R': function () {
          if (this.props.side === 'left') {
            this.moveLoop({
              moveStart: true,
              forwards: true,
              coarse: false
            })
          }
        },
        'I': function () {
          if (this.props.side === 'right') {
            this.moveLoop({
              moveStart: true,
              forwards: true,
              coarse: false
            })
          }
        },

        // NUDGE LOOP END
        // nudge backwards
        'C': function () {
          if (this.props.side === 'left') {
            this.moveLoop({
              moveStart: false,
              forwards: false,
              coarse: false
            })
          }
        },
        'N': function () {
          if (this.props.side === 'right') {
            this.moveLoop({
              moveStart: false,
              forwards: false,
              coarse: false
            })
          }
        },
        // nudge forwards
        'V': function () {
          if (this.props.side === 'left') {
            this.moveLoop({
              moveStart: false,
              forwards: true,
              coarse: false
            })
          }
        },
        'M': function () {
          if (this.props.side === 'right') {
            this.moveLoop({
              moveStart: false,
              forwards: true,
              coarse: false
            })
          }
        },

        // HALVE/DOUBLE LOOP
        // halve
        'D': function () {
          if (this.props.side === 'left') {
            this.resizeLoop({
              double: false,
              fromStart: false
            })
          }
        },
        'J': function () {
          if (this.props.side === 'right') {
            this.resizeLoop({
              double: false,
              fromStart: false
            })
          }
        },
        // double
        'F': function () {
          if (this.props.side === 'left') {
            this.resizeLoop({
              double: true,
              fromStart: false
            })
          }
        },
        'K': function () {
          if (this.props.side === 'right') {
            this.resizeLoop({
              double: true,
              fromStart: false
            })
          }
        },
      },
      meta: {}
    }
  },
}
