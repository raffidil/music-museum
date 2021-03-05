import React from 'react';
import {ViewStyle} from 'react-native';
import {Svg, Path} from 'react-native-svg';

const AlbumIcon: React.FC<{
  color?: string;
  style?: ViewStyle;
  size?: string;
}> = ({color = '#000', style, size = '20'}) => {
  return (
    <Svg
      id="Layer_paused"
      height={size}
      viewBox="0 0 512 512"
      width={size}
      style={style}>
      <Path
        fill={color}
        d="m436.508 74.94c-99.913-99.913-261.64-99.928-361.567 0-99.913 99.913-99.928 261.64 0 361.567 99.913 99.913 261.64 99.928 361.567 0 99.912-99.912 99.927-261.639 0-361.567zm-180.784 394.45c-117.816 0-213.667-95.851-213.667-213.667s95.851-213.666 213.667-213.666 213.666 95.851 213.666 213.667-95.85 213.666-213.666 213.666z"
      />
      <Path
        fill={color}
        d="m298.39 160.057c-11.598 0-21 9.402-21 21v149.333c0 11.598 9.402 21 21 21s21-9.402 21-21v-149.333c0-11.598-9.401-21-21-21z"
      />
      <Path
        fill={color}
        d="m213.057 160.057c-11.598 0-21 9.402-21 21v149.333c0 11.598 9.402 21 21 21s21-9.402 21-21v-149.333c0-11.598-9.401-21-21-21z"
      />
    </Svg>
  );
};
export default AlbumIcon;
