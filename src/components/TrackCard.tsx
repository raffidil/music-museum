/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import theme from '../../theme';
import PlayIcon from '../assets/PlayIcon';
import {useNavigation} from '@react-navigation/native';
import {Track} from '../types';
import PauseIcon from '../assets/PauseIcon';

export const CARD_HIGHT = 75;

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: CARD_HIGHT,
    backgroundColor: theme.colors.card,
    borderRadius: 12,
    // padding: 8,
    elevation: 2,
    marginVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageContainer: {
    width: CARD_HIGHT,
    height: CARD_HIGHT,
    backgroundColor: `${theme.colors.primary}`,
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

const TrackCard: React.FC<{
  track: Track;
  language: 'en' | 'fa' | 'am';
  onClick?: () => void;
  isPlaying?: boolean;
}> = ({track, language, onClick, isPlaying}) => {
  const {title, imagePath, audioPath} = track;
  const onCardPress = () => {
    if (onClick) {
      onClick();
    }
  };
  return (
    <TouchableOpacity
      onPress={onCardPress}
      style={[
        styles.root,
        {flexDirection: language === 'fa' ? 'row-reverse' : 'row'},
      ]}
      activeOpacity={0.6}
      delayPressIn={0}
      delayPressOut={0}>
      <View
        style={[
          styles.imageContainer,
          language === 'fa'
            ? {
                borderBottomRightRadius: 12,
                borderTopRightRadius: 12,
              }
            : {
                borderBottomLeftRadius: 12,
                borderTopLeftRadius: 12,
              },
        ]}>
        {isPlaying ? (
          <PauseIcon size="40" color="white" />
        ) : (
          <PlayIcon size="40" color="white" />
        )}
      </View>

      {Boolean(title) && (
        <View style={styles.titleContainer}>
          <Text
            style={[
              styles.titleText,
              {fontFamily: theme.fonts[language]},
              language === 'fa' ? {textAlign: 'right'} : {textAlign: 'left'},
            ]}>
            {title?.[language]}
          </Text>
        </View>
      )}

      {/* <Text style={styles.trackCountText}>03:40</Text> */}
    </TouchableOpacity>
  );
};

export default TrackCard;
