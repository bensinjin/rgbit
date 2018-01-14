import React, { Component } from 'react';
import LevelIntro from '../game/LevelIntro';
import * as TR1 from './TheReds1';
import sbs from '../../config/solution-board-states';
import {resetNavigation} from '../../utils'

export class Level1Intro extends Component {
  render() {
    return (
      <LevelIntro
        solutionBoardState={sbs.l1}
        startLevel={() => {resetNavigation('Level1', this.props.navigation)}}
      />
    );
  }
}

//export class Level2Intro extends Component {
//  render() {
//    return (
//      <LevelIntro
//        solutionBoardState={TR1.Level2.solutionBoardState}
//        startLevel={() => {resetNavigation('Level2', this.props.navigation)}}
//      />
//    );
//  }
//}
//
//export class Level3Intro extends Component {
//  render() {
//    return (
//      <LevelIntro
//        solutionBoardState={TR1.Level3.solutionBoardState}
//        startLevel={() => {resetNavigation('Level3', this.props.navigation)}}
//      />
//    );
//  }
//}
//
//export class Level4Intro extends Component {
//  render() {
//    return (
//      <LevelIntro
//        solutionBoardState={TR1.Level4.solutionBoardState}
//        startLevel={() => {resetNavigation('Level4', this.props.navigation)}}
//      />
//    );
//  }
//}
//
//export class Level5Intro extends Component {
//  render() {
//    return (
//      <LevelIntro
//        solutionBoardState={TR1.Level5.solutionBoardState}
//        startLevel={() => {resetNavigation('Level5', this.props.navigation)}}
//      />
//    );
//  }
//}
//
//export class Level6Intro extends Component {
//  render() {
//    return (
//      <LevelIntro
//        solutionBoardState={TR1.Level6.solutionBoardState}
//        startLevel={() => {resetNavigation('Level6', this.props.navigation)}}
//      />
//    );
//  }
//}
//
//export class Level7Intro extends Component {
//  render() {
//    return (
//      <LevelIntro
//        solutionBoardState={TR1.Level7.solutionBoardState}
//        startLevel={() => {resetNavigation('Level7', this.props.navigation)}}
//      />
//    );
//  }
//}
//
//export class Level8Intro extends Component {
//  render() {
//    return (
//      <LevelIntro
//        solutionBoardState={TR1.Level8.solutionBoardState}
//        startLevel={() => {resetNavigation('Level8', this.props.navigation)}}
//      />
//    );
//  }
//}
//
//export class Level9Intro extends Component {
//  render() {
//    return (
//      <LevelIntro
//        solutionBoardState={TR1.Level9.solutionBoardState}
//        startLevel={() => {resetNavigation('Level9', this.props.navigation)}}
//      />
//    );
//  }
//}
//
//export class Level10Intro extends Component {
//  render() {
//    return (
//      <LevelIntro
//        solutionBoardState={TR1.Level10.solutionBoardState}
//        startLevel={() => {resetNavigation('Level10', this.props.navigation)}}
//      />
//    );
//  }
//}