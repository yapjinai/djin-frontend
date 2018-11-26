const allSongs = (state = [], action) => {
  switch (action.type) {
    case 'SET_ALL_SONGS':
      return action.allSongs
    default:
      return state
  }
}

export default allSongs
