export const setBpm = (bpm) => ({
  type: 'SET_BPM',
  bpm: bpm
})
export const setCrossfade = (crossfade) => ({
  type: 'SET_CROSSFADE',
  crossfade: crossfade
})

export const setAllSongs = (allSongs) => ({
  type: 'SET_ALL_SONGS',
  allSongs: allSongs
})

export const setFilteredSongs = (filteredSongs) => ({
  type: 'SET_FILTERED_SONGS',
  filteredSongs: filteredSongs
})
export const setBrowserFilterQuery = (browserFilterQuery) => ({
  type: 'SET_BROWSER_FILTER_QUERY',
  browserFilterQuery: browserFilterQuery
})

export const setSortBy = (sortBy) => ({
  type: 'SET_SORT_BY',
  sortBy: sortBy
})
export const setReverseSort = (reverseSort) => ({
  type: 'SET_REVERSE_SORT',
  reverseSort: reverseSort
})

export const setSideQueue = (side, queue) => ({
  type: 'SET_SIDE_QUEUE',
  side: side,
  queue: queue
})
export const pushToQueue = (side, song) => ({
  type: 'PUSH_TO_QUEUE',
  side: side,
  song: song
})
export const shiftFromQueue = (side) => ({
  type: 'SHIFT_FROM_QUEUE',
  side: side
})
