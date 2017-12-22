import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import SquareGrid from 'react-native-square-grid';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Button } from 'react-native-elements'
import TimerMixin from 'react-timer-mixin';
import gc from '../../config/game-config';
import Bit from './Bit';

export default class BitBoard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentBoardState: this.props.initialBoardState
    };
    this.updateBoardState = this.updateBoardState.bind(this);
    this._solutionData = this.props.playable ? this._getSolutionData(this.props.solutionBoardState) : [];
    // Initialize our timer.
    if (this.props.playable) {
      this._timeoutTimerId = TimerMixin.setTimeout(() => {
        if (this._isMounted && this.props.onPlayOver) {
          this.componentWillUnmount();
          let checkBits = this._checkBits(this.state.currentBoardState);
          this.props.onPlayOver(checkBits);
        }
      }, this.props.playSeconds * 1000);
    }
  }

  _getSolutionData(solutionBoardState) {
    let solutionData = [];
    for (rowI in solutionBoardState) {
      for (colI in solutionBoardState[rowI]) {
        let colChar = solutionBoardState[rowI][colI];
        // We're interested in the indexes of all
        // bits that are colored. White bits are excluded.
        if (colChar != 'W') {
          solutionData.push({rowIndex: rowI, colIndex: colI, colorChar: colChar});
        }
      }
    }

    return solutionData;
  }

  _checkBits(currentBoardState) {
    let bitsToFlip = this._solutionData.length,
        correctlyFlipped = 0;

    for (index in this._solutionData) {
      let entry = this._solutionData[index];
      if (entry.colorChar == currentBoardState[entry.rowIndex][entry.colIndex]) {
        correctlyFlipped += 1;
      }
    }

    return {
      levelID: this.props.levelID,
      // TODO
      //time:
      bitsToFlip: bitsToFlip,
      bitsCorrectlyFlipped: correctlyFlipped,
      percentCorrect: correctlyFlipped == 0 ? 0 : Math.round(correctlyFlipped / bitsToFlip * 100)
    };
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

  _killTimer() {
    if (this._timeoutTimerId) {
      TimerMixin.clearTimeout(this._timeoutTimerId);
    }
  }

  updateBoardState(rowIndex, colIndex, colorChar) {
    if (this._isMounted && this.props.playable) {
      this.setState(previousState => {
        let updatedBoardState = previousState.currentBoardState;
        updatedBoardState[rowIndex][colIndex] = colorChar;
        let checkBits = this._checkBits(updatedBoardState);

        // If the solution has been met, fire the callback.
        if (checkBits.percentCorrect == 100) {
          this.componentWillUnmount();
          this.props.onPlayOver(checkBits)
        }

        return {
          currentBoardState: updatedBoardState
        }
      });
    }
  }

  componentDidMount() {
    this._isMounted = true;
  }

  componentWillUnmount() {
    this._killTimer();
    this._isMounted = false;
  }

  render() {
    let items = this.state.currentBoardState;

    if (this.props.playable) {
      return (
        <View>
          <Grid style={gc.wrapperHUD}>
            <Col>
              <Button
                backgroundColor={gc.red}
                buttonStyle={gc.button}
                fontWeight={'bold'}
                onPress={() => {this.componentWillUnmount(); this.props.onLevelSelect();}}
                title={gc.levelSelect} />
            </Col>
            <Col>
              <Button
                backgroundColor={gc.green}
                buttonStyle={gc.button}
                fontWeight={'bold'}
                onPress={() => {this.componentWillUnmount(); this.props.onLevelRestart();}}
                title={gc.restartGame} />
            </Col>
          </Grid>
          <View style={gc.wrapperBitBoard}>
            <SquareGrid
              rows={this.props.numRows ? this.props.numRows : gc.BitBoard.numRows}
              columns={this.props.numCols? this.props.numCols : gc.BitBoard.numCols}
              items={this._getBits(items)}
              renderItem={(item) => {return (item);}}
            />
          </View>
        </View>
        );
    } else {
      return (
        <View style={gc.wrapperBitBoard}>
          <SquareGrid
            rows={this.props.numRows ? this.props.numRows : gc.BitBoard.numRows}
            columns={this.props.numCols? this.props.numCols : gc.BitBoard.numCols}
            items={this._getBits(items)}
            renderItem={(item) => {return (item);}}
          />
        </View>
      );
    }
  }
}

BitBoard.propTypes = {
  initialBoardState: PropTypes.array,
  solutionBoardState: PropTypes.array,
  playable: PropTypes.bool,
  onPlayOver: PropTypes.func,
  playSeconds: PropTypes.number,
  levelID: PropTypes.number
};