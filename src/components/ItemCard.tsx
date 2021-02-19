import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import theme from '../../theme';
import AlbumIcon from '../assets/AlbumIcon';
import SingleIcon from '../assets/SingleIcon';
import TrackIcon from '../assets/TrackIcon';
import {useNavigation} from '@react-navigation/native';

export const CARD_HIGHT = 75;

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: CARD_HIGHT,
    backgroundColor: theme.colors.card,
    borderRadius: 12,
    // padding: 8,
    elevation: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageContainer: {
    width: CARD_HIGHT,
    height: CARD_HIGHT,
    backgroundColor: `${theme.colors.primary}`,
    borderBottomLeftRadius: 12,
    borderTopLeftRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    // backgroundColor: 'red',
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    padding: 16,
  },
  titleText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    color: theme.colors.text,
  },
  trackCountText: {
    marginHorizontal: 16,
    fontFamily: 'Poppins-SemiBold',
    color: '#8e8e8e',
    fontSize: 12,
    lineHeight: 14,
  },
  singleArtistName: {
    fontFamily: 'Poppins-SemiBold',
    color: '#8e8e8e',
    fontSize: 12,
    lineHeight: 14,
  },
});

const Card: React.FC<{
  data: {
    name?: string;
    type?: string;
    artistName?: string;
    tracks?: {name?: string; artistName?: string}[];
  };
}> = ({data}) => {
  const {name, type, tracks} = data;
  const navigation = useNavigation();
  const onCardPress = () => {
    if (type === 'album') navigation.navigate('Album', {data: data});
  };
  return (
    <TouchableOpacity
      onPress={onCardPress}
      style={styles.root}
      activeOpacity={0.6}
      delayPressIn={0}
      delayPressOut={0}>
      <View style={styles.imageContainer}>
        {type === 'album' && <AlbumIcon size="40" color="white" />}
        {type === 'single' && <SingleIcon size="40" color="white" />}
        {type === 'track' && <TrackIcon size="40" color="white" />}
      </View>

      {Boolean(name) && (
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>{name}</Text>
          {type === 'single' && Boolean(data.artistName) && (
            <Text style={styles.singleArtistName}>{data.artistName}</Text>
          )}
        </View>
      )}

      {type === 'album' && tracks?.length && (
        <Text style={styles.trackCountText}>
          {tracks?.length} track{tracks?.length > 1 ? 's' : ''}
        </Text>
      )}

      {(type === 'single' || type === 'track') && (
        <Text style={styles.trackCountText}>03:40</Text>
      )}
    </TouchableOpacity>
  );
};

export default Card;
