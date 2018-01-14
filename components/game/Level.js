import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import persistentStore from 'react-native-simple-store';
import BitBoard from '../game/BitBoard';
import gc from '../../config/game-config';
import {getKey} from '../../utils.js';


export default class Level extends Component {

  _persistScore(calculatedScore) {
    const key = getKey(calculatedScore.levelID);
    if (key) {
      persistentStore.get(key)
        .then(res => {
         // New score.
          if (!res) {
            return persistentStore.save(key, calculatedScore)
          }
          // New high score.
          else if (res.percentCorrect < calculatedScore.percentCorrect) {
            return persistentStore.update(key, calculatedScore)
          }
          // New score but not higher than high score.
          else {
            return null;
          }
        })
        .catch(error => {
          console.error(error.message);
        });
    }
  }

  _calculateScore(currentBoardState, solutionBoardState) {
    const calculatedSolution = this._calculateSolution(solutionBoardState),
          bitsToFlip = calculatedSolution.length;
    let correctlyFlipped = 0;

    for (const index in this._solutionData) {
      const entry = this._solutionData[index];
      if (entry.colorChar == currentBoardState[entry.rowIndex][entry.colIndex]) {
        correctlyFlipped += 1;
      }
    }

    return {
      levelID: this.props.levelID,
      // TODO
      //time:
      bitsToFlip: bitsToFlip,
      bitsCorrectlyFlipped: correctlyFlipped,
      percentCorrect: correctlyFlipped == 0 ? 0 : Math.round(correctlyFlipped / bitsToFlip * 100)
    };
  }

  _calculateSolution(solutionBoardState) {
    const calculatedSolution = [];
    for (const rowI in solutionBoardState) {
      for (const colI in solutionBoardState[rowI]) {
        const colChar = solutionBoardState[rowI][colI];
        // We're interested in the indexes of all
        // bits that are colored. White bits are excluded.
        if (colChar != 'W') {
          calculatedSolution.push({rowIndex: rowI, colIndex: colI, colorChar: colChar});
        }
      }
    }

    return calculatedSolution;
  }

  onLevelOver(reason, currentBoardState, solutionBoardState) {
    const calculatedScore = this._calculateScore(currentBoardState, solutionBoardState);
    if (reason == levelOverReasons.LEVEL_SOLUTION_MET) {
      this._persistScore(calculatedScore)
        .then(() => this.props.navigation.navigate(this.props.levelOverRoute));
    }
    else if (reason == levelOverReasons.LEVEL_TIME_ELAPSED) {
      this._persistScore(calculatedScore)
        .then(() => this.props.navigation.navigate(this.props.levelOverRoute));
    }
    else {
      this.props.navigation.navigate(this.props.levelOverRoute)
    }
  }

  render() {
    return (
      <View style={gc.wrapperLevel}>
        <BitBoard
          initialBoardState={this.props.initialBoardState}
          solutionBoardState={this.props.solutionBoardState}
          playable={true}
          playSeconds={this.props.levelTimeSeconds}
          onPlayOver={(calculatedScore) => {this._onLevelOver(calculatedScore)}}
          onLevelSelect={() => {this._onLevelSelect();}}
          onLevelRestart={() => {this._onLevelRestart();}}
          levelID={this.props.levelID}
          />
      </View>
    );
  }
}

Level.propTypes = {
  levelID: PropTypes.number,
  levelOverRoute: PropTypes.string,
  levelRestartRoute: PropTypes.string,
  levelExitRoute: PropTypes.string,
  levelTimeSeconds: PropTypes.number,
  navigation: PropTypes.object,
  currentBoardState: PropTypes.array,
  solutionBoardState: PropTypes.array
};

export const levelOverReasons = {
  LEVEL_TIME_ELAPSED: 'LEVEL_TIME_ELAPSED',
  LEVEL_SOLUTION_MET: 'LEVEL_SOLUTION_MET'
}