import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
// screens

import Home from './screens/Home';
import Events from './screens/Events';
import Others from './screens/Others';
import Mission from './screens/Mission';
import EventsDetail from './screens/EventsDetail';
import PostModal from './screens/PostModal';
import MissionDetail from './screens/MissionDetail';
// Icon
import Icon from 'react-native-vector-icons/Ionicons';
//PostButtons
import PostBarButton from './components/TabBarButton';

const MissionStack = createStackNavigator(
  {
    Mission: {
      screen: Mission,
    },
    MissionDetail: {
      screen: MissionDetail,
    },
  },
  {
    headerLayoutPreset: 'center',
  },
);

const EventStack = createStackNavigator(
  {
    Envents: {
      screen: Events,
      navigationOptions: {},
    },
    EventsDetail: {
      screen: EventsDetail,
    },
  },
  {
    headerLayoutPreset: 'center',
  },
);

const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon name="ios-home" size={35} color={tintColor} />
        ),
      },
    },
    Events: {
      screen: EventStack,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon name="ios-aperture" size={35} color={tintColor} />
        ),
      },
    },
    Post: {
      screen: PostModal,
      navigationOptions: {
        tabBarButtonComponent: () => (
          <View
            style={{
              flex: 1,
              alignSelf: 'center',
              alignItems: 'center',
              justifyContent: 'center',
              width: 70,
              height: 70,
              borderRadius: 30,
              borderColor: 'black',
              borderWidth: 1,
              position: 'relative',
              bottom: 20,
              margin: 10,
            }}>
            <TouchableOpacity
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'center',
              }}>
              <Icon name="ios-add" size={50} />
            </TouchableOpacity>
          </View>
        ),
        tabBarLabel: '   ',
      },
    },

    Mission: {
      screen: MissionStack,
      navigationOptions: {
        tabBarLabel: 'Contacts',
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
