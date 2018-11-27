const masterBpm = (state = 0, action) => {
  switch (action.type) {
    case 'SET_BPM':
      return action.bpm
      // return 5
    default:
      return state
  }
}

export default masterBpm
