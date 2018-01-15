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
  levelSelect:  'Menu',
  // Level Data
  theReds1title: 'The Reds',
  level1Title: 'The Apple',
  level1ID: 1,
  level2Title: 'Barber Shop',
  level2ID: 2,
  level3Title: 'Red Red Wine',
  level3ID: 3,
  level4Title: 'Roses are Red',
  level4ID: 4,
  level5Title: 'Bull\'s Eye',
  level5ID: 5,
  level6Title: 'Red Cross',
  level6ID: 6,
  level7Title: 'Blood In The Water',
  level7ID: 7,
  level8Title: 'Eruption',
  level8ID: 8,
  level9Title: 'Three Red Balloons',
  level9ID: 9,
  level10Title: 'Clipping',
  level10ID: 10,
  levelInstructions: 'Remember the pattern!',
  beginnerLevelDivisor: 6,
  intermediateLevelDivisor: 2.5,
  expertLevelDivisor: 3.0,
  // TODO styles should be moved to their own file.
  // Css colors
  blue: '#02BCD4',
  green: '#77DD77',
  grey: '#797979',
  greyDark: '#2B333B',
  red: '#FF6960',
  white: 'white',
  yellow: '#FFC107',
  yellowLight: '#f9EB70',
  // UI Styles
  buttonContainer: {
    marginTop: '10%'
  },
  button: {
    height: 30,
    borderRadius: 5,
    margin: 5
  },
  colorButton: {
    width: 50,
    height: 50,
    borderRadius: 50,
    margin: 5
  },
 wrapper: {
    margin: 5
  },
  wrapperLevel: {
    marginBottom: 10
  },
  wrapperHUD: {
    alignItems: 'center',
    marginTop: '11%',
    marginBottom: '2.5%',
    justifyContent: 'center'
  },
  wrapperBitHUD: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '10%'
  },
  wrapperTimer:  {
    marginTop: 10
  },
  wrapperTimerTime:  {
    alignItems: 'center',
    borderWidth: 8,
    borderRadius: 70,
    height: 70,
    justifyContent: 'center',
    padding: 1,
    width: 70
  },
  timerText: {
    fontSize: 31,
    fontWeight: 'bold'
  },
  wrapperBitBoard: {
    marginTop: '10%',
    marginLeft: '10%',
    marginRight: '10%',
    height: 400,
    width: '80%'
  },
  wrapperBit: {
		alignSelf: "stretch",
    flex: 1,
		padding: 5
  },
  bit: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  // Misc
  centered: {
    alignItems: 'center',
    flexDirection: 'column'
  },
  // Components
  BitBoard: {
    numRows: 7,
    numCols: 5
  },
  LevelIntro: {
    levelStartSeconds: 3
  },
  // Misc
  storeKeyPrefix: 'key_'
}