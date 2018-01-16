import React, { Component } from 'react';
import gc from '../../config/game-config';
import l from '../../config/levels';
import { calculateLevelSeconds } from '../../utils.js';
import LevelContainer from '../../containers/LevelContainer';

const sharedLevelConfig = {
  levelOverRoute: 'TheReds1LevelSelect',
  levelExitRoute: 'TheReds1LevelSelect'
}

const sharedRenderer = (component) => {
  return (
    <LevelContainer
      levelID={component.id}
      levelRestartRoute={component.levelRestartRoute}
      levelSolutionBoardState={component.levelSolutionBoardState}
      levelTimeSeconds = {calculateLevelSeconds(component.levelSolutionBoardState, gc.beginnerLevelDivisor)}
      navigation={component.props.navigation}
      {...sharedLevelConfig}
      />
  );
}

export class Level1 extends Component {
  constructor(props) {
    super(props);
    this.id = l.l1.id;
    this.levelRestartRoute = 'Level1Intro';
    this.levelSolutionBoardState = l.l1.solution;
  }

  render() {
    return sharedRenderer(this);
  }
}

export class Level2 extends Component {
  constructor(props) {
    super(props);
    this.id = l.l2.id;
    this.levelRestartRoute = 'Level2Intro';
    this.levelSolutionBoardState = l.l2.solution;
  }

  render() {
    return sharedRenderer(this);
  }
}

export class Level3 extends Component {
  constructor(props) {
    super(props);
    this.id = l.l3.id;
    this.levelRestartRoute = 'Level3Intro';
    this.levelSolutionBoardState = l.l3.solution;
  }

  render() {
    return sharedRenderer(this);
  }
}

export class Level4 extends Component {
  constructor(props) {
    super(props);
    this.id = l.l4.id;
    this.levelRestartRoute = 'Level4Intro';
    this.levelSolutionBoardState = l.l4.solution;
  }

  render() {
    return sharedRenderer(this);
  }
}

export class Level5 extends Component {
  constructor(props) {
    super(props);
    this.id = l.l5.id;
    this.levelRestartRoute = 'Level5Intro';
    this.levelSolutionBoardState = l.l5.solution;
  }

  render() {
    return sharedRenderer(this);
  }
}

export class Level6 extends Component {
  constructor(props) {
    super(props);
    this.id = l.l6.id;
    this.levelRestartRoute = 'Level6Intro';
    this.levelSolutionBoardState = l.l6.solution;
  }

  render() {
    return sharedRenderer(this);
  }
}

export class Level7 extends Component {
  constructor(props) {
    super(props);
    this.id = l.l7.id;
    this.levelRestartRoute = 'Level7Intro';
    this.levelSolutionBoardState = l.l7.solution;
  }

  render() {
    return sharedRenderer(this);
  }
}

export class Level8 extends Component {
  constructor(props) {
    super(props);
    this.id = l.l8.id;
    this.levelRestartRoute = 'Level8Intro';
    this.levelSolutionBoardState = l.l8.solution;
  }

  render() {
    return sharedRenderer(this);
  }
}

export class Level9 extends Component {
  constructor(props) {
    super(props);
    this.id = l.l9.id;
    this.levelRestartRoute = 'Level9Intro';
    this.levelSolutionBoardState = l.l9.solution;
  }

  render() {
    return sharedRenderer(this);
  }
}

export class Level10 extends Component {
  constructor(props) {
    super(props);
    this.id = l.l10.id;
    this.levelRestartRoute = 'Level10Intro';
    this.levelSolutionBoardState = l.l10.solution;
  }

  render() {
    return sharedRenderer(this);
  }
}
