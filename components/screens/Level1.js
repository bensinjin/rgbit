import React, { Component } from 'react';
import { AppRegistry, View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements'
import CountdownCircle from 'react-native-countdown-circle'
import BitBoard from '../game/BitBoard';
import gc from '../../config/game-config';

export default class Level1 extends Component {
  static id = 1;
  static solution = [
    ['W', 'W', 'R', 'W', 'W'],
    ['W', 'W', 'R', 'W', 'W'],
    ['W', 'W', 'R', 'W', 'W'],
    ['W', 'W', 'R', 'W', 'W'],
    ['W', 'W', 'R', 'W', 'W'],
    ['W', 'W', 'R', 'W', 'W']
  ];

  render() {
    let initial = [
      ['W', 'W', 'W', 'W', 'W'],
      ['W', 'W', 'W', 'W', 'W'],
      ['W', 'W', 'W', 'W', 'W'],
      ['W', 'W', 'W', 'W', 'W'],
      ['W', 'W', 'W', 'W', 'W'],
      ['W', 'W', 'W', 'W', 'W']
    ];
    return (
      <View>
        <View style={gc.levelHUD}>
          <View style={gc.levelHUDTimer}>
            <CountdownCircle
                seconds={10}
                radius={gc.countDownCircle.radius}
                borderWidth={gc.countDownCircle.borderWidth}
                color={gc.blue}
                bgColor={gc.greyDark}
                textStyle={{ fontSize: 20, color: gc.white }}
                onTimeElapsed={() => console.warn('Elapsed!')} />
          </View>
          <View style={gc.levelHUDButtons}>
            <Button
              buttonStyle={gc.buttonThinWide}
              title={gc.restartGame} />
            <Button
              buttonStyle={gc.buttonThinWide}
              title={gc.levelSelect} />
          </View>
        </View>
        <BitBoard initialBoardState={initial} solutionBoardState={Level1.solution} playable={true}/>
      </View>
    );
  }
}