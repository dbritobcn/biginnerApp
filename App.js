import React from 'react';
import NewsScreen from './src/components/news/NewsScreen';
import AlbumsScreen from './src/components/albums/AlbumsScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="news"
          component={NewsScreen}
          options={{title: 'Noticias'}}
        />
        <Stack.Screen
          name="albums"
          component={AlbumsScreen}
          options={{title: 'Discos'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
