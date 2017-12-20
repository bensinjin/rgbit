import React, { Component } from 'react';
import LevelIntro from '../game/LevelIntro';
import { Level1, Level2, Level3} from './LevelsBeginner';
import gc from '../../config/game-config';
import {resetNavigation} from '../../utils'

export class Level1Intro extends Component {
  render() {
    return (
      <LevelIntro
        solutionBoardState={Level1.solutionBoardState}
        startLevel={() => {resetNavigation('Level1', this.props.navigation)}}
      />
    );
  }
}

export class Level2Intro extends Component {
  render() {
    return (
      <LevelIntro
        solutionBoardState={Level2.solutionBoardState}
        startLevel={() => {resetNavigation('Level2', this.props.navigation)}}
      />
    );
  }
}

export class Level3Intro extends Component {
  render() {
    return (
      <LevelIntro
        solutionBoardState={Level3.solutionBoardState}
        startLevel={() => {resetNavigation('Level3', this.props.navigation)}}
      />
    );
  }
}