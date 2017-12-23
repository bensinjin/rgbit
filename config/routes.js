import { StackNavigator } from 'react-navigation';
import Home from '../components/screens/Home';
import BeginnerLevelSelect from '../components/screens/BeginnerLevelSelect';
import { Level1Intro, Level2Intro, Level3Intro, Level4Intro, Level5Intro } from '../components/screens/LevelIntros';
import { Level1, Level2, Level3, Level4, Level5 } from '../components/screens/LevelsBeginner';
import gc from './game-config';

const Routes = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      headerLeft: null
    }
  },
  BeginnerLevelSelect: {
    screen: BeginnerLevelSelect,
    navigationOptions: {
      headerLeft: null
    }
  },
  Level1Intro: {
    screen: Level1Intro,
    navigationOptions: {
      headerLeft: null
    }
  },
  Level1: {
    screen: Level1,
    navigationOptions: {
      headerLeft: null
    }
  },
  Level2Intro: {
    screen: Level2Intro,
    navigationOptions: {
      headerLeft: null
    }
  },
  Level2: {
    screen: Level2,
    navigationOptions: {
      headerLeft: null
    }
  },
  Level3Intro: {
    screen: Level3Intro,
    navigationOptions: {
      headerLeft: null
    }
  },
  Level3: {
    screen: Level3,
    navigationOptions: {
      headerLeft: null
    }
  },
  Level4Intro: {
    screen: Level4Intro,
    navigationOptions: {
      headerLeft: null
    }
  },
  Level4: {
    screen: Level4,
    navigationOptions: {
      headerLeft: null
    }
  },
  Level5Intro: {
    screen: Level5Intro,
    navigationOptions: {
      headerLeft: null
    }
  },
  Level5: {
    screen: Level5,
    navigationOptions: {
      headerLeft: null
    }
  }
});

export default Routes;