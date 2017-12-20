import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements'
import PropTypes from 'prop-types';
import CountdownCircle from 'react-native-countdown-circle'
import { Col, Row, Grid } from "react-native-easy-grid";
import BitBoard from '../game/BitBoard';
import gc from '../../config/game-config';

export default class Level extends Component {

  render() {
    return (
      <View>
        <Grid style={styles.levelHUD}>
          <Col style={styles.levelHUDButtonWrapper}>
            <Button
              backgroundColor={gc.green}
              buttonStyle={gc.button}
              fontWeight={'bold'}
              onPress={this.props.onLevelSelect}
              title={gc.levelSelect} />
          </Col>
          <Col style={styles.levelHUDButtonWrapper}>
            <Button
              backgroundColor={gc.blue}
              buttonStyle={gc.button}
              fontWeight={'bold'}
              onPress={this.props.onLevelRestart}
              title={gc.restartGame} />
          </Col>
        </Grid>
        <BitBoard
          initialBoardState={this.props.initialBoardState}
          solutionBoardState={this.props.solutionBoardState}
          playable={true}
          onPlayOver={this.props.onLevelOver}
          playSeconds={this.props.levelTimeSeconds}/>
        <View style={gc.centered}>
            <CountdownCircle
                seconds={this.props.levelTimeSeconds}
                radius={gc.countDownCircle.radius}
                borderWidth={gc.countDownCircle.borderWidth}
                color={gc.red}
                bgColor={gc.greyDark}
                textStyle={{ fontSize: 20, color: gc.white, fontWeight: 'bold' }} />
                {/*onTimeElapsed={() => {}} />*/}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  levelHUDButtonWrapper: {
    height: 40,
    paddingTop: 15
  },
  levelHUD: {
    marginTop: '5%',
    marginBottom: 10,
    padding: 5
  }
});

Level.propTypes = {
  levelTimeSeconds: PropTypes.number,
  initialBoardState: PropTypes.array,
  solutionBoardState: PropTypes.array,
  onLevelOver: PropTypes.func,
  onLevelRestart: PropTypes.func,
  onLevelSelect: PropTypes.func
};