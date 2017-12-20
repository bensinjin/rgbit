import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import {Level1, Level2, Level3, Level4} from './LevelsBeginner';
import gc from '../../config/game-config';
import { getScoreData, getKey } from '../../utils';

export default class Home extends Component {
  render() {
    // TODO
    //let data = getScoreData(getKey(Level1.id));
    //let l1P = data.percentScore;
    return (
      <View style={styles.container}>
        <View style={styles.banner}>
          <Text style={styles.title}>
            <Text style={styles.r}>R</Text><Text style={styles.g}>G</Text><Text style={styles.b}>B</Text>it
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            buttonStyle={gc.homeButton}
            fontWeight={'bold'}
            backgroundColor={gc.red}
            onPress={() => this.props.navigation.navigate('Level1Intro')}
            title={gc.level1Title}
          />
          <Button
            buttonStyle={gc.homeButton}
            fontWeight={'bold'}
            backgroundColor={gc.blue}
            onPress={() => this.props.navigation.navigate('Level2Intro')}
            title={gc.level2Title}
          />
          <Button
            buttonStyle={gc.homeButton}
            fontWeight={'bold'}
            backgroundColor={gc.green}
            onPress={() => this.props.navigation.navigate('Level3Intro')}
            title={gc.level3Title}
          />
          <Button
            buttonStyle={gc.homeButton}
            fontWeight={'bold'}
            backgroundColor={gc.red}
            onPress={() => this.props.navigation.navigate('Level4Intro')}
            title={gc.level4Title}
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
  container: {
    marginTop: '5%'
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