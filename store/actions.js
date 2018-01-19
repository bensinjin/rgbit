/*
 * action types
 */

export const SET_LEVEL_IN_PROGRESS = 'SET_LEVEL_IN_PROGRESS'
export const RESET_LEVEL_CURRENT_BOARD_STATE = 'CLEAR_LEVEL_CURRENT_BOARD_STATE'
export const UPDATE_LEVEL_CURRENT_BOARD_STATE = 'UPDATE_LEVEL_CURRENT_BOARD_STATE'
export const UPDATE_LEVEL_CURRENT_BOARD_COLOR_STATE = 'UPDATE_LEVEL_CURRENT_BOARD_COLOR_STATE'
export const QUEUE_INSTANT_DEATH_LEVEL = 'QUEUE_INSTANT_DEATH_LEVEL';
export const DEQUEUE_INSTANT_DEATH_LEVEL = 'DEQUEUE_INSTANT_DEATH_LEVEL';
export const RESET_INSTANT_DEATH_SCORE_DISPLAY = 'RESET_INSTANT_DEATH_SCORE_DISPLAY';
export const INCREMENT_INSTANT_DEATH_SCORE_DISPLAY = 'INCREMENT_INSTANT_DEATH_SCORE_DISPLAY';
export const DECREMENT_INSTANT_DEATH_SCORE_DISPLAY = 'DECREMENT_INSTANT_DEATH_SCORE_DISPLAY';

/*
 * action creators
 */

export function setLevelInProgress(levelInProgress) {
  return { type: SET_LEVEL_IN_PROGRESS, levelInProgress};
}

export function resetLevelCurrentBoardState() {
  return { type: RESET_LEVEL_CURRENT_BOARD_STATE };
}

export function updateLevelCurrentBoardState(rowIndex, colIndex, colorChar) {
  return { type: UPDATE_LEVEL_CURRENT_BOARD_STATE, rowIndex, colIndex, colorChar };
}

export function updateLevelCurrentBoardColorState(levelCurrentBoardColorState) {
  return { type: UPDATE_LEVEL_CURRENT_BOARD_COLOR_STATE, levelCurrentBoardColorState };
}

export function queueInstantDeathLevel(levelIntroRoute) {
  return { type: QUEUE_INSTANT_DEATH_LEVEL, levelIntroRoute };
}

export function dequeueInstantDeathLevel() {
  return { type: DEQUEUE_INSTANT_DEATH_LEVEL };
}

export function resetInstantDeathScoreDisplay() {
  return { type: RESET_INSTANT_DEATH_SCORE_DISPLAY };
}

export function incrementInstantDeathScoreDisplay() {
  return { type: INCREMENT_INSTANT_DEATH_SCORE_DISPLAY };
}

export function decrementInstantDeathScoreDisplay() {
  return { type: DECREMENT_INSTANT_DEATH_SCORE_DISPLAY };
}