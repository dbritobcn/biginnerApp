import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import VideosScreen from './VideosScreen';
import colors from '../../res/colors';

const Stack = createStackNavigator();

const VideosStack = () => {
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
        name="videos"
        component={VideosScreen}
        options={{title: 'Videos'}}
      />
    </Stack.Navigator>
  );
};

export default VideosStack;
