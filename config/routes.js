import { StackNavigator } from 'react-navigation';
import Home from '../components/screens/Home';
import Level1Intro from '../components/screens/Level1Intro';
import Level1 from '../components/screens/Level1';
import gc from './game-config';

const Routes = StackNavigator({
  Home: {
    screen: Home
  },
  Level1Intro: {
    screen: Level1Intro
  },
  Level1: {
    screen: Level1,
    navigationOptions: {
      headerLeft: null
    }
  },
});

export default Routes;