const filteredSongs = (state = [], action) => {
  switch (action.type) {
    case 'SET_FILTERED_SONGS':
      return action.filteredSongs
    default:
      return state
  }
}

function sortSongs(array, sortBy) {
  return array.sort((a, b) => {
    const paramA = a[sortBy]
    const paramB = b[sortBy]
    if (sortBy === 'bpm') { // sort numerically
      return paramA - paramB
    }
    else { // sort alphabetically
      return paramA.toLowerCase().localeCompare(paramB.toLowerCase())
    }
  })
}

export default filteredSongs
