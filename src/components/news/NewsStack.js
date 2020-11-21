import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import NewsScreen from './NewsScreen';
import NewsDetail from './NewsDetail';

import colors from '../../res/colors';

const Stack = createStackNavigator();

const NewsStack = () => {
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
        component={NewsScreen}
        options={{title: 'Noticias'}}
      />
      <Stack.Screen
        name="newsDetail"
        component={NewsDetail}
        options={{title: 'Noticia'}}
      />
    </Stack.Navigator>
  );
};

export default NewsStack;
