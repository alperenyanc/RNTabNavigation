import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';

export default class MissionDetail extends Component {
  static navigationOptions = ({navigation}) => {
    console.log(navigation.getParam('user'));
    const user = navigation.getParam('user');
    return {
      title: `${user.name.first} ${user.name.last}`,
    };
  };
  render() {
    return (
      <View style={styles.container}>
        <Text> Contact Detail </Text>
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
