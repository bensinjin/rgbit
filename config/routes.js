import { StackNavigator } from 'react-navigation';
import Home from '../components/screens/Home';
import TheReds1 from '../components/screens/TheReds1';
import TheReds1LevelSelect from '../components/screens/TheReds1LevelSelect';
import * as TR1 from '../components/screens/TheReds1';
import * as TR1I from '../components/screens/TheReds1LevelIntros';
import gc from './game-config';

const Routes = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      headerLeft: null
    }
  },
  TheReds1LevelSelect: {
    screen: TheReds1LevelSelect
  },
  Level1Intro: {
    screen: TR1I.Level1Intro,
    navigationOptions: {
      headerLeft: null
    }
  },
  Level1: {
    screen: TR1.Level1,
    navigationOptions: {
      headerLeft: null
    }
  },
  Level2Intro: {
    screen: TR1I.Level2Intro,
    navigationOptions: {
      headerLeft: null
    }
  },
  Level2: {
    screen: TR1.Level2,
    navigationOptions: {
      headerLeft: null
    }
  },
  Level3Intro: {
    screen: TR1I.Level3Intro,
    navigationOptions: {
      headerLeft: null
    }
  },
  Level3: {
    screen: TR1.Level3,
    navigationOptions: {
      headerLeft: null
    }
  },
  Level4Intro: {
    screen: TR1I.Level4Intro,
    navigationOptions: {
      headerLeft: null
    }
  },
  Level4: {
    screen: TR1.Level4,
    navigationOptions: {
      headerLeft: null
    }
  },
  Level5Intro: {
    screen: TR1I.Level5Intro,
    navigationOptions: {
      headerLeft: null
    }
  },
  Level5: {
    screen: TR1.Level5,
    navigationOptions: {
      headerLeft: null
    }
  },
  Level6Intro: {
    screen: TR1I.Level6Intro,
    navigationOptions: {
      headerLeft: null
    }
  },
  Level6: {
    screen: TR1.Level6,
    navigationOptions: {
      headerLeft: null
    }
  }
});

export default Routes;