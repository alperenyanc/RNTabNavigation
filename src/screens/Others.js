import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';

export default class Others extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Others </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
