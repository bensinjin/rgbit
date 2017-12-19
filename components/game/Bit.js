import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableWithoutFeedback, View, StyleSheet } from 'react-native';
import gc from '../../config/game-config';

export default class Bit extends Component {

  constructor(props) {
    super(props);
    this.state = {
      colorState: this.props.colorState
    };
    this._onPress = this._onPress.bind(this);
  }

  _onPress() {
    if (this.props.updateBoardState) {
      this.setState(previousState => {
        // Should this be done in here? I think probably?
        let nextColorState = this._nextColorState(previousState.colorState);

        this.props.updateBoardState(
          this.props.rowIndex,
          this.props.colIndex,
          this._colorStateToCharacter(nextColorState)
        );

        return {
          colorState: nextColorState
        };
      });
    }
  }

  _nextColorState(colorState) {
    switch (colorState) {
      case gc.colorStateRed:
        return gc.colorStateGreen;
      case gc.colorStateGreen:
        return gc.colorStateBlue;
      case gc.colorStateBlue:
        return gc.colorStateWhite;
      case gc.colorStateWhite:
        return gc.colorStateRed;
    }
  }

  _colorStateToCSSColor(colorState) {
    switch (colorState) {
      case gc.colorStateRed:
        return gc.red;
      case gc.colorStateGreen:
        return gc.green;
      case gc.colorStateBlue:
        return gc.blue
      case gc.colorStateWhite:
        return gc.white;
    }
  }

  _colorStateToCharacter(colorState) {
    switch (colorState) {
      case gc.colorStateRed:
        return 'R';
      case gc.colorStateGreen:
        return 'G';
      case gc.colorStateBlue:
        return 'B';
      case gc.colorStateWhite:
        return 'W';
    }
  }

  render() {
    return (
      <View>
        <TouchableWithoutFeedback onPress={this._onPress}>
          <View
            style={[{backgroundColor: this._colorStateToCSSColor(this.state.colorState)}, styles.bit]}
          />
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bit: {
      borderColor: gc.greyDark,
      borderRadius: 4,
      borderWidth: 1.75,
      height: 50,
      width: 50,
  },
});

Bit.propTypes = {
  rowIndex: PropTypes.string,
  colIndex: PropTypes.string,
  updateBoardState: PropTypes.func
};