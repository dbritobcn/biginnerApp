import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AlbumsScreen from './AlbumsScreen';
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
        name="news"
        component={AlbumsScreen}
        options={{title: 'Noticias'}}
      />
    </Stack.Navigator>
  );
};

export default AlbumsStack;
