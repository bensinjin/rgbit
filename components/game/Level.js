import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import CountdownCircle from 'react-native-countdown-circle'
import BitBoard from '../game/BitBoard';
import gc from '../../config/game-config';

export default class Level extends Component {

  render() {
    return (
      <View>
        <BitBoard
          initialBoardState={this.props.initialBoardState}
          solutionBoardState={this.props.solutionBoardState}
          numRows={this.props.numRows}
          numCols={this.props.numCols}
          playable={true}
          onPlayOver={this.props.onLevelOver}
          playSeconds={this.props.levelTimeSeconds}
          onLevelSelect={this.props.onLevelSelect}
          onLevelRestart={this.props.onLevelRestart}
          />
        <View style={gc.centered}>
            <CountdownCircle
                seconds={this.props.levelTimeSeconds}
                radius={gc.countDownCircle.radius}
                borderWidth={gc.countDownCircle.borderWidth}
                color={gc.red}
                bgColor={gc.greyDark}
                textStyle={{ fontSize: 20, color: gc.white, fontWeight: 'bold' }} />
                {/* We just use the timer as a visual aid, the bitboard actually
                    fires a callback (onPlayOver) when either the time is up or the score is 100%
                {/*onTimeElapsed={() => {}} />*/}
        </View>
      </View>
    );
  }
}

Level.propTypes = {
  levelTimeSeconds: PropTypes.number,
  initialBoardState: PropTypes.array,
  numRows: PropTypes.number,
  numCols: PropTypes.number,
  solutionBoardState: PropTypes.array,
  onLevelOver: PropTypes.func,
  onLevelRestart: PropTypes.func,
  onLevelSelect: PropTypes.func
};