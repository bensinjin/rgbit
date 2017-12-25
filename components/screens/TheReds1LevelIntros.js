import React, { Component } from 'react';
import LevelIntro from '../game/LevelIntro';
import * as TR1 from './TheReds1';
import gc from '../../config/game-config';
import {resetNavigation} from '../../utils'

export class Level1Intro extends Component {
  render() {
    return (
      <LevelIntro
        solutionBoardState={TR1.Level1.solutionBoardState}
        startLevel={() => {resetNavigation('Level1', this.props.navigation)}}
      />
    );
  }
}

export class Level2Intro extends Component {
  render() {
    return (
      <LevelIntro
        solutionBoardState={TR1.Level2.solutionBoardState}
        startLevel={() => {resetNavigation('Level2', this.props.navigation)}}
      />
    );
  }
}

export class Level3Intro extends Component {
  render() {
    return (
      <LevelIntro
        solutionBoardState={TR1.Level3.solutionBoardState}
        startLevel={() => {resetNavigation('Level3', this.props.navigation)}}
      />
    );
  }
}

export class Level4Intro extends Component {
  render() {
    return (
      <LevelIntro
        solutionBoardState={TR1.Level4.solutionBoardState}
        startLevel={() => {resetNavigation('Level4', this.props.navigation)}}
      />
    );
  }
}

export class Level5Intro extends Component {
  render() {
    return (
      <LevelIntro
        solutionBoardState={TR1.Level5.solutionBoardState}
        startLevel={() => {resetNavigation('Level5', this.props.navigation)}}
      />
    );
  }
}

export class Level6Intro extends Component {
  render() {
    return (
      <LevelIntro
        solutionBoardState={TR1.Level6.solutionBoardState}
        startLevel={() => {resetNavigation('Level6', this.props.navigation)}}
      />
    );
  }
}