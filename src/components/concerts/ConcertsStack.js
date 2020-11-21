import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ConcertsScreen from './ConcertsScreen';
import colors from '../../res/colors';

const Stack = createStackNavigator();

const ConcertsStack = () => {
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
        name="concerts"
        component={ConcertsScreen}
        options={{title: 'Conciertos'}}
      />
    </Stack.Navigator>
  );
};

export default ConcertsStack;
