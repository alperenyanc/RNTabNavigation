import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';

import MissionList from '../components/MissionList';

export default class Mission extends Component {
  render() {
    return <MissionList navigation={this.props.navigation} />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
