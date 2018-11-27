const defaultChannel = {
  currentSong: null,
  playing: false,

  volume: .5,
  bpmFactor: 1,

  calculatedVolume: .5,
  calculatedAudioRate: 1
}

const defaultChannels = {
  left: {...defaultChannel},
  right: {...defaultChannel}
}

const channels = (state = defaultChannels, action) => {

  function setChannelState(side, key, newValue) {
    const newChannel = {...state[side]}
    newChannel[key] = newValue

    const newState = {...state}
    newState[side] = newChannel
    return newState
  }

  switch (action.type) {
    case 'SET_CHANNEL_STATE':
      const side = action.side
      const key = action.key
      const newValue = action.payload

      return setChannelState(side, key, newValue)
      
    default:
      return state
  }
}

export default channels
