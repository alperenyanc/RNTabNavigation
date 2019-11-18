import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Button,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';

export default class Events extends Component {
  render() {
    const {navigate} = this.props.navigation;

    return (
      <View style={styles.container}>
        <Text> Events </Text>
        <Button
          color={'white'}
          
          title="go to event detail"
          onPress={() => navigate('EventsDetail')}
        />
        <ScrollView
          style={{backgroundColor: '#f2f2f2',borderWidth:2,borderColor:'#999'}}
          showsHorizontalScrollIndicator={false}
          horizontal={true}>
          <TouchableOpacity>
            <Image
              style={styles.imageBox1}
              source={require('../assets/picture1.jpeg')}
              resizeMode="cover"
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={styles.imageBox1}
              source={require('../assets/picture1.jpeg')}
              resizeMode="cover"
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={styles.imageBox1}
              source={require('../assets/picture1.jpeg')}
              resizeMode="cover"
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={styles.imageBox1}
              source={require('../assets/picture1.jpeg')}
              resizeMode="cover"
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={styles.imageBox1}
              source={require('../assets/picture1.jpeg')}
              resizeMode="cover"
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={styles.imageBox1}
              source={require('../assets/picture1.jpeg')}
              resizeMode="cover"
            />
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1 / 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageBox1: {
    height: 100,
    width: 100,
    marginTop: 10,
    marginVertical: 5,
    marginHorizontal: 5,
    borderRadius: 10,
  },
  button: {
    backgroundColor: 'green',
  },
});
