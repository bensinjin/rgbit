/*
 * action types
 */

export const SET_LEVEL_IN_PROGRESS = 'SET_LEVEL_IN_PROGRESS'
export const RESET_LEVEL_CURRENT_BOARD_STATE = 'CLEAR_LEVEL_CURRENT_BOARD_STATE'
export const UPDATE_LEVEL_CURRENT_BOARD_STATE = 'UPDATE_LEVEL_CURRENT_BOARD_STATE'
export const UPDATE_LEVEL_CURRENT_BOARD_COLOR_STATE = 'UPDATE_LEVEL_CURRENT_BOARD_COLOR_STATE'

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
