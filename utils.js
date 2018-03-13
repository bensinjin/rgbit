import { NavigationActions } from 'react-navigation';
import gc from './config/game-config';
import l from './config/levels';
import store from 'react-native-simple-store';

// Level related

export function calculateLevelSeconds(solutionBoardState, divisor, initialBoardState = null) {
  let time = 0;
  let getColoredSquareCount = function (boardState) {
    let count = 0;
    for (const rowIndex in boardState) {
      for (const colIndex in boardState[rowIndex]) {
        const currentColor = boardState[rowIndex][colIndex];
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

export function newLevelBoardState(colorCharacter = 'W') {
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

export function newLevelBoardColorState() {
  return gc.colorStateRed;
}

// Persistent store related
// TODO This is all really lazy, clean it up bro!
export function getKey(id) {
  return gc.storeKeyPrefix + id;
}

export function getScoreData() {
  const data = {};

  for (const key in l) {
    const storeKey = getKey(l[key].id);
    data[storeKey] = store.get(storeKey);
  }

  return data;
}

export function deleteScoreData() {
  for (const key in l) {
    const storeKey = getKey(l[key].id);
    store.get(storeKey).then((res) => {
      if (res && res.levelID) {
        store.delete(storeKey)
          .then(() => console.warn('Score record deleted.'));
      }
    });
  }
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