import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import persistentStore from 'react-native-simple-store';
import BitBoard from '../game/BitBoard';
import InstantDeathLevelHUDTop from '../game/InstantDeathLevelHUDTop';
import LevelHUDBottom from '../game/LevelHUDBottom';
import gc from '../../config/game-config';
import {getKey, levelScoreObject} from '../../utils.js';
import { levelOverReasons } from './Level';


export default class InstantDeathLevel extends Component {

  constructor(props) {
    super(props);
    this.onLevelOver = this.onLevelOver.bind(this);
    this.onLevelExit = this.onLevelExit.bind(this);
    this.calculateScore = this.calculateScore.bind(this);
    this.onBitPressed = this.onBitPressed.bind(this);
    this.calculatedSolution = this._calculateSolution();
  }

  _calculateSolution() {
    const calculatedSolution = [];
    for (const rowIndex in this.props.levelSolutionBoardState) {
      for (const colIndex in this.props.levelSolutionBoardState[rowIndex]) {
        const colorChar = this.props.levelSolutionBoardState[rowIndex][colIndex];
        // We're interested in the indexes of all
        // bits that are colored. White bits are excluded.
        if (colorChar != 'W') {
          calculatedSolution.push({rowIndex: rowIndex, colIndex: colIndex, colorChar: colorChar });
        }
      }
    }

    return calculatedSolution;
  }

  onBitPressed(rowIndex, colIndex) {
    if (this.props.levelCurrentBoardState[rowIndex][colIndex] ==
        this.props.levelSolutionBoardState[rowIndex][colIndex]) {
      this.props.incrementInstantDeathScoreDisplay();
    }
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
    const percentCorrect = correctlyFlipped == 0 ? 0 : Math.round(correctlyFlipped / bitsToFlip * 100)

    const score = levelScoreObject(
      gc.instantDeathScoreObjectID,
      bitsToFlip,
      correctlyFlipped,
      percentCorrect
    );

    return score;
  }

  navigateAfterLevel(score, nextLevelRoute) {
    this.setLevelInProgress(false);
    if (score.percentCorrect == 100) {
      this.props.navigation.navigate(nextLevelRoute);
    } else {
      this.onLevelExit();
    }
  }

  onLevelOver(reason = null, calculatedScore = null) {
    if (this.props.levelInProgress) {
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
              if (this.props.instantDeathLevelQueue) {
                const nextLevelRoute = this.props.instantDeathLevelQueue[0];
                // New score
                if (!res) {
                  persistentStore.save(key, calculatedScore)
                    .then(() => {
                      this.navigateAfterLevel(calculatedScore, nextLevelRoute);
                    });
                }
                // Existing score, update if new one is higher
                else if (calculatedScore.bitsCorrectlyFlipped > res.bitsCorrectlyFlipped) {
                  persistentStore.update(key, calculatedScore)
                    .then(() => {
                      this.navigateAfterLevel(calculatedScore, nextLevelRoute);
                    });
                }
              }
            })
            .catch(error => {
              console.error(error.message);
            });
        }
      }
    }

    this.onLevelExit();
  }

  onLevelExit() {
    this.props.resetInstantDeathScoreDisplay();
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
        <InstantDeathLevelHUDTop
          levelTimeSeconds={this.props.levelTimeSeconds}
          onLevelOver={this.onLevelOver}
          onLevelExit={this.onLevelExit}
          levelInProgress={this.props.levelInProgress}
          instantDeathScoreDisplay={this.props.instantDeathScoreDisplay}
        />
        <BitBoard
          playable={true}
          calculateScore={this.calculateScore}
          onLevelOver={this.onLevelOver}
          levelInProgress={this.props.levelInProgress}
          levelCurrentBoardState={this.props.levelCurrentBoardState}
          levelCurrentBoardColorState={this.props.levelCurrentBoardColorState}
          updateLevelCurrentBoardState={this.props.updateLevelCurrentBoardState}
          onBitPressed={this.onBitPressed}
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
  instantDeathScoreDisplay: PropTypes.number,
  // Store props (dispatch)
  setLevelInProgress: PropTypes.func,
  resetLevelCurrentBoardState: PropTypes.func,
  updateLevelCurrentBoardState: PropTypes.func,
  updateLevelCurrentBoardColorState: PropTypes.func,
  dequeueInstantDeathLevel: PropTypes.func,
  queueInstantDeathLevel: PropTypes.func,
  resetInstantDeathScoreDisplay: PropTypes.func,
  incrementInstantDeathScoreDisplay: PropTypes.func,
  decrementInstantDeathScoreDisplay: PropTypes.func,
};