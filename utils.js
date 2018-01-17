import React from 'react';
import { NavigationActions } from 'react-navigation';
import gc from './config/game-config';
import l from './config/levels';
import store from 'react-native-simple-store';
import { LevelContainer, InstantDeathLevelContainer } from './containers/Containers';

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
  const initialBS = [];

  for (let x = 0; x < gc.BitBoard.numRows; x++) {
    let row = [];
    for (let y = 0; y < gc.BitBoard.numCols; y++) {
      row.push(colorCharacter);
    }
    initialBS.push(row);
  }

  return initialBS;
}

export function newLevelBoardColorState() {
  return gc.colorStateRed;
}

export function instantDeathLevelIntroRoutes() {
  const levels = l,
        levelIntros = [];

  for (const key in levels) {
    const level = levels[key];
    if (level.machineName) {
      const introRoute =
              level.machineName.charAt(0).toUpperCase() +
              level.machineName.slice(1) + 'IDIntro';
      levelIntros.push(introRoute);
    }
  }

  return levelIntros;
}

export const levelRenderer = (component) => {
  const sharedLevelConfig = {
    levelOverRoute: 'TheReds1LevelSelect',
    levelExitRoute: 'TheReds1LevelSelect'
  };
  return (
    <LevelContainer
      levelID={component.id}
      levelRestartRoute={component.levelRestartRoute}
      levelSolutionBoardState={component.levelSolutionBoardState}
      levelTimeSeconds = {calculateLevelSeconds(component.levelSolutionBoardState, gc.beginnerLevelDivisor)}
      navigation={component.props.navigation}
      {...sharedLevelConfig}
      />
  );
}

export const instantDeathLevelRenderer = (component) => {
  const sharedLevelConfig = {
    levelExitRoute: 'Home'
  };
  return (
    <InstantDeathLevelContainer
      levelID={component.id}
      levelSolutionBoardState={component.levelSolutionBoardState}
      levelTimeSeconds = {calculateLevelSeconds(component.levelSolutionBoardState, gc.instantDeathLevelDivisor)}
      navigation={component.props.navigation}
      {...sharedLevelConfig}
      />
  );
}

// Persistent store related
// TODO This is all really lazy, clean it up bro!
export function getKey(id){
  return gc.storeKeyPrefix + id;
}

export function getScore(id) {
  const storeKey = getKey(id);
  return store.get(storeKey);
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
      if (res && Number.isInteger(res.levelID)) {
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