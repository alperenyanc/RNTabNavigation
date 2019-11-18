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

        tabBarIcon: ({tintColor}) => (
          <Icon name="ios-home" size={35} color={tintColor} />
        ),
      },
    },
    Events: {
      screen: Events,
      navigationOptions: {
        tabBarLabel: 'Etkinlik',

        tabBarIcon: ({tintColor}) => (
          <Icon name="ios-aperture" size={35} color={tintColor} />
        ),
      },
    },

    Mission: {
      screen: Mission,
      navigationOptions: {
        tabBarLabel: 'Görev',

        tabBarIcon: ({tintColor}) => (
          <Icon
            name="ios-checkmark-circle-outline"
            size={35}
            color={tintColor}
          />
        ),
      },
    },
    Others: {
      screen: Others,
      navigationOptions: {
        tabBarLabel: 'Diğer',

        tabBarIcon: ({tintColor}) => (
          <Icon name="ios-grid" size={35} color={tintColor} />
        ),
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: '#000',
      activeBackgroundColor: '#9999',
      inactiveTintColor: '#000',
      inactiveBackgroundColor: '#f2f2f2',
      style: {
        marginLeft: 17,
        marginRight: 17,
        paddingTop: 5,

        height: 60,
      },
    },
  },
);
export default createAppContainer(TabNavigator);
