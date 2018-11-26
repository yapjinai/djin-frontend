import { combineReducers } from 'redux'
import masterBpm from './masterBpm'
import crossfade from './crossfade'

export default combineReducers({
  masterBpm,
  crossfade
})
