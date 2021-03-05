import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Image, Text, FlatList} from 'react-native';
import Header from '../components/Header';
import TrackCard from '../components/TrackCard';
import theme from '../../theme';
import {RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '../../App';
import Divider from '../components/Divider';
import TouchableArea from '../components/TouchableArea';
import PlayIcon from '../assets/PlayIcon';
import PauseIcon from '../assets/PauseOutlinedIcon';
import VolDownIcon from '../assets/VolDownIcon';
import VolUpIcon from '../assets/VolUpIcon';
import TrackPlayer from 'react-native-track-player';

import {Track} from '../types';

const styles = StyleSheet.create({
  root: {
    width: '100%',
    // marginVertical: 8,
    // paddingTop: 15,
    // height: 100,
    // backgroundColor: 'red',
  },
  avatarContainer: {
    position: 'relative',
    width: 120,
    height: 120,
    borderRadius: 100,
    borderColor: theme.colors.primary,
    borderWidth: 2,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    width: 110,
    height: 110,
    borderRadius: 100,
    backgroundColor: '#ccc',
  },
  divider: {marginVertical: 16},
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 20,
    paddingHorizontal: 16,
    color: theme.colors.text,
    textAlign: 'center',
    flex: 1,
  },
  icon: {
    position: 'absolute',
    zIndex: 1,
  },
});

const SoundCard: React.FC<{
  track: Track;
  language: 'en' | 'fa' | 'am';
  onClick?: () => void;
  isPlaying?: boolean;
  isLast?: boolean;
}> = ({track, language, onClick, isPlaying, isLast}) => {
  const {title, imagePath, audioPath} = track;

  const onCardPress = () => {
    if (onClick) {
      onClick();
    }
  };

  console.log(track.imagePath);

  return (
    <TouchableArea style={styles.root} onPress={onCardPress}>
      <Divider style={styles.divider} />

      {Boolean(title) && (
        <View style={styles.container}>
          <View style={styles.avatarContainer}>
            {isPlaying && (
              <PauseIcon size="45" color="white" style={styles.icon} />
            )}

            <Image
              style={[styles.imageContainer, isPlaying && {opacity: 0.5}]}
              source={{
                uri: `file:///storage/emulated/0/museum/${imagePath}`,
              }}
            />
          </View>

          <Text style={[styles.titleText, {fontFamily: theme.fonts[language]}]}>
            {title?.[language]}
          </Text>
        </View>
      )}
      {isLast && <Divider style={styles.divider} />}
    </TouchableArea>
  );
};

export default SoundCard;
