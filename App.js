import React from 'react';
import {Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import colors from './src/res/colors';
import NewsStack from './src/components/news/NewsStack';
import AlbumsStack from './src/components/albums/AlbumsStack';

const Tab = createBottomTabNavigator();

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          tintColor: '#fefefe',
          style: {
            backgroundColor: colors.zircon,
          },
        }}>
        <Tab.Screen
          name="News"
          component={NewsStack}
          options={{
            title: 'Noticias',
            tabBarIcon: ({color, size}) => (
              <Image
                style={{tintColor: color, width: size, height: size}}
                source={require('./src/assets/images/tabs/news.png')}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Albums"
          component={AlbumsStack}
          options={{
            title: 'Discos',
            tabBarIcon: ({color, size}) => (
              <Image
                style={{tintColor: color, width: size, height: size}}
                source={require('./src/assets/images/tabs/disc.png')}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
