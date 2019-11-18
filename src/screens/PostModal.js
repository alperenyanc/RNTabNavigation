import React, {Component} from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';

export default class PostModal extends Component {
  render() {
    const {goBack} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.title}> Post Modal </Text>
        <Button
          title="Close"
          onPress={() => {
            goBack();
          }}
        />
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
  title: {
    fontSize: 34,
  },
});
