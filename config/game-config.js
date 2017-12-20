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
  level1Title: 'The Thin Red Line',
  restartGame: 'Restart',
  levelSelect:  'Level Select',
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
    numRows: 6,
    numCols: 5,
  },
}