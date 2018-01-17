import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import persistentStore from 'react-native-simple-store';
import BitBoard from '../game/BitBoard';
import LevelHUDTop from '../game/LevelHUDTop';
import LevelHUDBottom from '../game/LevelHUDBottom';
import gc from '../../config/game-config';
import {getKey} from '../../utils.js';
import { levelOverReasons } from './Level';


export default class InstantDeathLevel extends Component {

  constructor(props) {
    super(props);
    this.onLevelOver = this.onLevelOver.bind(this);
    this.onLevelExit = this.onLevelExit.bind(this);
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
      // We only need to store a single object for ID scores.
      levelID: gc.instantDeathScoreObjectID,
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
            this.props.dequeueInstantDeathLevel();
            const nextLevelRoute = this.props.instantDeathLevelQueue[0];
            // New score
            if (!res) {
              persistentStore.save(key, calculatedScore)
                .then(res => this.props.navigation.navigate(nextLevelRoute));
            }
            // Existing score, add it to calculated score
            else {
              calculatedScore.bitsCorrectlyFlipped += res.bitsCorrectlyFlipped;
              persistentStore.update(key, calculatedScore)
                .then(this.props.navigation.navigate(nextLevelRoute));
            }
          })
          .catch(error => {
            console.error(error.message);
          });
      }
    }
    else {
      this.props.navigation.navigate(this.props.levelExitRoute);
    }
  }

  onLevelExit() {
    this.props.setLevelInProgress(false);
    this.props.navigation.navigate(this.props.levelExitRoute);
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

InstantDeathLevel.propTypes = {
  levelExitRoute: PropTypes.string,
  levelTimeSeconds: PropTypes.number,
  levelSolutionBoardState: PropTypes.array,
  navigation: PropTypes.object,
  // Store props (state)
  levelInProgress: PropTypes.bool,
  levelCurrentBoardState: PropTypes.array,
  levelCurrentBoardColorState: PropTypes.string,
  instantDeathLevelQueue: PropTypes.array,
  // Store props (dispatch)
  setLevelInProgress: PropTypes.func,
  resetLevelCurrentBoardState: PropTypes.func,
  updateLevelCurrentBoardState: PropTypes.func,
  updateLevelCurrentBoardColorState: PropTypes.func,
  dequeueInstantDeathLevel: PropTypes.func,
  queueInstantDeathLevel: PropTypes.func
};