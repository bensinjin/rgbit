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
    this.id = 1;
    this.levelRestartRoute = 'Level1Intro';
    this.levelSolutionBoardState = sbs.l1;
  }
  render() {
    return sharedRenderer(this);
  }
}

//export class Level2 extends Component {
//  static id = 2;
//  static solutionBoardState = [
//    ['R', 'R', 'W', 'B', 'B'],
//    ['R', 'W', 'B', 'B', 'W'],
//    ['W', 'B', 'B', 'W', 'R'],
//    ['B', 'B', 'W', 'R', 'R'],
//    ['B', 'W', 'R', 'R', 'W'],
//    ['W', 'R', 'R', 'W', 'B'],
//    ['R', 'R', 'W', 'B', 'B']
//  ];
//
//  constructor() {
//
//  }
//
//  render() {
//    return (
//      <LevelContainer
//        levelID={Level2.id}
//        levelRestartRoute={'Level2Intro'}
//        levelTimeSeconds={calculateLevelSeconds(Level2.solutionBoardState, gc.beginnerLevelDivisor)}
//        navigation={this.props.navigation}
//        solutionBoardState={Level2.solutionBoardState}
//        {...sharedLevelConfig}
//        />
//    );
//  }
//}
//
//export class Level3 extends Component {
//  static id = 3;
//  static solutionBoardState = [
//    ['W', 'W', 'W', 'W', 'W'],
//    ['B', 'R', 'R', 'R', 'B'],
//    ['B', 'R', 'R', 'R', 'B'],
//    ['B', 'R', 'R', 'R', 'B'],
//    ['W', 'B', 'R', 'B', 'W'],
//    ['W', 'W', 'B', 'W', 'W'],
//    ['W', 'B', 'B', 'B', 'W']
//  ];
//
//  render() {
//    return (
//      <LevelContainer
//        levelID={Level2.id}
//        levelRestartRoute={'Level2Intro'}
//        levelTimeSeconds={calculateLevelSeconds(Level2.solutionBoardState, gc.beginnerLevelDivisor)}
//        navigation={this.props.navigation}
//        solutionBoardState={Level2.solutionBoardState}
//        {...sharedLevelConfig}
//        />
//    );
//  }
//}
//
//export class Level4 extends Component {
//  static id = 4;
//  static solutionBoardState = [
//    ['R', 'R', 'R', 'W', 'W'],
//    ['R', 'R', 'R', 'W', 'W'],
//    ['R', 'R', 'G', 'W', 'W'],
//    ['W', 'W', 'W', 'G', 'W'],
//    ['G', 'W', 'G', 'W', 'W'],
//    ['W', 'G', 'G', 'G', 'W'],
//    ['G', 'W', 'W', 'W', 'W']
//  ];
//
//  render() {
//    return (
//      <Level
//        levelTimeSeconds={calculateLevelSeconds(Level4.solutionBoardState, gc.beginnerLevelDivisor)}
//        initialBoardState={initialBoardState()}
//        solutionBoardState={Level4.solutionBoardState}
//        navigation={this.props.navigation}
//        introRoute={'Level4Intro'}
//        levelSelectRoute={'TheReds1LevelSelect'}
//        levelOverRoute={'TheReds1LevelSelect'}
//        levelID={Level4.id}/>
//    );
//  }
//}
//
//export class Level5 extends Component {
//  static id = 5;
//  static solutionBoardState = [
//    ['W', 'W', 'W', 'W', 'W'],
//    ['W', 'B', 'B', 'B', 'W'],
//    ['B', 'G', 'G', 'G', 'B'],
//    ['B', 'G', 'R', 'G', 'B'],
//    ['B', 'G', 'G', 'G', 'B'],
//    ['W', 'B', 'B', 'B', 'W'],
//    ['W', 'W', 'W', 'W', 'W']
//  ];
//
//  render() {
//    return (
//      <Level
//        levelTimeSeconds={calculateLevelSeconds(Level5.solutionBoardState, gc.beginnerLevelDivisor)}
//        initialBoardState={initialBoardState()}
//        solutionBoardState={Level5.solutionBoardState}
//        navigation={this.props.navigation}
//        introRoute={'Level5Intro'}
//        levelSelectRoute={'TheReds1LevelSelect'}
//        levelOverRoute={'TheReds1LevelSelect'}
//        levelID={Level5.id}/>
//    );
//  }
//}
//
//export class Level6 extends Component {
//  static id = 6;
//  static solutionBoardState = [
//    ['W', 'W', 'R', 'W', 'W'],
//    ['B', 'R', 'R', 'R', 'G'],
//    ['B', 'B', 'R', 'G', 'G'],
//    ['B', 'B', 'R', 'G', 'G'],
//    ['G', 'B', 'R', 'G', 'B'],
//    ['G', 'G', 'R', 'B', 'B'],
//    ['G', 'G', 'R', 'B', 'B']
//  ];
//
//  render() {
//    return (
//      <Level
//        levelTimeSeconds={calculateLevelSeconds(Level6.solutionBoardState, gc.beginnerLevelDivisor)}
//        initialBoardState={initialBoardState()}
//        solutionBoardState={Level6.solutionBoardState}
//        navigation={this.props.navigation}
//        introRoute={'Level6Intro'}
//        levelSelectRoute={'TheReds1LevelSelect'}
//        levelOverRoute={'TheReds1LevelSelect'}
//        levelID={Level6.id}/>
//    );
//  }
//}
//
//export class Level7 extends Component {
//  static id = 7;
//  static solutionBoardState = [
//    ['B', 'R', 'B', 'B', 'R'],
//    ['R', 'B', 'R', 'R', 'B'],
//    ['B', 'R', 'B', 'B', 'R'],
//    ['B', 'B', 'B', 'B', 'R'],
//    ['B', 'R', 'R', 'R', 'R'],
//    ['B', 'R', 'R', 'R', 'R'],
//    ['R', 'B', 'R', 'B', 'R']
//  ];
//
//  render() {
//    return (
//      <Level
//        levelTimeSeconds={calculateLevelSeconds(Level7.solutionBoardState, gc.beginnerLevelDivisor)}
//        initialBoardState={initialBoardState()}
//        solutionBoardState={Level7.solutionBoardState}
//        navigation={this.props.navigation}
//        introRoute={'Level7Intro'}
//        levelSelectRoute={'TheReds1LevelSelect'}
//        levelOverRoute={'TheReds1LevelSelect'}
//        levelID={Level7.id}/>
//    );
//  }
//}
//
//export class Level8 extends Component {
//  static id = 8;
//  static solutionBoardState = [
//    ['B', 'B', 'R', 'B', 'B'],
//    ['R', 'B', 'R', 'B', 'R'],
//    ['B', 'R', 'B', 'R', 'B'],
//    ['R', 'B', 'R', 'B', 'R'],
//    ['B', 'R', 'R', 'R', 'B'],
//    ['B', 'B', 'R', 'B', 'B'],
//    ['B', 'G', 'G', 'G', 'B']
//  ];
//
//  render() {
//    return (
//      <Level
//        levelTimeSeconds={calculateLevelSeconds(Level8.solutionBoardState, gc.beginnerLevelDivisor)}
//        initialBoardState={initialBoardState()}
//        solutionBoardState={Level8.solutionBoardState}
//        navigation={this.props.navigation}
//        introRoute={'Level8Intro'}
//        levelSelectRoute={'TheReds1LevelSelect'}
//        levelOverRoute={'TheReds1LevelSelect'}
//        levelID={Level8.id}/>
//    );
//  }
//}
//
//export class Level9 extends Component {
//  static id = 9;
//  static solutionBoardState = [
//    ['B', 'B', 'B', 'R', 'R'],
//    ['R', 'R', 'B', 'R', 'R'],
//    ['R', 'R', 'B', 'G', 'B'],
//    ['G', 'B', 'R', 'R', 'G'],
//    ['B', 'G', 'R', 'R', 'G'],
//    ['B', 'G', 'B', 'G', 'B'],
//    ['G', 'B', 'B', 'B', 'G']
//  ];
//
//  render() {
//    return (
//      <Level
//        levelTimeSeconds={calculateLevelSeconds(Level9.solutionBoardState, gc.beginnerLevelDivisor)}
//        initialBoardState={initialBoardState()}
//        solutionBoardState={Level9.solutionBoardState}
//        navigation={this.props.navigation}
//        introRoute={'Level9Intro'}
//        levelSelectRoute={'TheReds1LevelSelect'}
//        levelOverRoute={'TheReds1LevelSelect'}
//        levelID={Level9.id}/>
//    );
//  }
//}
//
//export class Level10 extends Component {
//  static id = 10;
//  static solutionBoardState = [
//    ['W', 'W', 'R', 'W', 'W'],
//    ['W', 'W', 'R', 'W', 'R'],
//    ['G', 'W', 'G', 'W', 'G'],
//    ['G', 'G', 'G', 'W', 'G'],
//    ['G', 'G', 'G', 'W', 'G'],
//    ['B', 'B', 'B', 'W', 'B'],
//    ['B', 'B', 'B', 'B', 'B']
//  ];
//
//  render() {
//    return (
//      <Level
//        levelTimeSeconds={calculateLevelSeconds(Level10.solutionBoardState, gc.beginnerLevelDivisor)}
//        initialBoardState={initialBoardState()}
//        solutionBoardState={Level10.solutionBoardState}
//        navigation={this.props.navigation}
//        introRoute={'Level10Intro'}
//        levelSelectRoute={'TheReds1LevelSelect'}
//        levelOverRoute={'TheReds1LevelSelect'}
//        levelID={Level10.id}/>
//    );
//  }
//}