import { connect } from 'react-redux';
import setGameInProgress from '../store/actions';
import Level from '../components/game/Level';

const mapStateToProps = state => ({
  gameInProgress: state.gameInProgress
})

const mapDispatchToProps = dispatch => {
  return {
    setGameInProgress: gameInProgress => {
      dispatch(setGameInProgress(gameInProgress))
    }
  }
}

const LevelContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Level)

export default LevelContainer