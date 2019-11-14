import React from 'react';
import {Text, View} from 'react-native';

import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
// screens

import Home from './screens/Home';
import Events from './screens/Events';
import Others from './screens/Others';
import Mission from './screens/Mission';
// Icon
import Icon from 'react-native-vector-icons/Ionicons';

const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: 'Anasayfa  ',
        tabBarOptions: {
          activeTintColor: '#000',
          inactiveTintColor: '#000',
        },
        tabBarIcon: ({tintColor}) => (
          <Icon name="ios-home" size={40} color={tintColor} />
        ),
      },
    },
    Events: {
      screen: Events,
      navigationOptions: {
        tabBarLabel: 'Etkinlik',
        tabBarOptions: {
          activeTintColor: '#000',
          inactiveTintColor: '#000',
        },
        tabBarIcon: ({tintColor}) => (
          <Icon name="ios-aperture" size={40} color={tintColor} />
        ),
      },
    },

    Mission: {
      screen: Mission,
      navigationOptions: {
        tabBarLabel: 'Görev',
        tabBarOptions: {
          activeTintColor: '#000',
          inactiveTintColor: '#000',
        },
        tabBarIcon: ({tintColor}) => (
          <Icon
            name="ios-checkmark-circle-outline"
            size={40}
            color={tintColor}
          />
        ),
      },
    },
    Others: {
      screen: Others,
      navigationOptions: {
        tabBarLabel: 'Diğer',
        tabBarOptions: {
          activeTintColor: '#000',
          inactiveTintColor: '#000',
        },
        tabBarIcon: ({tintColor}) => (
          <Icon name="ios-grid" size={40} color={tintColor} />
        ),
      },
    },
  },
  {
    tabBarOptions: {
      labelStyle: {
        margin: 0,
        height: 50,
      },
    },
  },
);
export default createAppContainer(TabNavigator);
