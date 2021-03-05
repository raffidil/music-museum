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
      id="Layer_1"
      height={size}
      viewBox="0 0 512 512"
      width={size}
      style={style}>
      <Path
        fill={color}
        d="m436.508 74.941c-99.913-99.913-261.639-99.928-361.566 0-99.914 99.912-99.93 261.64 0 361.567 99.913 99.913 261.639 99.928 361.566 0 99.913-99.912 99.929-261.64 0-361.567zm-180.784 394.45c-117.816 0-213.667-95.851-213.667-213.667s95.851-213.666 213.667-213.666 213.667 95.851 213.667 213.667-95.85 213.666-213.667 213.666z"
      />
      <Path
        fill={color}
        d="m332.617 239.148-96-74.667c-13.774-10.715-33.893-.863-33.893 16.577v149.333c0 17.563 20.25 27.186 33.893 16.577l96-74.667c10.796-8.398 10.809-24.745 0-33.153zm-87.893 48.305v-63.458l40.795 31.729z"
      />
    </Svg>
  );
};
export default AlbumIcon;
