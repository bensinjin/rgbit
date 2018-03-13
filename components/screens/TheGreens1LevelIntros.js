import React, { Component } from 'react';
import LevelIntro from '../game/LevelIntro';
import l from '../../config/levels';
import {resetNavigation} from '../../utils'

export class Level11Intro extends Component {
  render() {
    return (
      <LevelIntro
        levelSolutionBoardState={l.l11.solution}
        startLevel={() => {resetNavigation('Level11', this.props.navigation)}}
      />
    );
  }
}