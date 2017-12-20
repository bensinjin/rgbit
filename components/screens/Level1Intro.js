import React, { Component } from 'react';
import LevelIntro from '../game/LevelIntro';
import gc from '../../config/game-config';
import Level1 from './Level1';
import {resetNavigation} from '../../utils'

export default class Level1Intro extends Component {
  render() {
    return (
      <LevelIntro
        solutionBoardState={Level1.solutionBoardState}
        startLevel={() => {resetNavigation('Level1', this.props.navigation)}}
      />
    );
  }
}