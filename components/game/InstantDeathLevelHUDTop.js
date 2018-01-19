import React, { Component } from 'react';
import { Text } from 'react-native';
import { Col, Grid } from 'react-native-easy-grid';
import { Button } from 'react-native-elements'
import gc from '../../config/game-config';
import { getScore } from '../../utils';
import Timer from './Timer';
import PropTypes from 'prop-types';
import { levelOverReasons } from './Level';

export default class InstantDeathLevelHUDTop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      instantDeathHighScore: 0
    };
    // Populate state from score data.
    getScore(gc.instantDeathScoreObjectID)
      .then(result => {
        if (result && this.props.levelInProgress) {
          this.setState(previousState => {
            return {
              instantDeathHighScore: result.bitsCorrectlyFlipped
            }
          });
        }
      });
  }

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
            <Text>Best: {this.state.instantDeathHighScore}</Text>
            <Text>Current Score: {this.props.instantDeathScoreDisplay}</Text>
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
  instantDeathScoreDisplay: PropTypes.number,
}
