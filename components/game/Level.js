import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import persistentStore from 'react-native-simple-store';
import BitBoard from '../game/BitBoard';
import LevelHUDTop from '../game/LevelHUDTop';
import LevelHUDBottom from '../game/LevelHUDBottom';
import gc from '../../config/game-config';
import {getKey} from '../../utils.js';


export default class Level extends Component {

  constructor(props) {
    super(props);
    this.onLevelOver = this.onLevelOver.bind(this);
    this.onLevelExit = this.onLevelExit.bind(this);
    this.onLevelRestart = this.onLevelRestart.bind(this);
    this.calculateScore = this.calculateScore.bind(this);
    this.calculatedSolution = this._calculateSolution();
  }

  _calculateSolution() {
    const calculatedSolution = [];
    for (const rowIndex in this.props.levelSolutionBoardState) {
      for (const colIndex in this.props.levelSolutionBoardState[rowIndex]) {
        const colChar = this.props.levelSolutionBoardState[rowIndex][colIndex];
        // We're interested in the indexes of all
        // bits that are colored. White bits are excluded.
        if (colChar != 'W') {
          calculatedSolution.push({rowIndex: rowIndex, colIndex: colIndex, colorChar: colChar});
        }
      }
    }

    return calculatedSolution;
  }

  calculateScore() {
    const bitsToFlip = this.calculatedSolution.length;
    let correctlyFlipped = 0;

    for (const index in this.calculatedSolution) {
      const entry = this.calculatedSolution[index];
      if (entry.colorChar == this.props.levelCurrentBoardState[entry.rowIndex][entry.colIndex]) {
        correctlyFlipped += 1;
      }
    }
    return {
      levelID: this.props.levelID,
      //time:
      bitsToFlip: bitsToFlip,
      bitsCorrectlyFlipped: correctlyFlipped,
      percentCorrect: correctlyFlipped == 0 ? 0 : Math.round(correctlyFlipped / bitsToFlip * 100)
    };
  }

  onLevelOver(reason = null, calculatedScore = null) {
    this.props.setLevelInProgress(false);
    if (reason == levelOverReasons.LEVEL_SOLUTION_MET || reason == levelOverReasons.LEVEL_TIME_ELAPSED) {
      if (!calculatedScore) {
        calculatedScore = this.calculateScore();
      }
      // Scoring.
      const key = getKey(calculatedScore.levelID);
      if (key) {
        persistentStore.get(key)
          .then(res => {
            // New score
            if (!res) {
              persistentStore.save(key, calculatedScore)
                .then(this.props.navigation.navigate(this.props.levelOverRoute));
            }
            // New high score
            else if (res.percentCorrect < calculatedScore.percentCorrect) {
              persistentStore.update(key, calculatedScore)
                .then(this.props.navigation.navigate(this.props.levelOverRoute));
            }
            // New score but not higher than high score
            else {
              this.props.navigation.navigate(this.props.levelOverRoute);
            }
          })
          .catch(error => {
            console.error(error.message);
          });
      }
    }
    else {
      this.props.navigation.navigate(this.props.levelOverRoute);
    }
  }

  onLevelExit() {
    this.props.setLevelInProgress(false);
    this.props.navigation.navigate(this.props.levelExitRoute);
  }

  onLevelRestart() {
    this.props.setLevelInProgress(false);
    this.props.navigation.navigate(this.props.levelRestartRoute);
  }

  componentDidMount() {
    this.props.resetLevelCurrentBoardState();
    this.props.setLevelInProgress(true);
  }

  render() {
    return (
      <View style={gc.wrapperLevel}>
        <LevelHUDTop
          levelTimeSeconds={this.props.levelTimeSeconds}
          onLevelOver={this.onLevelOver}
          onLevelExit={this.onLevelExit}
          onLevelRestart={this.onLevelRestart}
          levelInProgress={this.props.levelInProgress}
        />
        <BitBoard
          playable={true}
          calculateScore={this.calculateScore}
          onLevelOver={this.onLevelOver}
          levelInProgress={this.props.levelInProgress}
          levelCurrentBoardState={this.props.levelCurrentBoardState}
          levelCurrentBoardColorState={this.props.levelCurrentBoardColorState}
          updateLevelCurrentBoardState={this.props.updateLevelCurrentBoardState}
        />
        <LevelHUDBottom
          updateLevelCurrentBoardColorState={this.props.updateLevelCurrentBoardColorState}
          levelCurrentBoardColorState={this.props.levelCurrentBoardColorState}
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
  levelSolutionBoardState: PropTypes.array,
  navigation: PropTypes.object,
  // Store props (state)
  levelInProgress: PropTypes.bool,
  levelCurrentBoardState: PropTypes.array,
  levelCurrentBoardColorState: PropTypes.string,
  // Store props (dispatch)
  setLevelInProgress: PropTypes.func,
  resetLevelCurrentBoardState: PropTypes.func,
  updateLevelCurrentBoardState: PropTypes.func,
  updateLevelCurrentBoardColorState: PropTypes.func,
};

export const levelOverReasons = {
  LEVEL_TIME_ELAPSED: 'LEVEL_TIME_ELAPSED',
  LEVEL_SOLUTION_MET: 'LEVEL_SOLUTION_MET'
}