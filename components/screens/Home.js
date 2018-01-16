import React, { Component } from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import gc from '../../config/game-config';
import { deleteScoreData } from '../../utils';
import Banner from '../misc/Banner';

export default class Home extends Component {

  _onBannerPress() {
    deleteScoreData();
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
            onPress={() => this.props.navigation.navigate('TheReds1LevelSelect')}
            title={gc.theReds1title}
          />
        </View>
      </View>
    );
  }
}