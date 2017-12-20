import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements'
import BitBoard from '../game/BitBoard';
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
        levelStartMillis={3000}
      />
    );
  }
}