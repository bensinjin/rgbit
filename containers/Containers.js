import { connect } from 'react-redux';
import {
  setLevelInProgress,
  resetLevelCurrentBoardState,
  updateLevelCurrentBoardState,
  updateLevelCurrentBoardColorState,
  queueInstantDeathLevel,
  dequeueInstantDeathLevel,
  incrementInstantDeathScoreDisplay,
  decrementInstantDeathScoreDisplay,
  resetInstantDeathScoreDisplay,
} from '../store/actions';
import Level from '../components/game/Level';
import InstantDeathLevel from '../components/game/InstantDeathLevel';

const mapStateToProps = state => ({
  levelInProgress: state.levelInProgress,
  levelCurrentBoardState: state.levelCurrentBoardState,
  levelCurrentBoardColorState: state.levelCurrentBoardColorState,
  instantDeathLevelQueue: state.instantDeathLevelQueue,
  instantDeathScoreDisplay: state.instantDeathScoreDisplay,
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
    queueInstantDeathLevel: levelIntroRoute => {
      dispatch(queueInstantDeathLevel(levelIntroRoute));
    },
    dequeueInstantDeathLevel: () => {
      dispatch(dequeueInstantDeathLevel());
    },
    resetInstantDeathScoreDisplay: () => {
      dispatch(resetInstantDeathScoreDisplay());
    },
    incrementInstantDeathScoreDisplay: () => {
      dispatch(incrementInstantDeathScoreDisplay());
    },
    decrementInstantDeathScoreDisplay: () => {
      dispatch(decrementInstantDeathScoreDisplay());
    }
  }
}

export const LevelContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Level)

export const InstantDeathLevelContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(InstantDeathLevel)