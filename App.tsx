import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  NavigationContainer,
  DefaultTheme,
  useNavigation,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomePage from './src/page/Home';

export type RootStackParamList = {
  Home: undefined;
  Album: undefined;
};
const App = () => {
  const RootStack = createStackNavigator<RootStackParamList>();

  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      notification: '#2a2d31',
    },
  };

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="white" hidden />
      <NavigationContainer theme={MyTheme}>
        <RootStack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName="Home">
          <RootStack.Screen name="Home" component={HomePage} />
        </RootStack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
