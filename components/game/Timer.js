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
    // Call our cb after time elapsed.
    this._timeoutTimerId = TimerMixin.setTimeout(() => {
      if (this._isMounted && this.props.timeElapsedCB) {
        this.componentWillUnmount();
        this.props.timeElapsedCB();
      }
    }, this.props.timeLeftSeconds * 1000);
    // Update our timer visuals every second.
    this._intervalTimerId = TimerMixin.setInterval(() => {
      this.setState(previousState => {
        if (this._isMounted) {
          return {
            timeLeftSeconds: previousState.timeLeftSeconds - 1
          };
        }
      });
    }, 1000);
  }

  _killTimers() {
    if (this._timeoutTimerId) {
      TimerMixin.clearTimeout(this._timeoutTimerId);
    }
    if (this._intervalTimerId) {
      TimerMixin.clearInterval(this._intervalTimerId);
    }
  }

  componentDidMount() {
    this._isMounted = true;
  }

  componentWillUnmount() {
    this._killTimers();
    this._isMounted = false;
  }

  render() {
    let text = this.state.timeLeftSeconds == 0 ? '-' : this.state.timeLeftSeconds
    return (
      <View style={gc.wrapperTimerTime}>
        <Text style={gc.timerText}>{text}</Text>
      </View>
    );
  }
}

Timer.propTypes = {
  timeLeftSeconds: PropTypes.number,
  timeElapsedCB: PropTypes.func
};