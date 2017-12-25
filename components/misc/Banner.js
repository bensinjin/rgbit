import React, { Component } from 'react';
import { TouchableWithoutFeedback, Text, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import gc from '../../config/game-config';

export default class Banner extends Component {
  render() {
    return (
      <TouchableWithoutFeedback onPress={this.props.onBannerPress}>
        <View style={[gc.centered, styles.banner]}>
          <Text style={styles.title}>
            <Text style={styles.r}>R</Text><Text style={styles.g}>G</Text><Text style={styles.b}>B</Text>it
          </Text>
          <Text style={styles.subTitle}>{this.props.subTitle}</Text>
        </View>
      </TouchableWithoutFeedback>
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
  subtitle: {
    color: gc.greyDark,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});

Banner.propTypes = {
  subTitle: PropTypes.string
};