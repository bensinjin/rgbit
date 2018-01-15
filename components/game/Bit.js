import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import gc from '../../config/game-config';

export default class Bit extends Component {

  _colorCharacterToCSSColor(colorCharacter) {
    switch (colorCharacter) {
      case 'R':
        return gc.red;
      case 'G':
        return gc.green;
      case 'B':
        return gc.blue;
      case 'W':
        return gc.white;
    }
  }

  _colorStateToColorCharacter(colorState) {
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

  _onResponderMove(event) {
    // TODO would be nice to support dragging to fill squares...
  }

  _onResponderRelease(event) {
    if (this.props.playable) {
      this.props.updateLevelCurrentBoardState(
        this.props.rowIndex,
        this.props.colIndex,
        this._colorStateToColorCharacter(this.props.levelCurrentBoardColorState)
      );
    }
  }

  render() {
    const bitColor = this._colorCharacterToCSSColor(
      this.props.levelCurrentBoardState[this.props.rowIndex][this.props.colIndex]
    );
    return (
      <View
        style={gc.wrapperBit}
        onStartShouldSetResponder={(event) => true}
        onResponderRelease={(event) => this._onResponderRelease(event)}>
        <View style={[{borderRadius: 5, backgroundColor: bitColor}, gc.bit]}/>
      </View>
    );
  }
}

Bit.propTypes = {
  playable: PropTypes.bool,
  rowIndex: PropTypes.string,
  colIndex: PropTypes.string,
  updateLevelCurrentBoardState: PropTypes.func,
  levelCurrentBoardColorState: PropTypes.string,
  levelCurrentBoardState: PropTypes.array
};