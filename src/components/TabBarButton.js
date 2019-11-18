import React from 'react';
import {View, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

const iconMap = {
  Home: 'home',
  Dashboard: 'dashboard',
  Settings: 'gear',
  Alp :'gear'
};

export default function TabBarButton({routeName, onPress}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity onPress={onPress}>
        <Icon name={iconMap[routeName]} size={29} />
      </TouchableOpacity>
    </View>
  );
}
