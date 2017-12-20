import { NavigationActions } from 'react-navigation';
import gc from './config/game-config';
import store from 'react-native-simple-store';

// General level functionality
export function onLevelOver(scoreData) {
  alert('Your score:' + scoreData.percentCorrect + '%');
  updateScoreData(scoreData);
}

export function getKey(id){
  return gc.storeKeyPrefix + id;
}

export function onLevelRestart(navigation, route) {
  navigation.navigate(route);
}

export function onLevelSelect(navigation, route) {
  navigation.navigate(route);
}

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

export function updateScoreData(scoreData){
  let key = getKey(scoreData.levelID);

  if (key) {
    store.get(key)
      .then(res => {
        if (!res) {
          store.save(key, scoreData);
        } else {
          store.update(key, scoreData);
        }
      })
      .catch(error => {
        console.error(error.message);
      });
  }
  console.warn(store.get(key));
}

export function getScoreData(key) {
  return store.get(key);
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