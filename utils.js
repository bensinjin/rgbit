import { NavigationActions } from 'react-navigation';
import gc from './config/game-config';
import {Level1, Level2, Level3, Level4} from './components/screens/LevelsBeginner';
import store from 'react-native-simple-store';

export function initialBoardState() {
  // Funny right?
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
  let keys = [getKey(Level1.id), getKey(Level2.id), getKey(Level3.id), getKey(Level4.id)],
      data = {};

  for (let key in keys) {
    data[keys[key]] = store.get(keys[key]);
  }

  return data;
}

export function deleteScoreData() {
  let keys = [getKey(Level1.id), getKey(Level2.id), getKey(Level3.id), getKey(Level4.id)],
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