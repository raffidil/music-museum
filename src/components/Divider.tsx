import React from 'react';
import {StyleSheet, ViewStyle} from 'react-native';
import theme from '../../theme';
import LinearGradient from 'react-native-linear-gradient';

const styles = StyleSheet.create({
  divider: {
    width: 400,
    height: 2,
    alignSelf: 'center',
  },
});

const ArtistItem: React.FC<{style?: ViewStyle}> = ({style}) => {
  return (
    <LinearGradient
      colors={['transparent', theme.colors.unfocused, 'transparent']}
      start={{x: 0, y: 1}}
      end={{x: 1, y: 1}}
      style={[styles.divider, style]}
    />
  );
};

export default ArtistItem;
