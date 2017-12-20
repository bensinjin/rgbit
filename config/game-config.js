// This file is for configuration.
// Configuration should ONLY exist here if it's:
//
// 1) Reusable
// 2) Required across more than one file
// 3) A public facing string
export default {
  // Shared config
  // Strings
  appTitle: 'RGBit',
  colorStateBlue: 'blue',
  colorStateGreen: 'green',
  colorStateRed: 'red',
  colorStateWhite: 'white',
  levelStartBtn: 'Begin',
  restartGame: 'Restart',
  levelSelect:  'Level Select',
  // Levels
  level1Title: 'The Thin Red Line',
  level1Time: 10,
  level2Title: 'Red Green Blue',
  level2Time: 10,
  level3Title: 'The Scepter On A Hill',
  level3Time: 15,
  level4Title: 'The Test',
  level4Time: 15,
  // Css colors
  blue: '#02BCD4',
  green: '#77DD77',
  grey: '#9E9E9E',
  greyDark: '#2B333B',
  red: '#ff6960',
  white: 'white',
  // UI Styles
  button: {
    height: 30,
  },
  homeButton: {
    marginTop: 5,
    height: 30,
  },
  buttonText: {
  },
  centered: {
    alignItems: 'center',
    flexDirection: 'column',
  },
  countDownCircle: {
    radius: 40,
    borderWidth: 15
  },
  // Components
  BitBoard: {
    numRows: 7,
    numCols: 5,
  },
  LevelIntro: {
    defaultLevelStartMillis: 3000
  },
  // Misc
  storeKeyPrefix: 'key_'
}