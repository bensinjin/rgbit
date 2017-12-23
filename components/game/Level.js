import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import store from 'react-native-simple-store';
import BitBoard from '../game/BitBoard';
import Timer from '../game/Timer';
import gc from '../../config/game-config';
import {getKey} from '../../utils.js';


export default class Level extends Component {
  // TODO fix the hardcoded values in this component.

  _onLevelOver(scoreData) {
    let key = getKey(scoreData.levelID);
    if (key) {
      store.get(key)
        .then(res => {
         // New score.
          if (!res) {
            store.save(key, scoreData)
              .then(() => {
                this.props.navigation.navigate(this.props.levelOverRoute);
              });
          }
          // New high score.
          else if (res.percentCorrect < scoreData.percentCorrect) {
            store.update(key, scoreData)
              .then(() => {
                this.props.navigation.navigate(this.props.levelOverRoute);
              });
          }
          // New score but not higher than high score.
          else {
            this.props.navigation.navigate(this.props.levelOverRoute);
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
    this.props.navigation.navigate('BeginnerLevelSelect');
  }

  render() {
    return (
      <View style={gc.wrapperLevel}>
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
        <View style={[gc.centered, gc.wrapperTimer]}>
          <Timer timeLeftSeconds={this.props.levelTimeSeconds} />
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
  levelOverRoute: PropTypes.string,
  levelID: PropTypes.number,
};