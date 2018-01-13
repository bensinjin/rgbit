import { combineReducers } from 'redux'
import * as ac from './actions'

function gameInProgress(state = false, action) {
  switch (action.type) {
    case ac.SET_GAME_IN_PROGRESS:
      return action.gameInProgress
    default:
      return state
  }
}

const rgbitApp = combineReducers({
  gameInProgress
})

export default rgbitApp