const filteredSongs = (state = [], action) => {
  switch (action.type) {
    case 'SET_FILTERED_SONGS':
      return action.filteredSongs
    default:
      return state
  }
}

export default filteredSongs
