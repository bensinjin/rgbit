import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import gc from '../../config/game-config';
import l from '../../config/levels';
import Banner from '../misc/Banner';
import LevelSelect from '../game/LevelSelect';

export default class TheGreens1LevelSelect extends LevelSelect {

  render() {
    return (
      <View style={gc.wrapper}>
        <Banner onBannerPress={this._onBannerPress} subTitle={gc.theReds1title} />
        <View style={gc.buttonContainer}>
          <Button
            buttonStyle={gc.button}
            fontWeight={'bold'}
            backgroundColor={this._getBgColor('level11Score')}
            color={gc.white}
            onPress={() => {this._onPress('Level11Intro')}}
            title={this._getTitle('level11Score', l.l11.title)}
          />
        </View>
      </View>
    );
  }
}
