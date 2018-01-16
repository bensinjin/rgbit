import React, { Component } from 'react';
import LevelIntro from '../game/LevelIntro';
import l from '../../config/levels';
import {resetNavigation} from '../../utils'

export class Level1Intro extends Component {
  render() {
    return (
      <LevelIntro
        levelSolutionBoardState={l.l1.solution}
        startLevel={() => {resetNavigation('Level1', this.props.navigation)}}
      />
    );
  }
}

export class Level2Intro extends Component {
  render() {
    return (
      <LevelIntro
        levelSolutionBoardState={l.l2.solution}
        startLevel={() => {resetNavigation('Level2', this.props.navigation)}}
      />
    );
  }
}

export class Level3Intro extends Component {
  render() {
    return (
      <LevelIntro
        levelSolutionBoardState={l.l3.solution}
        startLevel={() => {resetNavigation('Level3', this.props.navigation)}}
      />
    );
  }
}

export class Level4Intro extends Component {
  render() {
    return (
      <LevelIntro
        levelSolutionBoardState={l.l4.solution}
        startLevel={() => {resetNavigation('Level4', this.props.navigation)}}
      />
    );
  }
}

export class Level5Intro extends Component {
  render() {
    return (
      <LevelIntro
        levelSolutionBoardState={l.l5.solution}
        startLevel={() => {resetNavigation('Level5', this.props.navigation)}}
      />
    );
  }
}

export class Level6Intro extends Component {
  render() {
    return (
      <LevelIntro
        levelSolutionBoardState={l.l6.solution}
        startLevel={() => {resetNavigation('Level6', this.props.navigation)}}
      />
    );
  }
}

export class Level7Intro extends Component {
  render() {
    return (
      <LevelIntro
        levelSolutionBoardState={l.l7.solution}
        startLevel={() => {resetNavigation('Level7', this.props.navigation)}}
      />
    );
  }
}

export class Level8Intro extends Component {
  render() {
    return (
      <LevelIntro
        levelSolutionBoardState={l.l8.solution}
        startLevel={() => {resetNavigation('Level8', this.props.navigation)}}
      />
    );
  }
}

export class Level9Intro extends Component {
  render() {
    return (
      <LevelIntro
        levelSolutionBoardState={l.l9.solution}
        startLevel={() => {resetNavigation('Level9', this.props.navigation)}}
      />
    );
  }
}

export class Level10Intro extends Component {
  render() {
    return (
      <LevelIntro
        levelSolutionBoardState={l.l10.solution}
        startLevel={() => {resetNavigation('Level10', this.props.navigation)}}
      />
    );
  }
}