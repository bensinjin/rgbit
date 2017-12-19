import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements'
import gc from '../../config/game-config'

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{gc.appTitle}</Text>
        <View style={styles.buttonContainer}>
          <Button
            buttonStyle={gc.buttonThinWide}
            backgroundColor={gc.red}
            onPress={() => this.props.navigation.navigate('Level1Intro')}
            title={gc.level1Title}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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