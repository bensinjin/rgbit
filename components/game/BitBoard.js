import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import SquareGrid from 'react-native-square-grid';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Button } from 'react-native-elements'
import TimerMixin from 'react-timer-mixin';
import gc from '../../config/game-config';
import Bit from './Bit';
import Timer from './Timer';

export default class BitBoard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentBoardState: this.props.initialBoardState,
      boardColorState: gc.colorStateRed
    };
    this.updateBoardState = this.updateBoardState.bind(this);
    this._solutionData = this.props.playable ? this._getSolutionData(this.props.solutionBoardState) : [];
  }

  _getColorButtonValue() {
    return this._activeColorButtonValue;
  }

  _getColorButtonStyle(colorState) {
    let activeBorderColor = gc.grey,
        activeBorderWidth = 5;

    return this.state.boardColorState == colorState ?
      [{borderWidth: activeBorderWidth , borderColor: activeBorderColor}, gc.colorButton] :
      gc.colorButton;
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
                updateBoardState={this.updateBoardState}
                boardColorState={this.state.boardColorState} />
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
      this._timeoutTimerId = null;
    }
  }

  _updateBoardColorState(colorState) {
    this.setState(previousState => {
      return {
        boardColorState: colorState
      }
    });
  }

  updateBoardState(rowIndex, colIndex, colorChar) {
    if (this._isMounted && this.props.playable) {
      this.setState(previousState => {
        let updatedBoardState = previousState.currentBoardState;
        updatedBoardState[rowIndex][colIndex] = colorChar;
        let checkBits = this._checkBits(updatedBoardState);

        // If the solution has been met, fire the callback.
        if (checkBits.percentCorrect == 100 && this._timeoutTimerId) {
          this._killTimer();
          this.props.onPlayOver(checkBits)
        }

        return {
          currentBoardState: updatedBoardState
        }
      });
    }
  }

  componentDidMount() {
    // Initialize the timer.
    if (this.props.playable) {
      this._timeoutTimerId = TimerMixin.setTimeout(() => {
        if (this._isMounted && this.props.onPlayOver) {
          this._killTimer();
          let checkBits = this._checkBits(this.state.currentBoardState);
          this.props.onPlayOver(checkBits);
        }
      }, this.props.playSeconds * 1000);
    }
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
            <Col size={2}>
              <Button
                backgroundColor={gc.red}
                buttonStyle={gc.button}
                fontWeight={'bold'}
                onPress={() => {this._killTimer(); this.props.onLevelSelect();}}
                title={gc.levelSelect} />
            </Col>
            <Col size={1}>
              <Timer timeLeftSeconds={this.props.playSeconds} />
            </Col>
            <Col size={2}>
              <Button
                backgroundColor={gc.green}
                buttonStyle={gc.button}
                fontWeight={'bold'}
                onPress={() => {this._killTimer(); this.props.onLevelRestart();}}
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
            <Grid style={gc.wrapperBitHUD}>
              <Col>
                <Button
                  backgroundColor={gc.red}
                  buttonStyle={this._getColorButtonStyle(gc.colorStateRed)}
                  onPress={() => {this._updateBoardColorState(gc.colorStateRed);}} />
              </Col>
              <Col>
                <Button
                  backgroundColor={gc.green}
                  buttonStyle={this._getColorButtonStyle(gc.colorStateGreen)}
                  onPress={() => {this._updateBoardColorState(gc.colorStateGreen);}} />
              </Col>
              <Col>
                <Button
                  backgroundColor={gc.blue}
                  buttonStyle={this._getColorButtonStyle(gc.colorStateBlue)}
                  onPress={() => {this._updateBoardColorState(gc.colorStateBlue);}} />
              </Col>
              <Col>
                <Button
                  backgroundColor={gc.white}
                  buttonStyle={this._getColorButtonStyle(gc.colorStateWhite)}
                  onPress={() => {this._updateBoardColorState(gc.colorStateWhite);}} />
              </Col>
            </Grid>
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