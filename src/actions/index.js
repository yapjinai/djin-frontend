export const setBpm = (bpm) => ({
  type: 'SET_BPM',
  bpm: bpm
})
export const setCrossfade = (crossfade) => ({
  type: 'SET_CROSSFADE',
  crossfade: crossfade
})

/////////////////////////
/////////////////////////

export const setAllSongs = (allSongs) => ({
  type: 'SET_ALL_SONGS',
  allSongs: allSongs
})

/////////////////////////
/////////////////////////

export const setFilteredSongs = (filteredSongs) => ({
  type: 'SET_FILTERED_SONGS',
  filteredSongs: filteredSongs
})
export const setBrowserFilterQuery = (browserFilterQuery) => ({
  type: 'SET_BROWSER_FILTER_QUERY',
  browserFilterQuery: browserFilterQuery
})

/////////////////////////
/////////////////////////

export const setSortBy = (sortBy) => ({
  type: 'SET_SORT_BY',
  sortBy: sortBy
})
export const setReverseSort = (reverseSort) => ({
  type: 'SET_REVERSE_SORT',
  reverseSort: reverseSort
})

/////////////////////////
/////////////////////////

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

/////////////////////////
/////////////////////////

export const setChannelState = (side, key, newValue) => ({
  type: 'SET_CHANNEL_STATE',
  side: side,
  key: key,
  newValue: newValue
})
export const setPlaying = (side, playing) => ({
  type: 'SET_PLAYING',
  side: side,
  playing: playing
})

/////////////////////////
/////////////////////////

export const setPos = (side, pos) => ({
  type: 'SET_POS',
  side: side,
  pos: pos
})
export const setWaveformState = (side, key, newValue) => ({
  type: 'SET_WAVEFORM_STATE',
  side: side,
  key: key,
  newValue: newValue
})
export const setRegionsState = (side, key, newValue) => ({
  type: 'SET_REGIONS_STATE',
  side: side,
  key: key,
  newValue: newValue
})
