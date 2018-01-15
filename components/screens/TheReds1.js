import React, { Component } from 'react';
import gc from '../../config/game-config';
import sbs from '../../config/solution-board-states';
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
    this.id = gc.level1ID;
    this.levelRestartRoute = 'Level1Intro';
    this.levelSolutionBoardState = sbs.level1;
  }

  render() {
    return sharedRenderer(this);
  }
}

export class Level2 extends Component {
  constructor(props) {
    super(props);
    this.id = gc.level2ID;
    this.levelRestartRoute = 'Level2Intro';
    this.levelSolutionBoardState = sbs.level2;
  }

  render() {
    return sharedRenderer(this);
  }
}

export class Level3 extends Component {
  constructor(props) {
    super(props);
    this.id = gc.level3ID;
    this.levelRestartRoute = 'Level3Intro';
    this.levelSolutionBoardState = sbs.level3;
  }

  render() {
    return sharedRenderer(this);
  }
}

export class Level4 extends Component {
  constructor(props) {
    super(props);
    this.id = gc.level4ID;
    this.levelRestartRoute = 'Level4Intro';
    this.levelSolutionBoardState = sbs.level4;
  }

  render() {
    return sharedRenderer(this);
  }
}

export class Level5 extends Component {
  constructor(props) {
    super(props);
    this.id = gc.level5ID;
    this.levelRestartRoute = 'Level5Intro';
    this.levelSolutionBoardState = sbs.level5;
  }

  render() {
    return sharedRenderer(this);
  }
}

export class Level6 extends Component {
  constructor(props) {
    super(props);
    this.id = gc.level6ID;
    this.levelRestartRoute = 'Level6Intro';
    this.levelSolutionBoardState = sbs.level6;
  }

  render() {
    return sharedRenderer(this);
  }
}

export class Level7 extends Component {
  constructor(props) {
    super(props);
    this.id = gc.level7ID;
    this.levelRestartRoute = 'Level7Intro';
    this.levelSolutionBoardState = sbs.level7;
  }

  render() {
    return sharedRenderer(this);
  }
}

export class Level8 extends Component {
  constructor(props) {
    super(props);
    this.id = gc.level8ID;
    this.levelRestartRoute = 'Level8Intro';
    this.levelSolutionBoardState = sbs.level8;
  }

  render() {
    return sharedRenderer(this);
  }
}

export class Level9 extends Component {
  constructor(props) {
    super(props);
    this.id = gc.level9ID;
    this.levelRestartRoute = 'Level9Intro';
    this.levelSolutionBoardState = sbs.level9;
  }

  render() {
    return sharedRenderer(this);
  }
}

export class Level10 extends Component {
  constructor(props) {
    super(props);
    this.id = gc.level10ID;
    this.levelRestartRoute = 'Level10Intro';
    this.levelSolutionBoardState = sbs.level10;
  }

  render() {
    return sharedRenderer(this);
  }
}
