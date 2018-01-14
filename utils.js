import { NavigationActions } from 'react-navigation';
import gc from './config/game-config';
import * as TR1 from './components/screens/TheReds1';
import store from 'react-native-simple-store';

// Level related

/**
 * The logic to determine how many seconds are allotted to complete a level.
 * We're interested in three things:
 *  1. How many colored squares are in the puzzle?
 *  3. How difficult should this puzzle be? (Some divisor to the sum of the previous two questions).
 *
 * @param {*} boardState
 * @param {*} divisor
 */
export function calculateLevelSeconds(solutionBoardState, divisor, initialBoardState = null) {
  let time = 0;
  let getColoredSquareCount = function (boardState) {
    let count = 0;
    for (rowIndex in boardState) {
      for (colIndex in boardState[rowIndex]) {
        currentColor = boardState[rowIndex][colIndex];
        // We are only interested in none white squares.
        if (currentColor != 'W') {
          // Accomodate for a tap.
          count += 1;
        }
      }
    }

    return count;
  };

  if (solutionBoardState) {
    time += getColoredSquareCount(solutionBoardState);
  }

  // TODO add support for initial board states other than white.
  //if (initialBoardState) {
  //  time += getColoredSquareCount(initialBoardState);
  //}

  return time == 0 ? time : Math.round(time / divisor);
}

export function initialBoardState(colorCharacter = 'W') {
  let initialBS = [];

  for (let x = 0; x < gc.BitBoard.numRows; x++) {
    let row = [];
    for (y = 0; y < gc.BitBoard.numCols; y++) {
      row.push(colorCharacter);
    }
    initialBS.push(row);
  }

  return initialBS;
}

// Store related
export function getKey(id){
  return gc.storeKeyPrefix + id;
}

export function getScoreData() {
  let keys = [
        getKey(TR1.Level1.id),
//        getKey(TR1.Level2.id),
//        getKey(TR1.Level3.id),
//        getKey(TR1.Level4.id),
//        getKey(TR1.Level5.id),
//        getKey(TR1.Level6.id),
//        getKey(TR1.Level7.id),
//        getKey(TR1.Level8.id),
//        getKey(TR1.Level9.id),
//        getKey(TR1.Level10.id),
      ],
      data = {};

  for (let key in keys) {
    data[keys[key]] = store.get(keys[key]);
  }

  return data;
}

export function deleteScoreData() {
  let keys = [
        getKey(TR1.Level1.id),
//        getKey(TR1.Level2.id),
//        getKey(TR1.Level3.id),
//        getKey(TR1.Level4.id),
//        getKey(TR1.Level5.id),
//        getKey(TR1.Level6.id),
//        getKey(TR1.Level7.id),
//        getKey(TR1.Level8.id),
//        getKey(TR1.Level9.id),
//        getKey(TR1.Level10.id),
      ],
      data = {};

  for (let key in keys) {
    data[keys[key]] = store.delete(keys[key]);
  }

  return data;
}

// Misc
export function resetNavigation(targetRoute, navigation) {
  const resetAction = NavigationActions.reset({
    index: 0,
    actions: [
      NavigationActions.navigate({ routeName: targetRoute }),
    ],
  });
  navigation.dispatch(resetAction);
}