import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import TouchableArea from '../components/TouchableArea';
import theme from '../../theme';
import HomeIcon from '../assets/HomeIcon';
import {useNavigation} from '@react-navigation/native';
import RNLockTask from 'react-native-lock-task';
import {showNavigationBar} from 'react-native-navigation-bar-color';

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 48,
    marginVertical: 24,
  },
  logo: {
    width: 80,
    height: 150,
  },
  homeIcon: {
    height: 65,
    width: 65,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40,
    elevation: 15,
    backgroundColor: theme.colors.primary,
  },
});

const HomePage: React.FC<{rightElement?: React.ReactElement}> = ({
  rightElement,
}) => {
  const navigation = useNavigation();

  const exitKioskMode = () => {
    showNavigationBar();
    RNLockTask.stopLockTask();
  };

  console.log(RNLockTask.getConstants());

  return (
    <View style={styles.header}>
      <TouchableOpacity
        activeOpacity={1}
        delayPressIn={0}
        delayPressOut={0}
        delayLongPress={5000}
        onLongPress={exitKioskMode}>
        <Image style={styles.logo} source={require('../assets/Logo.png')} />
      </TouchableOpacity>
      {!rightElement && (
        <TouchableArea
          style={styles.homeIcon}
          onPress={() => navigation.navigate('Home')}>
          <HomeIcon size="36" color="white" />
        </TouchableArea>
      )}
      {rightElement}
    </View>
  );
};

export default HomePage;
