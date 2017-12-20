import React, { Component } from 'react';
import LevelIntro from '../game/LevelIntro';
import gc from '../../config/game-config';
import Level3 from './Level3';
import {resetNavigation} from '../../utils'

export default class Level2Intro extends Component {
  render() {
    return (
      <LevelIntro
        solutionBoardState={Level3.solutionBoardState}
        startLevel={() => {resetNavigation('Level3', this.props.navigation)}}
      />
    );
  }
}