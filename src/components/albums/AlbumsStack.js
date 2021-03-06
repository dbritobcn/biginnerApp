import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AlbumsScreen from './AlbumsScreen';
import AlbumsDetail from './AlbumsDetail';
import colors from '../../res/colors';

const Stack = createStackNavigator();

const AlbumsStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.zircon,
          shadowColor: colors.zircon,
        },
        headerTintColor: colors.charade,
      }}>
      <Stack.Screen
        name="albums"
        component={AlbumsScreen}
        options={{title: 'Discos'}}
      />
      <Stack.Screen
        name="albumsDetail"
        component={AlbumsDetail}
        options={{title: ''}}
      />
    </Stack.Navigator>
  );
};

export default AlbumsStack;
