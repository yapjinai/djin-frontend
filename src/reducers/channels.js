const defaultChannel = {
  // currentSong: null,
  currentSong: {
    id: 106,
    title: "Super Natural",
    artist: "Carly Rae Jepsen",
    bpm: 128,
    url: "http://localhost:3001/SuperNatural.mp3",
  },
  playing: false,

  volume: 0.2,
  bpmFactor: 1,

  calculatedVolume: .5,
  calculatedAudioRate: 1,

  pitchShift: true,
  loop: false,
}

const defaultChannels = {
  left: {...defaultChannel},
  right: {...defaultChannel}
}

const channels = (state = defaultChannels, action) => {

  switch (action.type) {
    case 'SET_CHANNEL_STATE':
      return ({...state,
        [action.side]: {...state[action.side],
          [action.key]: action.newValue
        }
      })

    case 'SET_PLAYING':
      return ({...state,
        [action.side]: {...state[action.side],
          playing: action.playing
        }
      })

    default:
      return state
  }
}

export default channels
