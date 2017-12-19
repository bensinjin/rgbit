import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements'
import TimerMixin from 'react-timer-mixin';
import PropTypes from 'prop-types';
import BitBoard from '../game/BitBoard';
import FadeView from 'react-native-fade-view';
import gc from '../../config/game-config';

export default class LevelIntro extends Component {

  constructor(props) {
    super(props);

    this.state = {
      levelStartMillis: this.props.levelStartMillis,
      timerId: null
    }
  }

  _styleTimer(secondsRemaining) {
    let color = gc.white,
        text = secondsRemaining > 0 ? secondsRemaining : 'Go!';

    switch (secondsRemaining) {
      case 3:
        color = gc.red;
        break;
      case 2:
        color = gc.green;
        break;
      case 1:
        color = gc.blue;
        break;
    }

    return (
      <View style={styles.timerNumberWrapper}>
        <Text style={[{color: color}, styles.timerNumber]}>{text}</Text>
      </View>
    );
  }

  componentWillUnmount() {
    if (this.state.timerId) {
      TimerMixin.clearInterval(this.state.timerId);
    }

    this._isMounted = false;
  }

  componentDidMount() {
    // Get a handle the the timer so we can clear it later.
    let timerId = TimerMixin.setInterval(() => {
      if (this._isMounted) {
        if (this.state.levelStartMillis > 0) {
          this.setState(previousState => {
            let millisRemaining = previousState.levelStartMillis - 1000;
            return { levelStartMillis: millisRemaining};
          });
        } else {
          TimerMixin.clearInterval(this.state.timerId);
          this.props.startLevel();
        }
      }
    }, 1000);

    this.setState(previousState => {
      return {
        timerId: timerId
      }
    });

    this._isMounted = true;
  }

  render() {
    return (
      <View>
        <Text style={[{color: gc.greyDark}, styles.levelIntroTitle]}>{this.props.levelTitle}</Text>
        <BitBoard initialBoardState={this.props.levelSolution} playable={false} styles={styles}/>
        <View style={gc.centered}>
          <Text style={styles.timerText}>Remember the pattern!</Text>
          {this._styleTimer(this.state.levelStartMillis / 1000)}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  levelIntroTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: '5%',
    textAlign: 'center',
    width: '100%'
  },
  timerText: {
    color: gc.greyDark,
    fontWeight: 'bold',
    fontSize: 20,
  },
  timerNumber: {
    fontWeight: 'bold',
    fontSize: 35,
  },
  timerNumberWrapper: {
    backgroundColor: gc.greyDark,
    borderRadius: 50,
    padding: 10,
  },
  bitBoardContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '10%',
    marginLeft: '10%',
    marginRight: '10%',
    height: 400,
  }
});

LevelIntro.propTypes = {
  levelTitle: PropTypes.string,
  solution: PropTypes.array,
  startLevel: PropTypes.func
};