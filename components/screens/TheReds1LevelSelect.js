import React, { Component } from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import gc from '../../config/game-config';
import l from '../../config/levels';
import { getScoreData } from '../../utils';
import Banner from '../misc/Banner';
import {resetNavigation} from '../../utils'

export default class TheReds1LevelSelect extends Component {

  constructor(props) {
    super(props);
    this.state = {};
    // Populate state from score data.
    const data = getScoreData();
    for (const index in data) {
      const scoreDataPromise = data[index];
      scoreDataPromise.then(result => {
        if (result && result.levelID){
          this.setState(previousState => {
            const key = 'level' + result.levelID + 'Score',
                  obj = {};
            obj[key] = result;
            return obj;
          });
        }
      })
    }
    this._onBannerPress = this._onBannerPress.bind(this);
  }

  _getBgColor(scoreProp) {
    return this.state[scoreProp] && this.state[scoreProp].percentCorrect >= 100 ? gc.red : gc.greyDark;
  }

  _getTitle(scoreProp, title) {
    return this.state[scoreProp] ? title + ' - ' + this.state[scoreProp].percentCorrect + '% complete' : title;
  }

  _onPress(route) {
    resetNavigation(route, this.props.navigation);
  }

  _onBannerPress() {
    this.props.navigation.navigate('Home');
  }

  render() {
    return (
      <View style={gc.wrapper}>
        <Banner onBannerPress={this._onBannerPress} subTitle={gc.theReds1title} />
        <View style={gc.buttonContainer}>
          <Button
            buttonStyle={gc.button}
            fontWeight={'bold'}
            backgroundColor={this._getBgColor('level1Score')}
            color={gc.white}
            onPress={() => {this._onPress('Level1Intro')}}
            title={this._getTitle('level1Score', l.l1.title)}
          />
          <Button
            buttonStyle={gc.button}
            fontWeight={'bold'}
            backgroundColor={this._getBgColor('level2Score')}
            color={gc.white}
            onPress={() => {this._onPress('Level2Intro')}}
            title={this._getTitle('level2Score', l.l2.title)}
          />
          <Button
            buttonStyle={gc.button}
            fontWeight={'bold'}
            backgroundColor={this._getBgColor('level3Score')}
            color={gc.white}
            onPress={() => {this._onPress('Level3Intro')}}
            title={this._getTitle('level3Score', l.l3.title)}
          />
          <Button
            buttonStyle={gc.button}
            fontWeight={'bold'}
            backgroundColor={this._getBgColor('level4Score')}
            color={gc.white}
            onPress={() => {this._onPress('Level4Intro')}}
            title={this._getTitle('level4Score', l.l4.title)}
          />
          <Button
            buttonStyle={gc.button}
            fontWeight={'bold'}
            backgroundColor={this._getBgColor('level5Score')}
            color={gc.white}
            onPress={() => {this._onPress('Level5Intro')}}
            title={this._getTitle('level5Score', l.l5.title)}
          />
          <Button
            buttonStyle={gc.button}
            fontWeight={'bold'}
            backgroundColor={this._getBgColor('level6Score')}
            color={gc.white}
            onPress={() => {this._onPress('Level6Intro')}}
            title={this._getTitle('level6Score', l.l6.title)}
          />
          <Button
            buttonStyle={gc.button}
            fontWeight={'bold'}
            backgroundColor={this._getBgColor('level7Score')}
            color={gc.white}
            onPress={() => {this._onPress('Level7Intro')}}
            title={this._getTitle('level7Score', l.l7.title)}
          />
          <Button
            buttonStyle={gc.button}
            fontWeight={'bold'}
            backgroundColor={this._getBgColor('level8Score')}
            color={gc.white}
            onPress={() => {this._onPress('Level8Intro')}}
            title={this._getTitle('level8Score', l.l8.title)}
          />
          <Button
            buttonStyle={gc.button}
            fontWeight={'bold'}
            backgroundColor={this._getBgColor('level9Score')}
            color={gc.white}
            onPress={() => {this._onPress('Level9Intro')}}
            title={this._getTitle('level9Score', l.l9.title)}
          />
          <Button
            buttonStyle={gc.button}
            fontWeight={'bold'}
            backgroundColor={this._getBgColor('level10Score')}
            color={gc.white}
            onPress={() => {this._onPress('Level10Intro')}}
            title={this._getTitle('level10Score', l.l10.title)}
          />
        </View>
      </View>
    );
  }
}