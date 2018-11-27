const masterBpm = (state = null, action) => {
  switch (action.type) {
    case 'SET_BPM':
      return action.bpm
      // return 5
    default:
      return state
  }
}

export default masterBpm
