import React, { Component } from 'react';
import { Col, Grid } from "react-native-easy-grid";
import { Button } from 'react-native-elements'
import gc from '../../config/game-config';
import PropTypes from 'prop-types';

export default class LevelHUDBottom extends Component {
  _getColorButtonStyle(colorState) {
    const activeBorderColor = gc.grey,
          activeBorderWidth = 5;

    return this.props.levelCurrentBoardColorState == colorState ?
      [{borderWidth: activeBorderWidth , borderColor: activeBorderColor}, gc.colorButton] :
      gc.colorButton;
  }

  render() {
    return(
      <Grid style={gc.wrapperBitHUD}>
        <Col>
          <Button
            backgroundColor={gc.red}
            buttonStyle={this._getColorButtonStyle(gc.colorStateRed)}
            onPress={() => {this.props.updateLevelCurrentBoardColorState(gc.colorStateRed);}}
          />
        </Col>
        <Col>
          <Button
            backgroundColor={gc.green}
            buttonStyle={this._getColorButtonStyle(gc.colorStateGreen)}
            onPress={() => {this.props.updateLevelCurrentBoardColorState(gc.colorStateGreen);}}
          />
        </Col>
        <Col>
          <Button
            backgroundColor={gc.blue}
            buttonStyle={this._getColorButtonStyle(gc.colorStateBlue)}
            onPress={() => {this.props.updateLevelCurrentBoardColorState(gc.colorStateBlue);}}
          />
        </Col>
        <Col>
          <Button
            backgroundColor={gc.white}
            buttonStyle={this._getColorButtonStyle(gc.colorStateWhite)}
            onPress={() => {this.props.updateLevelCurrentBoardColorState(gc.colorStateWhite);}}
          />
        </Col>
      </Grid>
    );
  }
}

LevelHUDBottom.propTypes = {
  updateLevelCurrentBoardColorState: PropTypes.func,
  levelCurrentBoardColorState: PropTypes.string
}
