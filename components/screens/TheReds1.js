import React, { Component } from 'react';
import Level from '../game/Level';
import gc from '../../config/game-config';
import { initialBoardState, calculateLevelSeconds } from '../../utils.js';
import LevelContainer from '../../containers/LevelContainer';

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
      <LevelContainer
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

export class Level8 extends Component {
  static id = 8;
  static solutionBoardState = [
    ['B', 'B', 'R', 'B', 'B'],
    ['R', 'B', 'R', 'B', 'R'],
    ['B', 'R', 'B', 'R', 'B'],
    ['R', 'B', 'R', 'B', 'R'],
    ['B', 'R', 'R', 'R', 'B'],
    ['B', 'B', 'R', 'B', 'B'],
    ['B', 'G', 'G', 'G', 'B']
  ];

  render() {
    return (
      <Level
        levelTimeSeconds={calculateLevelSeconds(Level8.solutionBoardState, gc.beginnerLevelDivisor)}
        initialBoardState={initialBoardState()}
        solutionBoardState={Level8.solutionBoardState}
        navigation={this.props.navigation}
        introRoute={'Level8Intro'}
        levelSelectRoute={'TheReds1LevelSelect'}
        levelOverRoute={'TheReds1LevelSelect'}
        levelID={Level8.id}/>
    );
  }
}

export class Level9 extends Component {
  static id = 9;
  static solutionBoardState = [
    ['B', 'B', 'B', 'R', 'R'],
    ['R', 'R', 'B', 'R', 'R'],
    ['R', 'R', 'B', 'G', 'B'],
    ['G', 'B', 'R', 'R', 'G'],
    ['B', 'G', 'R', 'R', 'G'],
    ['B', 'G', 'B', 'G', 'B'],
    ['G', 'B', 'B', 'B', 'G']
  ];

  render() {
    return (
      <Level
        levelTimeSeconds={calculateLevelSeconds(Level9.solutionBoardState, gc.beginnerLevelDivisor)}
        initialBoardState={initialBoardState()}
        solutionBoardState={Level9.solutionBoardState}
        navigation={this.props.navigation}
        introRoute={'Level9Intro'}
        levelSelectRoute={'TheReds1LevelSelect'}
        levelOverRoute={'TheReds1LevelSelect'}
        levelID={Level9.id}/>
    );
  }
}

export class Level10 extends Component {
  static id = 10;
  static solutionBoardState = [
    ['W', 'W', 'R', 'W', 'W'],
    ['W', 'W', 'R', 'W', 'R'],
    ['G', 'W', 'G', 'W', 'G'],
    ['G', 'G', 'G', 'W', 'G'],
    ['G', 'G', 'G', 'W', 'G'],
    ['B', 'B', 'B', 'W', 'B'],
    ['B', 'B', 'B', 'B', 'B']
  ];

  render() {
    return (
      <Level
        levelTimeSeconds={calculateLevelSeconds(Level10.solutionBoardState, gc.beginnerLevelDivisor)}
        initialBoardState={initialBoardState()}
        solutionBoardState={Level10.solutionBoardState}
        navigation={this.props.navigation}
        introRoute={'Level10Intro'}
        levelSelectRoute={'TheReds1LevelSelect'}
        levelOverRoute={'TheReds1LevelSelect'}
        levelID={Level10.id}/>
    );
  }
}