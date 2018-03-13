import React, { Component } from 'react';
import gc from '../../config/game-config';
import l from '../../config/levels';
import { calculateLevelSeconds } from '../../utils.js';
import LevelContainer from '../../containers/LevelContainer';

const sharedRenderer = (component) => {
  return (
    <LevelContainer
      levelID={component.id}
      levelRestartRoute={component.levelRestartRoute}
      levelSolutionBoardState={component.levelSolutionBoardState}
      levelTimeSeconds = {calculateLevelSeconds(component.levelSolutionBoardState, gc.beginnerLevelDivisor)}
      navigation={component.props.navigation}
      levelOverRoute='TheGreens1LevelSelect'
      levelExitRoute='TheGreens1LevelSelect'
      />
  );
}

export class Level11 extends Component {
  constructor(props) {
    super(props);
    this.id = l.l11.id;
    this.levelRestartRoute = 'Level11Intro';
    this.levelSolutionBoardState = l.l11.solution;
  }

  render() {
    return sharedRenderer(this);
  }
}