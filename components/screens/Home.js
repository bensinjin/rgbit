import React, { Component } from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import gc from '../../config/game-config';
import { getScore } from '../../utils';
import { deleteScoreData } from '../../utils';
import Banner from '../misc/Banner';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      instantDeathHighScore: 0
    };
    // Populate state from score data.
    getScore(gc.instantDeathScoreObjectID)
      .then(result => {
        if (result) {
          this.setState(previousState => {
            return {
              instantDeathHighScore: result.bitsCorrectlyFlipped
            }
          });
        }
      });
  }

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
        <View style={gc.buttonContainer}>
          <Button
            buttonStyle={gc.button}
            fontWeight={'bold'}
            backgroundColor={gc.greyDark}
            color={gc.white}
            onPress={() => this.props.navigation.navigate('Level1IDIntro')}
            title={gc.instantDeathtitle + ' - High score: ' + this.state.instantDeathHighScore}
          />
        </View>
      </View>
    );
  }
}