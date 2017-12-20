import React, { Component } from 'react';
import Level from '../game/Level';
import gc from '../../config/game-config';
import { initialBoardState } from '../../utils.js';

export default class Level1 extends Component {
  static id = 1;
  static solutionBoardState = [
    ['G', 'G', 'R', 'G', 'G'],
    ['G', 'G', 'R', 'G', 'G'],
    ['G', 'G', 'R', 'G', 'G'],
    ['G', 'G', 'R', 'G', 'G'],
    ['G', 'G', 'R', 'G', 'G'],
    ['G', 'G', 'R', 'G', 'G'],
    ['G', 'G', 'R', 'G', 'G']
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
    this.props.navigation.navigate('Level1Intro');
  }

  _onLevelSelect() {
    this.props.navigation.navigate('Home');
  }

  render() {
    return (
      <Level
        levelTimeSeconds={gc.level1Time}
        initialBoardState={initialBoardState()}
        solutionBoardState={Level1.solutionBoardState}
        onLevelOver={this._onLevelOver}
        onLevelRestart={this._onLevelRestart}
        onLevelSelect={this._onLevelSelect} />
    );
  }
}