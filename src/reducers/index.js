import { combineReducers } from 'redux'
import masterBpm from './masterBpm'
import crossfade from './crossfade'
import allSongs from './allSongs'
import filteredSongs from './filteredSongs'
import browserFilterQuery from './browserFilterQuery'

export default combineReducers({
  masterBpm,
  crossfade,
  allSongs,
  filteredSongs,
  browserFilterQuery,
})
