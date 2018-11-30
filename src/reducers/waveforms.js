const defaultWaveform = {
  pos: 0,
  waveformOptions: {
    audioRate: 1,
    // backend: this.props.pitchShift ? 'WebAudio' : 'MediaElement',
    height: 128,
    fillParent: false,
    scrollParent: true,
  },
  regions: {
    loop: {
      id: 'loop',
      start: 0,
      end: 4,
      loop: false,
    }
  }
}

const defaultWaveforms = {
  left: {...defaultWaveform},
  right: {...defaultWaveform}
}

const waveforms = (state = defaultWaveforms, action) => {

  switch (action.type) {
    case 'SET_POS':
    return ({...state,
      [action.side]: {...state[action.side],
        pos: action.pos
      }
    })

    case 'SET_WAVEFORM_STATE':
      return ({...state,
        [action.side]: {...state[action.side],
          waveformOptions: {...state[action.side].waveformOptions,
            [action.key]: action.newValue
          }
        }
      })

    case 'SET_REGIONS_STATE':
      return ({...state,
        [action.side]: {...state[action.side],
          regions: {
            loop: {...state[action.side].regions.loop,
              [action.key]: action.newValue
            }
          }
        }
      })

    default:
      return state
  }
}

export default waveforms
