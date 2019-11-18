import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Home from './screens/Home';
import Event from './screens/Events';

import Others from './screens/Others';
import Mission from './screens/Mission';

import TabBarButton from './components/TabBarButton';

const App = createBottomTabNavigator(
  {
    Home: Home,
    Dashboard: Others,
    Settings: Mission,
    Alp: Event,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarButtonComponent: props => (
        <TabBarButton routeName={navigation.state.routeName} {...props} />
      ),
    }),
    initialRouteName: 'Home',
  },
);

export default createAppContainer(App);
