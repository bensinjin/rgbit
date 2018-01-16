import React, { Component } from 'react';
import LevelIntro from '../game/LevelIntro';
import l from '../../config/levels';
import { resetNavigation } from '../../utils';

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