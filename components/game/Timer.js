import React, { Component } from 'react';
import { Text, View } from 'react-native';
import TimerMixin from 'react-timer-mixin';
import PropTypes from 'prop-types';
import gc from '../../config/game-config';

export default class Timer extends Component {
  constructor(props)  {
    super(props);
    this.state =  {
      timeLeftSeconds: this.props.timeLeftSeconds
    };
  }

  componentDidMount() {
    // Update our timer visuals every second.
    this._intervalTimerId = TimerMixin.setInterval(() => {
      this.setState(previousState => {
        if (this.props.timerInView) {
          return {
            timeLeftSeconds: previousState.timeLeftSeconds - 1
          };
        }
      });
    }, 1000);
    // Call our cb after time elapsed.
    this._timeoutTimerId = TimerMixin.setTimeout(() => {
      if (this.props.timerInView && this.props.timeElapsedCB) {
        this.props.timeElapsedCB();
      }
    }, this.props.timeLeftSeconds * 1000);
  }

  componentWillUnmount() {
    if (this._timeoutTimerId) {
      TimerMixin.clearTimeout(this._timeoutTimerId);
    }
    if (this._intervalTimerId) {
      TimerMixin.clearInterval(this._intervalTimerId);
    }
  }

  render() {
    let text = this.state.timeLeftSeconds <= 0 ? '--' : this.state.timeLeftSeconds
    return (
      <View style={[{borderColor: gc.blue, backgroundColor: gc.greyDark}, gc.wrapperTimerTime]}>
        <Text style={[{color: gc.white}, gc.timerText]}>{text}</Text>
      </View>
    );
  }
}

Timer.propTypes = {
  timeLeftSeconds: PropTypes.number,
  timeElapsedCB: PropTypes.func,
  timerInView: PropTypes.bool
};