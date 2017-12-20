import { StackNavigator } from 'react-navigation';
import Home from '../components/screens/Home';
import Level1Intro from '../components/screens/Level1Intro';
import Level1 from '../components/screens/Level1';
import Level2Intro from '../components/screens/Level2Intro';
import Level2 from '../components/screens/Level2';
import Level3Intro from '../components/screens/Level3Intro';
import Level3 from '../components/screens/Level3';
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
  Level2Intro: {
    screen: Level2Intro
  },
  Level2: {
    screen: Level2,
    navigationOptions: {
      headerLeft: null
    }
  },
  Level3Intro: {
    screen: Level3Intro
  },
  Level3: {
    screen: Level3,
    navigationOptions: {
      headerLeft: null
    }
  },
});

export default Routes;