import React, { Component } from 'react';
import { getScoreData } from '../../utils';
import gc from '../../config/game-config';
import {resetNavigation} from '../../utils';

export default class LevelSelect extends Component {

  constructor(props) {
    super(props);
    this.state = {};
    // Populate state from score data.
    const data = getScoreData();
    for (const index in data) {
      const scoreDataPromise = data[index];
      scoreDataPromise.then(result => {
        if (result && result.levelID){
          this.setState(() => {
            const key = 'level' + result.levelID + 'Score',
                  obj = {};
            obj[key] = result;
            return obj;
          });
        }
      })
    }
    this._onBannerPress = this._onBannerPress.bind(this);
  }

  _getBgColor(scoreProp) {
    return this.state[scoreProp] && this.state[scoreProp].percentCorrect >= 100 ? gc.red : gc.greyDark;
  }

  _getTitle(scoreProp, title) {
    return this.state[scoreProp] ? title + ' - ' + this.state[scoreProp].percentCorrect + '% complete' : title;
  }

  _onPress(route) {
    resetNavigation(route, this.props.navigation);
  }

  _onBannerPress() {
    this.props.navigation.navigate('Home');
  }
}