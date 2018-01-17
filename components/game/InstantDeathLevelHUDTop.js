import React, { Component } from 'react';
import { Text } from 'react-native';
import { Col, Grid } from 'react-native-easy-grid';
import { Button } from 'react-native-elements'
import gc from '../../config/game-config';
import Timer from './Timer';
import PropTypes from 'prop-types';
import { levelOverReasons } from './Level';

export default class InstantDeathLevelHUDTop extends Component {
  render() {
    return (
      <Grid style={gc.wrapperHUD}>
        <Col size={2}>
          <Button
            backgroundColor={gc.red}
            buttonStyle={gc.button}
            fontWeight={'bold'}
            onPress={() => this.props.onLevelExit()}
            title={gc.levelSelect}
          />
        </Col>
        <Col size={1}>
          <Timer
            timeLeftSeconds={this.props.levelTimeSeconds}
            timeElapsedCB={
              () => this.props.onLevelOver(levelOverReasons.LEVEL_TIME_ELAPSED)
            }
            timerInView={this.props.levelInProgress}
          />
        </Col>
        <Col size={2}>
            <Text>Current Score</Text>
            <Text>High Score</Text>
        </Col>
      </Grid>
    );
  }
}

InstantDeathLevelHUDTop.propTypes = {
  levelTimeSeconds: PropTypes.number,
  onLevelOver: PropTypes.func,
  onLevelExit: PropTypes.func,
  levelInProgress: PropTypes.bool,
}
