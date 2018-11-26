import { combineReducers } from 'redux'
import masterBpm from './masterBpm'
import crossfade from './crossfade'

import allSongs from './allSongs'
import filteredSongs from './filteredSongs'
import browserFilterQuery from './browserFilterQuery'
import sortBy from './sortBy'
import reverseSort from './reverseSort'

export default combineReducers({
  masterBpm,
  crossfade,

  allSongs,
  filteredSongs,
  browserFilterQuery,

  sortBy,
  reverseSort
})
