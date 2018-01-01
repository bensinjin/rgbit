import { NavigationActions } from 'react-navigation';
import gc from './config/game-config';
import * as TR1 from './components/screens/TheReds1';
import store from 'react-native-simple-store';

// Level related

export function calculateLevelSeconds(boardState, divisor) {
  let taps = 0;

  for (rowIndex in boardState) {
    for (colIndex in boardState[rowIndex]) {
      switch (boardState[rowIndex][colIndex]) {
        case 'R':
          taps += 1;
          break;
        case 'G':
          taps += 1.1;
          break;
        case 'B':
          taps += 1.2;
          break;
      }
    }
  }

  return Math.round(taps / divisor);
}

export function initialBoardState() {
  let initialBS = [];
  for (let x = 0; x < gc.BitBoard.numRows; x++) {
    let row = [];
    for (y = 0; y < gc.BitBoard.numCols; y++) {
      row.push('W');
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
        getKey(TR1.Level2.id),
        getKey(TR1.Level3.id),
        getKey(TR1.Level4.id),
        getKey(TR1.Level5.id),
        getKey(TR1.Level6.id)
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
        getKey(TR1.Level2.id),
        getKey(TR1.Level3.id),
        getKey(TR1.Level4.id),
        getKey(TR1.Level5.id),
        getKey(TR1.Level6.id)
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