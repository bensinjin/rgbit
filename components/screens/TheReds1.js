import React, { Component } from 'react';
import Level from '../game/Level';
import gc from '../../config/game-config';
import { initialBoardState, calculateLevelSeconds } from '../../utils.js';

export class Level1 extends Component {
  static id = 1;
  static solutionBoardState = [
    ['W', 'W', 'W', 'G', 'G'],
    ['W', 'R', 'G', 'R', 'W'],
    ['R', 'R', 'R', 'R', 'R'],
    ['R', 'R', 'R', 'R', 'R'],
    ['R', 'R', 'R', 'R', 'R'],
    ['R', 'R', 'R', 'R', 'R'],
    ['W', 'R', 'R', 'R', 'W']
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
    ['R', 'R', 'W', 'B', 'B'],
    ['R', 'W', 'B', 'B', 'W'],
    ['W', 'B', 'B', 'W', 'R'],
    ['B', 'B', 'W', 'R', 'R'],
    ['B', 'W', 'R', 'R', 'W'],
    ['W', 'R', 'R', 'W', 'B'],
    ['R', 'R', 'W', 'B', 'B']
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
    ['W', 'W', 'W', 'W', 'W'],
    ['B', 'R', 'R', 'R', 'B'],
    ['B', 'R', 'R', 'R', 'B'],
    ['B', 'R', 'R', 'R', 'B'],
    ['W', 'B', 'R', 'B', 'W'],
    ['W', 'W', 'B', 'W', 'W'],
    ['W', 'B', 'B', 'B', 'W']
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
    ['R', 'R', 'R', 'W', 'W'],
    ['R', 'R', 'R', 'W', 'W'],
    ['R', 'R', 'G', 'W', 'W'],
    ['W', 'W', 'W', 'G', 'W'],
    ['G', 'W', 'G', 'W', 'W'],
    ['W', 'G', 'G', 'G', 'W'],
    ['G', 'W', 'W', 'W', 'W']
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
    ['W', 'W', 'W', 'W', 'W'],
    ['W', 'B', 'B', 'B', 'W'],
    ['B', 'G', 'G', 'G', 'B'],
    ['B', 'G', 'R', 'G', 'B'],
    ['B', 'G', 'G', 'G', 'B'],
    ['W', 'B', 'B', 'B', 'W'],
    ['W', 'W', 'W', 'W', 'W']
  ];

  render() {
    return (
      <Level
        levelTimeSeconds={calculateLevelSeconds(Level5.solutionBoardState, gc.beginnerLevelDivisor)}
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
    ['W', 'W', 'R', 'W', 'W'],
    ['B', 'R', 'R', 'R', 'G'],
    ['B', 'B', 'R', 'G', 'G'],
    ['B', 'B', 'R', 'G', 'G'],
    ['G', 'B', 'R', 'G', 'B'],
    ['G', 'G', 'R', 'B', 'B'],
    ['G', 'G', 'R', 'B', 'B']
  ];

  render() {
    return (
      <Level
        levelTimeSeconds={calculateLevelSeconds(Level6.solutionBoardState, gc.beginnerLevelDivisor)}
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

export class Level7 extends Component {
  static id = 7;
  static solutionBoardState = [
    ['B', 'R', 'B', 'B', 'R'],
    ['R', 'B', 'R', 'R', 'B'],
    ['B', 'R', 'B', 'B', 'R'],
    ['B', 'B', 'B', 'B', 'R'],
    ['B', 'R', 'R', 'R', 'R'],
    ['B', 'R', 'R', 'R', 'R'],
    ['R', 'B', 'R', 'B', 'R']
  ];

  render() {
    return (
      <Level
        levelTimeSeconds={calculateLevelSeconds(Level7.solutionBoardState, gc.beginnerLevelDivisor)}
        initialBoardState={initialBoardState()}
        solutionBoardState={Level7.solutionBoardState}
        navigation={this.props.navigation}
        introRoute={'Level7Intro'}
        levelSelectRoute={'TheReds1LevelSelect'}
        levelOverRoute={'TheReds1LevelSelect'}
        levelID={Level7.id}/>
    );
  }
}