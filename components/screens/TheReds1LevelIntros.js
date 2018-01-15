import React, { Component } from 'react';
import LevelIntro from '../game/LevelIntro';
import sbs from '../../config/solution-board-states';
import {resetNavigation} from '../../utils'

export class Level1Intro extends Component {
  render() {
    return (
      <LevelIntro
        levelSolutionBoardState={sbs.level1}
        startLevel={() => {resetNavigation('Level1', this.props.navigation)}}
      />
    );
  }
}

export class Level2Intro extends Component {
  render() {
    return (
      <LevelIntro
        levelSolutionBoardState={sbs.level2}
        startLevel={() => {resetNavigation('Level2', this.props.navigation)}}
      />
    );
  }
}

export class Level3Intro extends Component {
  render() {
    return (
      <LevelIntro
        levelSolutionBoardState={sbs.level3}
        startLevel={() => {resetNavigation('Level3', this.props.navigation)}}
      />
    );
  }
}

export class Level4Intro extends Component {
  render() {
    return (
      <LevelIntro
        levelSolutionBoardState={sbs.level4}
        startLevel={() => {resetNavigation('Level4', this.props.navigation)}}
      />
    );
  }
}

export class Level5Intro extends Component {
  render() {
    return (
      <LevelIntro
        levelSolutionBoardState={sbs.level5}
        startLevel={() => {resetNavigation('Level5', this.props.navigation)}}
      />
    );
  }
}

export class Level6Intro extends Component {
  render() {
    return (
      <LevelIntro
        levelSolutionBoardState={sbs.level6}
        startLevel={() => {resetNavigation('Level6', this.props.navigation)}}
      />
    );
  }
}

export class Level7Intro extends Component {
  render() {
    return (
      <LevelIntro
        levelSolutionBoardState={sbs.level7}
        startLevel={() => {resetNavigation('Level7', this.props.navigation)}}
      />
    );
  }
}

export class Level8Intro extends Component {
  render() {
    return (
      <LevelIntro
        levelSolutionBoardState={sbs.level8}
        startLevel={() => {resetNavigation('Level8', this.props.navigation)}}
      />
    );
  }
}

export class Level9Intro extends Component {
  render() {
    return (
      <LevelIntro
        levelSolutionBoardState={sbs.level9}
        startLevel={() => {resetNavigation('Level9', this.props.navigation)}}
      />
    );
  }
}

export class Level10Intro extends Component {
  render() {
    return (
      <LevelIntro
        levelSolutionBoardState={sbs.level10}
        startLevel={() => {resetNavigation('Level10', this.props.navigation)}}
      />
    );
  }
}