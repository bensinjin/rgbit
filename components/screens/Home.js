import React, { Component } from 'react';
import { TouchableWithoutFeedback, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import {Level1, Level2, Level3, Level4} from './LevelsBeginner';
import gc from '../../config/game-config';
import { getScoreData, deleteScoreData } from '../../utils';
import Banner from '../misc/Banner';
import store from 'react-native-simple-store';
import {resetNavigation} from '../../utils'

export default class Home extends Component {

  _onBannerPress() {
    data = deleteScoreData();
    for (let index in data) {
      scoreDataPromise = data[index];
      scoreDataPromise.then(result => {
        console.warn("Results deleted restart application");
      });
    };
  }

  render() {
    return (
      <View style={gc.wrapper}>
        <Banner onBannerPress={this._onBannerPress}/>
        <View style={gc.buttonContainer}>
          <Button
            buttonStyle={gc.button}
            fontWeight={'bold'}
            backgroundColor={gc.red}
            color={gc.white}
            onPress={() => resetNavigation('BeginnerLevelSelect', this.props.navigation)}
            title={gc.beginnerLevelSelectTitle}
          />
        </View>
      </View>
    );
  }
}