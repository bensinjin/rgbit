import React, { Component } from 'react';
import LevelIntro from '../game/LevelIntro';
import gc from '../../config/game-config';
import Level2 from './Level2';
import {resetNavigation} from '../../utils'

export default class Level2Intro extends Component {
  render() {
    return (
      <LevelIntro
        solutionBoardState={Level2.solutionBoardState}
        startLevel={() => {resetNavigation('Level2', this.props.navigation)}}
      />
    );
  }
}