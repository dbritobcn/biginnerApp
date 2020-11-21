import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import InterviewsScreen from './InterviewsScreen';
import colors from '../../res/colors';

const Stack = createStackNavigator();

const InterviewsStack = () => {
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
        name="interviews"
        component={InterviewsScreen}
        options={{title: 'Entrevistas'}}
      />
    </Stack.Navigator>
  );
};

export default InterviewsStack;
