import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { AppRegistry, View, StyleSheet } from 'react-native';
import SquareGrid from 'react-native-square-grid';
import gc from '../../config/game-config';
import Bit from './Bit';

export default class BitBoard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentBoardState: this.props.initialBoardState,
    };
    this.updateBoardState = this.updateBoardState.bind(this);
  }

  _checkBits(currentBoardState, solutionBoardState) {
    let bitsRemaining = gc.BitBoard.numRows * gc.BitBoard.numCols;

    for (rowIndex in currentBoardState) {
      for (colIndex in currentBoardState[rowIndex]) {
        let colorChar = currentBoardState[rowIndex][colIndex],
            solutionColorChar = solutionBoardState[rowIndex][colIndex];
        if (colorChar == solutionColorChar) {
          bitsRemaining -= 1;
        }
      }
    }

    return bitsRemaining;
  }

  _getBits(boardState) {
    let bits = [];
    for (rowIndex in boardState) {
      for (colIndex in boardState[rowIndex]) {
        let colorState = null;
        switch (boardState[rowIndex][colIndex]) {
          case 'R':
            colorState = gc.colorStateRed;
            break;
          case 'G':
            colorState = gc.colorStateGreen;
            break;
          case 'B':
            colorState = gc.colorStateBlue;
            break;
          case 'W':
            colorState = gc.colorStateWhite;
            break;
        }
        if (colorState) {
          // If this is a "playable" board
          // we'll pass a callback to update the board state.
          if (this.props.playable) {
            bits.push(
              <Bit
                colorState={colorState}
                rowIndex={rowIndex}
                colIndex={colIndex}
                updateBoardState={this.updateBoardState} />
            );
          } else {
            bits.push(<Bit colorState={colorState}/>);
          }
        }
      }
    }

    return bits;
  }

  updateBoardState(rowIndex, colIndex, colorChar) {
    this.setState(previousState => {
      let updatedBoardState = previousState.currentBoardState;

      updatedBoardState[rowIndex][colIndex] = colorChar;
      let checkBits = this._checkBits(updatedBoardState, this.props.solutionBoardState);

      if (checkBits == 0) {
        alert("Victory!");
      }
      return {
        currentBoardState: updatedBoardState
      }
    });
  }

  render() {
    let items = this.state.currentBoardState,
        ss = this.props.styles ? this.props.styles : styles;

    return (
      <View style={ss.bitBoardContainer}>
        <SquareGrid
          rows={gc.BitBoard.numRows}
          columns={gc.BitBoard.numCols}
          items={this._getBits(items)}
          renderItem={(item) => {return (item);}}
        />
      </View>
      );
   }
}

const styles = StyleSheet.create({
  bitBoardContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '15%',
    marginLeft: '10%',
    marginRight: '10%',
    height: 400,
  }
});

BitBoard.propTypes = {
  initialBoardState: PropTypes.array,
  solutionBoardState: PropTypes.array,
  playable: PropTypes.bool,
  styles: PropTypes.object
};

AppRegistry.registerComponent('BitBoard', () => BitBoard);