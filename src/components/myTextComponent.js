import React from 'react';
import {Text, StyleSheet} from 'react-native';

export default function MyTextComponent({children}) {
  return <Text style={styles.text}>{children} Tab</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: 'gray',
  },
});
