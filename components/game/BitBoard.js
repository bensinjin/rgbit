import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import SquareGrid from 'react-native-square-grid';
import gc from '../../config/game-config';
import Bit from './Bit';

export default class BitBoard extends Component {

  _getBits() {
    const bits = [];

    for (const rowIndex in this.props.levelCurrentBoardState) {
      for (const colIndex in this.props.levelCurrentBoardState[rowIndex]) {
        bits.push(
          <Bit
            playable={this.props.playable}
            rowIndex={rowIndex}
            colIndex={colIndex}
            updateLevelCurrentBoardState={this.props.updateLevelCurrentBoardState}
            levelCurrentBoardColorState={this.props.levelCurrentBoardColorState}
            levelCurrentBoardState={this.props.levelCurrentBoardState}
          />
        );
      }
    }

    return bits;
  }

  render() {
    const items = this._getBits();
    return (
      <View style={gc.wrapperBitBoard}>
        <SquareGrid
          rows={gc.BitBoard.numRows}
          columns={gc.BitBoard.numCols}
          items={items}
          renderItem={item => item}
        />
      </View>
    );
  }
}

BitBoard.propTypes = {
  playable: PropTypes.bool,
  calculateScore: PropTypes.func,
  onLevelOver: PropTypes.func,
  updateLevelCurrentBoardState: PropTypes.func,
  levelCurrentBoardState: PropTypes.array,
  levelCurrentBoardColorState: PropTypes.string,
  levelInProgress: PropTypes.bool
};