import React, { Component } from 'react';
import LevelIntro from '../game/LevelIntro';
import l from '../../config/levels';
import { resetNavigation } from '../../utils';
import { instantDeathLevelRenderer } from '../../utils.js';

export class Level1IDIntro extends Component {
  render() {
    return (
      <LevelIntro
        levelSolutionBoardState={l.l1.solution}
        startLevel={() => resetNavigation('Level1ID', this.props.navigation)}
      />
    );
  }
}
export class Level1ID extends Component {
  constructor(props) {
    super(props);
    this.levelSolutionBoardState = l.l1.solution;
  }
  render() {
    return instantDeathLevelRenderer(this);
  }
}

export class Level2IDIntro extends Component {
  render() {
    return (
      <LevelIntro
        levelSolutionBoardState={l.l2.solution}
        startLevel={() => resetNavigation('Level2ID', this.props.navigation)}
      />
    );
  }
}
export class Level2ID extends Component {
  constructor(props) {
    super(props);
    this.levelSolutionBoardState = l.l2.solution;
  }
  render() {
    return instantDeathLevelRenderer(this);
  }
}