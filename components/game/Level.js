import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import CountdownCircle from 'react-native-countdown-circle'
import store from 'react-native-simple-store';
import BitBoard from '../game/BitBoard';
import gc from '../../config/game-config';
import {getKey} from '../../utils.js';


export default class Level extends Component {

  _onLevelOver(scoreData) {
    let key = getKey(scoreData.levelID);
    if (key) {
      store.get(key)
        .then(res => {
         // New score.
          if (!res) {
            store.save(key, scoreData)
              .then(() => {
                this.props.navigation.navigate('Home');
              });
          }
          // New high score.
          else if (res.percentCorrect < scoreData.percentCorrect) {
            store.update(key, scoreData)
              .then(() => {
                this.props.navigation.navigate('Home');
              });
          }
          // New score but not higher than high score.
          else {
            this.props.navigation.navigate('Home');
          }
        })
        .catch(error => {
          console.error(error.message);
        });
    }
  }

  _onLevelRestart() {
    this.props.navigation.navigate(this.props.introRoute);
  }

  _onLevelSelect() {
    this.props.navigation.navigate('Home');
  }

  render() {
    return (
      <View>
        <BitBoard
          initialBoardState={this.props.initialBoardState}
          solutionBoardState={this.props.solutionBoardState}
          playable={true}
          navigation={this.props.navigation}
          playSeconds={this.props.levelTimeSeconds}
          onPlayOver={(scoreData) => {this._onLevelOver(scoreData)}}
          onLevelSelect={() => {this._onLevelSelect();}}
          onLevelRestart={() => {this._onLevelRestart();}}
          levelID={this.props.levelID}
          />
        <View style={gc.centered}>
            <CountdownCircle
                seconds={this.props.levelTimeSeconds}
                radius={gc.countDownCircle.radius}
                borderWidth={gc.countDownCircle.borderWidth}
                color={gc.red}
                bgColor={gc.greyDark}
                textStyle={{ fontSize: 20, color: gc.white, fontWeight: 'bold' }} />
                {/* We just use the timer as a visual aid, the bitboard actually
                    fires a callback (onPlayOver) when either the time is up or the score is 100%
                {/*onTimeElapsed={() => {}} />*/}
        </View>
      </View>
    );
  }
}

Level.propTypes = {
  levelTimeSeconds: PropTypes.number,
  initialBoardState: PropTypes.array,
  solutionBoardState: PropTypes.array,
  navigation: PropTypes.object,
  introRoute: PropTypes.string,
  levelID: PropTypes.number,
};