import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import theme from '../../theme';
import TouchableArea from './TouchableArea';

const styles = StyleSheet.create({
  artistContainer: {
    flexDirection: 'column',
    // justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    // backgroundColor: 'red',
    flex: 1,
  },
  artistAvatarContainer: {
    width: 110,
    height: 110,
    borderRadius: 100,
    borderColor: theme.colors.primary,
    borderWidth: 2,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  artistImageContainer: {
    width: 98,
    height: 98,
    borderRadius: 100,

    backgroundColor: '#ccc',
  },
  basedArtistName: {
    fontFamily: 'VazirRegular',
    marginTop: 4,
    fontSize: 18,
    textAlign: 'center',
    // backgroundColor: 'blue',
  },
  artistName: {
    marginTop: 4,
    fontSize: 18,
    textAlign: 'center',
  },
});

const ArtistItem: React.FC<{
  data: {title?: string};
  language: 'english' | 'persian' | 'armenian';
}> = ({data, language}) => {
  const navigation = useNavigation();

  const onItemPress = () => {
    navigation.navigate('Album', {language: language, data: data});
  };
  return (
    <TouchableArea onPress={onItemPress} style={styles.artistContainer}>
      <View style={styles.artistAvatarContainer}>
        <Image
          style={styles.artistImageContainer}
          source={require('../assets/test.jpg')}
        />
      </View>

      <Text style={[styles.artistName, {fontFamily: theme.fonts[language]}]}>
        {data?.title}
      </Text>
    </TouchableArea>
  );
};

export default ArtistItem;