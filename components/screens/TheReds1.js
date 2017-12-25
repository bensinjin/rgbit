import React, { Component } from 'react';
import Level from '../game/Level';
import gc from '../../config/game-config';
import { initialBoardState, calculateLevelSeconds } from '../../utils.js';

export class Level1 extends Component {
  static id = 1;
  static solutionBoardState = [
    ['W', 'W', 'W', 'B', 'R'],
    ['W', 'W', 'B', 'R', 'R'],
    ['W', 'B', 'R', 'R', 'R'],
    ['B', 'R', 'R', 'R', 'B'],
    ['R', 'R', 'R', 'B', 'W'],
    ['R', 'R', 'B', 'W', 'W'],
    ['R', 'B', 'W', 'W', 'W']
  ];

  render() {
    return (
      <Level
        levelTimeSeconds={calculateLevelSeconds(Level1.solutionBoardState, gc.beginnerLevelDivisor)}
        initialBoardState={initialBoardState()}
        solutionBoardState={Level1.solutionBoardState}
        navigation={this.props.navigation}
        introRoute={'Level1Intro'}
        levelSelectRoute={'TheReds1LevelSelect'}
        levelOverRoute={'TheReds1LevelSelect'}
        levelID={Level1.id}/>
    );
  }
}

export class Level2 extends Component {
  static id = 2;
  static solutionBoardState = [
    ['R', 'R', 'G', 'B', 'B'],
    ['G', 'R', 'G', 'B', 'G'],
    ['G', 'R', 'G', 'B', 'G'],
    ['R', 'R', 'G', 'B', 'B'],
    ['G', 'R', 'G', 'B', 'G'],
    ['G', 'R', 'G', 'B', 'G'],
    ['R', 'R', 'G', 'B', 'B']
  ];

  render() {
    return (
      <Level
        levelTimeSeconds={calculateLevelSeconds(Level2.solutionBoardState, gc.beginnerLevelDivisor)}
        initialBoardState={initialBoardState()}
        solutionBoardState={Level2.solutionBoardState}
        navigation={this.props.navigation}
        introRoute={'Level2Intro'}
        levelSelectRoute={'TheReds1LevelSelect'}
        levelOverRoute={'TheReds1LevelSelect'}
        levelID={Level2.id}/>
    );
  }
}

export class Level3 extends Component {
  static id = 3;
  static solutionBoardState = [
    ['W', 'W', 'R', 'W', 'W'],
    ['W', 'R', 'B', 'R', 'W'],
    ['R', 'B', 'G', 'B', 'R'],
    ['W', 'R', 'B', 'R', 'W'],
    ['W', 'W', 'R', 'W', 'W'],
    ['W', 'G', 'R', 'G', 'W'],
    ['G', 'G', 'G', 'G', 'G']
  ];

  render() {
    return (
      <Level
        levelTimeSeconds={calculateLevelSeconds(Level3.solutionBoardState, gc.beginnerLevelDivisor)}
        initialBoardState={initialBoardState()}
        solutionBoardState={Level3.solutionBoardState}
        navigation={this.props.navigation}
        introRoute={'Level3Intro'}
        levelSelectRoute={'TheReds1LevelSelect'}
        levelOverRoute={'TheReds1LevelSelect'}
        levelID={Level3.id}/>
    );
  }
}

export class Level4 extends Component {
  static id = 4;
  static solutionBoardState = [
    ['B', 'W', 'B', 'W', 'B'],
    ['B', 'B', 'B', 'B', 'B'],
    ['R', 'B', 'R', 'B', 'R'],
    ['R', 'R', 'R', 'R', 'R'],
    ['G', 'R', 'G', 'R', 'G'],
    ['G', 'G', 'G', 'G', 'G'],
    ['W', 'G', 'W', 'G', 'W']
  ];

  render() {
    return (
      <Level
        levelTimeSeconds={calculateLevelSeconds(Level4.solutionBoardState, gc.beginnerLevelDivisor)}
        initialBoardState={initialBoardState()}
        solutionBoardState={Level4.solutionBoardState}
        navigation={this.props.navigation}
        introRoute={'Level4Intro'}
        levelSelectRoute={'TheReds1LevelSelect'}
        levelOverRoute={'TheReds1LevelSelect'}
        levelID={Level4.id}/>
    );
  }
}

export class Level5 extends Component {
  static id = 5;
  static solutionBoardState = [
    ['B', 'R', 'G', 'R', 'B'],
    ['W', 'B', 'R', 'B', 'W'],
    ['W', 'W', 'B', 'W', 'W'],
    ['W', 'W', 'R', 'W', 'W'],
    ['W', 'W', 'G', 'W', 'W'],
    ['W', 'G', 'B', 'G', 'W'],
    ['G', 'B', 'R', 'B', 'G']
  ];

  render() {
    return (
      <Level
        levelTimeSeconds={calculateLevelSeconds(Level5.solutionBoardState, gc.intermediateLevelDivisor)}
        initialBoardState={initialBoardState()}
        solutionBoardState={Level5.solutionBoardState}
        navigation={this.props.navigation}
        introRoute={'Level5Intro'}
        levelSelectRoute={'TheReds1LevelSelect'}
        levelOverRoute={'TheReds1LevelSelect'}
        levelID={Level5.id}/>
    );
  }
}

export class Level6 extends Component {
  static id = 6;
  static solutionBoardState = [
    ['B', 'W', 'R', 'W', 'G'],
    ['W', 'R', 'W', 'B', 'W'],
    ['B', 'W', 'R', 'W', 'G'],
    ['W', 'B', 'W', 'G', 'W'],
    ['B', 'W', 'R', 'W', 'G'],
    ['W', 'G', 'W', 'R', 'W'],
    ['B', 'W', 'R', 'W', 'G']
  ];

  render() {
    return (
      <Level
        levelTimeSeconds={calculateLevelSeconds(Level6.solutionBoardState, gc.intermediateLevelDivisor)}
        initialBoardState={initialBoardState()}
        solutionBoardState={Level6.solutionBoardState}
        navigation={this.props.navigation}
        introRoute={'Level6Intro'}
        levelSelectRoute={'TheReds1LevelSelect'}
        levelOverRoute={'TheReds1LevelSelect'}
        levelID={Level6.id}/>
    );
  }
}