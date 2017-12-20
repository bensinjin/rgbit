import React, { Component } from 'react';
import Level from '../game/Level';
import gc from '../../config/game-config';
import { initialBoardState } from '../../utils.js';

export default class Level3 extends Component {
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
    this.props.navigation.navigate('Level3Intro');
  }

  _onLevelSelect() {
    this.props.navigation.navigate('Home');
  }

  render() {
    return (
      <Level
        levelTimeSeconds={gc.level3Time}
        initialBoardState={initialBoardState()}
        solutionBoardState={Level3.solutionBoardState}
        onLevelOver={this._onLevelOver}
        onLevelRestart={this._onLevelRestart}
        onLevelSelect={this._onLevelSelect} />
    );
  }
}