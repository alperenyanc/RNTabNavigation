import React from 'react';
import {View, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

export default function PostBarButton({onPress}) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        
      }}>
      <TouchableOpacity>
        <Icon name="ios-add" size={35} />
      </TouchableOpacity>
    </View>
  );
}
