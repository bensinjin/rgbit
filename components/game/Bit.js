import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import gc from '../../config/game-config';

export default class Bit extends Component {

  constructor(props) {
    super(props);
    this.state = {
      colorState: this.props.colorState,
    };
    this._onPress = this._onPress.bind(this);
  }

  _onPress() {
    if (this.props.updateBoardState && this.props.boardColorState) {
      this.setState(previousState => {
        this.props.updateBoardState(
          this.props.rowIndex,
          this.props.colIndex,
          this._colorStateToCharacter(this.props.boardColorState)
        );
        return {
          colorState: this.props.boardColorState
        };
      });
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

  _onResponderMove(event) {
    // TODO would be nice to support dragging to fill squares...
  }

  _onResponderRelease(event) {
    if (this.props.updateBoardState && this.props.boardColorState) {
      this.setState(previousState => {
        this.props.updateBoardState(
          this.props.rowIndex,
          this.props.colIndex,
          this._colorStateToCharacter(this.props.boardColorState)
        );
        return {
          colorState: this.props.boardColorState
        };
      });
    }
  }

  render() {
    return (
      <View style={gc.wrapperBit}
        onStartShouldSetResponder={(event) => true}
        onResponderRelease={(event) => this._onResponderRelease(event)}>
        <View style={[{borderRadius: 5, backgroundColor: this._colorStateToCSSColor(this.state.colorState)}, gc.bit]} />
      </View>
    );
  }
}

Bit.propTypes = {
  rowIndex: PropTypes.string,
  colIndex: PropTypes.string,
  updateBoardState: PropTypes.func,
  boardColorState: PropTypes.string
};