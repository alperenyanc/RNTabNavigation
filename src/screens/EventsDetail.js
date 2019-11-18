import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';

export default class EventsDetail extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.Text} > EventsDetail </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  Text:{
    textAlign:'center'
  }
});
