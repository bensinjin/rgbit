import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements'
import TimerMixin from 'react-timer-mixin';
import PropTypes from 'prop-types';
import BitBoard from '../game/BitBoard';
import gc from '../../config/game-config';

export default class LevelIntro extends Component {

  constructor(props) {
    super(props);

    this.state = {
      levelStartMillis: this.props.levelStartMillis ? this.props.levelStartMillis : gc.LevelIntro.defaultLevelStartMillis,
      timerId: null
    }
  }

  _styleTimer(secondsRemaining) {
    let color = gc.white,
        backgroundColor = gc.red,
        text = secondsRemaining > 0 ? secondsRemaining : 'Go!';

    switch (secondsRemaining) {
      case 3:
        color = gc.red;
        backgroundColor = gc.green;
        break;
      case 2:
        color = gc.green;
        backgroundColor = gc.blue;
        break;
      case 1:
        color = gc.blue;
        backgroundColor = gc.white;
        break;
    }

    return (
      <View style={[{backgroundColor: backgroundColor}, styles.timerNumberWrapper]}>
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
        <BitBoard initialBoardState={this.props.solutionBoardState} playable={false} />
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
    color: gc.greyDark,
    fontWeight: 'bold',
    fontSize: 25,
  },
  timerText: {
    color: gc.greyDark,
    fontWeight: 'bold',
    fontSize: 20,
  },
  timerNumber: {
    fontWeight: 'bold',
    fontSize: 30,
  },
  timerNumberWrapper: {
    marginTop: '5%',
    borderRadius: 100,
    padding: 15,
  },
});

LevelIntro.propTypes = {
  levelTitle: PropTypes.string,
  solutionBoardState: PropTypes.array,
  startLevel: PropTypes.func
};