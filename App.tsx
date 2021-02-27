import React from 'react';
import {StatusBar} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomePage from './src/page/Home';
import AlbumPage from './src/page/Album';
import Theme from './theme';
import {Album} from './src/types';

export type RootStackParamList = {
  Home: undefined;
  Album: {album: Album; language: 'en' | 'fa' | 'am'};
};
const App = () => {
  const RootStack = createStackNavigator<RootStackParamList>();

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="white" hidden />
      <NavigationContainer theme={Theme}>
        <RootStack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName="Home">
          <RootStack.Screen name="Home" component={HomePage} />
          <RootStack.Screen name="Album" component={AlbumPage} />
        </RootStack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
