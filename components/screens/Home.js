import React, { Component } from 'react';
import { TouchableWithoutFeedback, Text, View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import {Level1, Level2, Level3, Level4} from './LevelsBeginner';
import gc from '../../config/game-config';
import { getScoreData, deleteScoreData } from '../../utils';
import store from 'react-native-simple-store';
import {resetNavigation} from '../../utils'

export default class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
    this._levels = [];
  }

  _onBannerPress() {
    data = deleteScoreData();
    for (let index in data) {
      scoreDataPromise = data[index];
      scoreDataPromise.then(result => {
        console.warn("Results deleted restart application");
      });
    };
  }

  componentDidMount() {
    // Populate state from score data.
    data = getScoreData();
    for (let index in data) {
      scoreDataPromise = data[index];
      scoreDataPromise.then(result => {
        if (result && result.levelID && this._isMounted){
          this.setState(previousState => {
            let key = 'level' + result.levelID + 'Score'
                obj = {};
            obj[key] = result;
            return obj;
          });
        }
      })
    }
    this._isMounted = true;
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    return (
      <View style={gc.wrapper}>
        <TouchableWithoutFeedback onPress={this._onBannerPress}>
          <View style={styles.banner}>
            <Text style={styles.title}>
              <Text style={styles.r}>R</Text><Text style={styles.g}>G</Text><Text style={styles.b}>B</Text>it
            </Text>
          </View>
        </TouchableWithoutFeedback>
        <View style={styles.buttonContainer}>
          <Button
            buttonStyle={gc.button}
            fontWeight={'bold'}
            backgroundColor={gc.red}
            onPress={() => resetNavigation('Level1Intro', this.props.navigation)}
            title={this.state.level1Score ? gc.level1Title + ' - ' + this.state.level1Score.percentCorrect + '% complete': gc.level1Title}
          />
          <Button
            buttonStyle={gc.button}
            fontWeight={'bold'}
            backgroundColor={gc.green}
            onPress={() => resetNavigation('Level2Intro', this.props.navigation)}
            title={this.state.level2Score ? gc.level2Title + ' - ' + this.state.level2Score.percentCorrect + '% complete': gc.level2Title}
          />
          <Button
            buttonStyle={gc.button}
            fontWeight={'bold'}
            backgroundColor={gc.blue}
            onPress={() => resetNavigation('Level3Intro', this.props.navigation)}
            title={this.state.level3Score ? gc.level3Title + ' - ' + this.state.level3Score.percentCorrect + '% complete': gc.level3Title}
          />
          <Button
            buttonStyle={gc.button}
            fontWeight={'bold'}
            backgroundColor={gc.red}
            onPress={() => resetNavigation('Level4Intro', this.props.navigation)}
            title={this.state.level4Score ? gc.level4Title + ' - ' + this.state.level4Score.percentCorrect + '% complete': gc.level4Title}
          />
          <Button
            buttonStyle={gc.button}
            fontWeight={'bold'}
            backgroundColor={gc.green}
            onPress={() => resetNavigation('Level5Intro', this.props.navigation)}
            title={this.state.level5Score ? gc.level5Title + ' - ' + this.state.level5Score.percentCorrect + '% complete': gc.level5Title}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  banner: {
    backgroundColor: gc.white
  },
  r: {
    color: gc.red
  },
  g: {
    color: gc.green
  },
  b: {
    color: gc.blue
  },
  title: {
    color: gc.greyDark,
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  buttonContainer: {
    marginTop: '10%'
  }
});