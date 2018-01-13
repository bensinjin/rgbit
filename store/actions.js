/*
 * action types
 */

export const SET_GAME_IN_PROGRESS = 'SET_GAME_IN_PROGRESS'

/*
 * action creators
 */

export function setGameInProgress(gameInProgress) {
  return { type: SET_GAME_IN_PROGRESS, gameInProgress}
}
