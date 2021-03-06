import React, {Component} from 'react';
import 'react-native-gesture-handler';
import {Text, StyleSheet, View} from 'react-native';
import Router from './src/Router';

export default class App extends Component {
  render() {
    return <Router />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
