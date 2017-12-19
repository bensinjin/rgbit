import React, { Component } from 'react';
import { View } from 'react-native';
import Routes from './config/routes';
import Home from './components/screens/Home';

export default class App extends Component {
  render() {
    return (
      <Routes />
    );
  }
}