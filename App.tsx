import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomePage from './src/page/Home';
import AlbumPage from './src/page/Album';
import Theme from './theme';

export type RootStackParamList = {
  Home: undefined;
  Album: {data: any};
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
