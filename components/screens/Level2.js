import React, { Component } from 'react';
import Level from '../game/Level';
import gc from '../../config/game-config';
import { initialBoardState } from '../../utils.js';

export default class Level2 extends Component {
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

  constructor(props) {
    super(props);
    this._onLevelOver = this._onLevelOver.bind(this);
    this._onLevelRestart = this._onLevelRestart.bind(this);
    this._onLevelSelect = this._onLevelSelect.bind(this);
  }

  _onLevelOver(scoreResults) {
    alert(scoreResults.percentCorrect + '%');
    this.props.navigation.navigate('Home');
  }

  _onLevelRestart() {
    this.props.navigation.navigate('Level2Intro');
  }

  _onLevelSelect() {
    this.props.navigation.navigate('Home');
  }

  render() {
    return (
      <Level
        levelTimeSeconds={gc.level2Time}
        initialBoardState={initialBoardState()}
        solutionBoardState={Level2.solutionBoardState}
        onLevelOver={this._onLevelOver}
        onLevelRestart={this._onLevelRestart}
        onLevelSelect={this._onLevelSelect} />
    );
  }
}