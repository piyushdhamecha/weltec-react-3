import { combineReducers } from 'redux'
import todos from './todos'
import counter from './counter'
import badgeCount from './badgeCount'

export default combineReducers({
  todos,
  counter,
  badgeCount,
})