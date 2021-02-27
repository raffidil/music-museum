import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import TouchableArea from '../components/TouchableArea';
import theme from '../../theme';
import HomeIcon from '../assets/HomeIcon';
import {useNavigation} from '@react-navigation/native';

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 48,
    marginVertical: 32,
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

  return (
    <View style={styles.header}>
      <Image style={styles.logo} source={require('../assets/Logo.png')} />
      {!rightElement && (
        <TouchableArea
          style={styles.homeIcon}
          onPress={() => navigation.navigate('Home')}>
          <HomeIcon size="32" color="white" />
        </TouchableArea>
      )}
      {rightElement}
    </View>
  );
};

export default HomePage;
