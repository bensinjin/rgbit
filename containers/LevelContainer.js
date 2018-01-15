import { connect } from 'react-redux';
import {
  setLevelInProgress,
  resetLevelCurrentBoardState,
  updateLevelCurrentBoardState,
  updateLevelCurrentBoardColorState,
} from '../store/actions';
import Level from '../components/game/Level';

const mapStateToProps = state => ({
  levelInProgress: state.levelInProgress,
  levelCurrentBoardState: state.levelCurrentBoardState,
  levelCurrentBoardColorState: state.levelCurrentBoardColorState
})

const mapDispatchToProps = dispatch => {
  return {
    setLevelInProgress: levelInProgress => {
      dispatch(setLevelInProgress(levelInProgress));
    },
    resetLevelCurrentBoardState: () => {
      dispatch(resetLevelCurrentBoardState());
    },
    updateLevelCurrentBoardState: (rowIndex, colIndex, colorChar) => {
      dispatch(updateLevelCurrentBoardState(rowIndex, colIndex, colorChar));
    },
    updateLevelCurrentBoardColorState: levelCurrentBoardColorState => {
      dispatch(updateLevelCurrentBoardColorState(levelCurrentBoardColorState));
    },
  }
}

const LevelContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Level)

export default LevelContainer