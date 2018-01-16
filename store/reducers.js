import { combineReducers } from 'redux';
import * as ac from './actions';
import { newLevelBoardState, newLevelBoardColorState, instantDeathLevelIntroRoutes } from '../utils.js';

function levelInProgress(state = false, action) {
  if (action.type == ac.SET_LEVEL_IN_PROGRESS) {
    return action.levelInProgress;
  }

  return state;
}

function levelCurrentBoardState(state = newLevelBoardState(), action) {
  if (action.type == ac.RESET_LEVEL_CURRENT_BOARD_STATE) {
    return newLevelBoardState();
  }
  else if (action.type == ac.UPDATE_LEVEL_CURRENT_BOARD_STATE) {
    let stateCopy = [...state];
    if (stateCopy[action.rowIndex][action.colIndex] != action.colorChar) {
      stateCopy[action.rowIndex][action.colIndex] = action.colorChar;
    }
    return stateCopy;
  }

  return state;
}

function levelCurrentBoardColorState(state = newLevelBoardColorState(), action) {
  if (action.type == ac.UPDATE_LEVEL_CURRENT_BOARD_COLOR_STATE) {
    return action.levelCurrentBoardColorState;
  }

  return state;
}

function instantDeathLevelQueue(state = instantDeathLevelIntroRoutes(), action) {
  if (action.type == ac.QUEUE_INSTANT_DEATH_LEVEL) {
    const stateCopy = [...state];
    stateCopy.push(action.levelIntroRoute);
    return stateCopy;
  }
  else if (action.type == ac.DEQUEUE_INSTANT_DEATH_LEVEL) {
    const stateCopy = [...state].slice(1);
    return stateCopy;
  }

  return state;
}

const rgbitApp = combineReducers({
  levelInProgress,
  levelCurrentBoardState,
  levelCurrentBoardColorState,
  instantDeathLevelQueue
});

export default rgbitApp;