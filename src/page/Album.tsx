import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {FlatGrid} from 'react-native-super-grid';
import ItemCard from '../components/ItemCard';
import theme from '../../theme';

import HomeIcon from '../assets/HomeIcon';
import {useNavigation, useRoute} from '@react-navigation/native';
import AlbumIcon from '../assets/AlbumIcon';

const styles = StyleSheet.create({
  root: {
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
    padding: 16,
  },
  backButton: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 16,
    borderColor: theme.colors.primary,
  },
  backButtonText: {
    marginLeft: 8,
    fontSize: 20,
    color: theme.colors.primary,
    fontFamily: 'Poppins-Regular',
  },
  InfoContainer: {
    flexDirection: 'row',
    width: '100%',
    height: 150,
    // backgroundColor: 'red',
    marginTop: 16,
  },
  imageContainer: {
    height: '100%',
    width: 150,
    backgroundColor: theme.colors.primary,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoContentContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
    padding: 16,
  },
  albumTitleText: {
    fontSize: 28,
    fontFamily: 'Poppins-SemiBold',
    color: theme.colors.text,
  },
  artistTitleText: {
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold',
    color: theme.colors.text,
  },
  trackCounts: {
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    color: theme.colors.secondaryText,
  },
  divider: {
    width: '100%',
    height: 1,
    marginVertical: 8,
    backgroundColor: theme.colors.divider,
  },
  tracksTitle: {
    fontFamily: 'Poppins-SemiBold',
    marginVertical: 24,
    fontSize: 24,
    color: theme.colors.text,
  },
  grid: {flex: 1},
});

const AlbumPage: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {data} = route?.params;

  console.log(data);

  return (
    <View style={styles.root}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        activeOpacity={0.6}
        delayPressIn={0}
        delayPressOut={0}
        style={styles.backButton}>
        <HomeIcon size="27" color={theme.colors.primary} />
        <Text style={styles.backButtonText}>Go Back To Home Page</Text>
      </TouchableOpacity>
      <View style={styles.InfoContainer}>
        <View style={styles.imageContainer}>
          <AlbumIcon size="80" color="white" />
        </View>
        <View style={styles.infoContentContainer}>
          <Text style={styles.albumTitleText}>{data.name}</Text>
          {Boolean(data.artistName) && <View style={styles.divider} />}
          {Boolean(data.artistName) && (
            <Text style={styles.artistTitleText}>{data.artistName}</Text>
          )}
        </View>
      </View>
      <Text style={styles.tracksTitle}>Tracks</Text>
      <FlatGrid
        style={styles.grid}
        spacing={1}
        itemDimension={250}
        data={data.tracks}
        renderItem={({item, section}) => <ItemCard data={item} />}
      />
    </View>
  );
};

export default AlbumPage;
