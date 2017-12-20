import React, { Component } from 'react';
import Level from '../game/Level';
import { resetNavigation } from '../../utils'

export default class Level1 extends Component {
  static id = 1;
  static solutionBoardState = [
    ['W', 'W', 'R', 'W', 'W'],
    ['W', 'W', 'R', 'W', 'W'],
    ['W', 'W', 'R', 'W', 'W'],
    ['W', 'W', 'R', 'W', 'W'],
    ['W', 'W', 'R', 'W', 'W'],
    ['W', 'W', 'R', 'W', 'W']
  ];

  constructor(props) {
    super(props);
    this._onLevelOver = this._onLevelOver.bind(this);
    this._onLevelRestart = this._onLevelRestart.bind(this);
    this._onLevelSelect = this._onLevelSelect.bind(this);
  }

  // TODO should probably create some sort
  // of class to describe this object.
  _onLevelOver(scoreResults) {
    alert(scoreResults.percentCorrect);
    this.props.navigation.navigate('Home');
  }

  _onLevelRestart() {
    this.props.navigation.navigate('Level1Intro');
  }

  _onLevelSelect() {
    this.props.navigation.navigate('Home');
  }

  render() {
    let initialBoardState = [
      ['W', 'W', 'W', 'W', 'W'],
      ['W', 'W', 'W', 'W', 'W'],
      ['W', 'W', 'W', 'W', 'W'],
      ['W', 'W', 'W', 'W', 'W'],
      ['W', 'W', 'W', 'W', 'W'],
      ['W', 'W', 'W', 'W', 'W']
    ];
    return (
      <Level
        levelTimeSeconds={5}
        initialBoardState={initialBoardState}
        solutionBoardState={Level1.solutionBoardState}
        onLevelOver={this._onLevelOver}
        onLevelRestart={this._onLevelRestart}
        onLevelSelect={this._onLevelSelect} />
    );
  }
}