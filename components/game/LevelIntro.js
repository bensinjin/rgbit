import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements'
import TimerMixin from 'react-timer-mixin';
import PropTypes from 'prop-types';
import BitBoard from '../game/BitBoard';
import Timer from '../game/Timer';
import gc from '../../config/game-config';

export default class LevelIntro extends Component {

  render() {
    return (
      <View style={gc.wrapper}>
        <BitBoard initialBoardState={this.props.solutionBoardState} playable={false} />
        <View style={gc.centered}>
          <Text style={styles.timerText}>{gc.levelInstructions}</Text>
          <View style={gc.wrapperTimer}>
            <Timer timeLeftSeconds={gc.LevelIntro.levelStartSeconds} timeElapsedCB={this.props.startLevel}/>
            </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  timerText: {
    color: gc.greyDark,
    fontWeight: 'bold',
    fontSize: 20,
  },
});

LevelIntro.propTypes = {
  levelTitle: PropTypes.string,
  solutionBoardState: PropTypes.array,
  startLevel: PropTypes.func
};