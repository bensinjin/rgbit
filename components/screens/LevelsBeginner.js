import React, { Component } from 'react';
import Level from '../game/Level';
import gc from '../../config/game-config';
import { initialBoardState, onLevelOver, onLevelRestart, onLevelSelect } from '../../utils.js';

export class Level1 extends Component {
  static id = 1;
  static solutionBoardState = [
    ['W', 'G', 'R', 'G', 'W'],
    ['W', 'G', 'R', 'G', 'W'],
    ['W', 'G', 'R', 'G', 'W'],
    ['W', 'G', 'R', 'G', 'W'],
    ['W', 'G', 'R', 'G', 'W'],
    ['W', 'G', 'R', 'G', 'W'],
    ['W', 'G', 'R', 'G', 'W']
  ];

  render() {
    return (
      <Level
        levelTimeSeconds={gc.level1Time}
        initialBoardState={initialBoardState()}
        solutionBoardState={Level1.solutionBoardState}
        onLevelOver={() => {onLevelOver(this.props.navigation, 'Home');}}
        onLevelRestart={() => {onLevelRestart(this.props.navigation, 'Level1Intro');}}
        onLevelSelect={() => {onLevelSelect(this.props.navigation,'Home');}} />
    );
  }
}

export class Level2 extends Component {
  static id = 2;
  static solutionBoardState = [
    ['W', 'R', 'G', 'B', 'W'],
    ['W', 'R', 'G', 'B', 'W'],
    ['W', 'R', 'G', 'B', 'W'],
    ['W', 'R', 'G', 'B', 'W'],
    ['W', 'R', 'G', 'B', 'W'],
    ['W', 'R', 'G', 'B', 'W'],
    ['W', 'R', 'G', 'B', 'W']
  ];

  render() {
    return (
      <Level
        levelTimeSeconds={gc.level2Time}
        initialBoardState={initialBoardState()}
        solutionBoardState={Level2.solutionBoardState}
        onLevelOver={() => {onLevelOver(this.props.navigation, 'Home');}}
        onLevelRestart={() => {onLevelRestart(this.props.navigation, 'Level2Intro');}}
        onLevelSelect={() => {onLevelSelect(this.props.navigation,'Home');}} />
    );
  }
}

export class Level3 extends Component {
  static id = 3;
  static solutionBoardState = [
    ['W', 'W', 'R', 'W', 'W'],
    ['W', 'R', 'B', 'R', 'W'],
    ['R', 'B', 'G', 'B', 'R'],
    ['W', 'R', 'B', 'R', 'W'],
    ['W', 'W', 'R', 'W', 'W'],
    ['W', 'G', 'R', 'G', 'W'],
    ['G', 'G', 'G', 'G', 'G']
  ];

  render() {
    return (
      <Level
        levelTimeSeconds={gc.level3Time}
        initialBoardState={initialBoardState()}
        solutionBoardState={Level3.solutionBoardState}
        onLevelOver={() => {onLevelOver(this.props.navigation, 'Home');}}
        onLevelRestart={() => {onLevelRestart(this.props.navigation, 'Level3Intro');}}
        onLevelSelect={() => {onLevelSelect(this.props.navigation,'Home');}} />
    );
  }
}