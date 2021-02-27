import React from 'react';
import {ViewStyle} from 'react-native';
import {Svg, Path} from 'react-native-svg';

const AlbumIcon: React.FC<{
  color?: string;
  style?: ViewStyle;
  size?: string;
}> = ({color = '#000', style, size = '20'}) => {
  return (
    <Svg style={style} height={size} viewBox="0 0 512 512" width={size}>
      <Path
        fill={color}
        d="m430.94 149.333h-350.546c-44.066 0-78.201 38.845-72.36 82.648l28.8 216c4.816 36.116 35.924 63.352 72.36 63.352h292.946c36.436 0 67.544-27.235 72.36-63.352l28.8-216c5.835-43.761-28.256-82.648-72.36-82.648zm30.728 77.097-28.8 216c-2.045 15.337-15.255 26.903-30.728 26.903h-292.946c-15.473 0-28.683-11.566-30.728-26.903l-28.8-216c-2.459-18.438 11.788-35.097 30.728-35.097h350.546c18.651 0 33.226 16.363 30.728 35.097z"
      />
      <Path
        fill={color}
        d="m85 116.667h341.333c11.598 0 21-9.402 21-21s-9.402-21-21-21h-341.333c-11.598 0-21 9.402-21 21s9.402 21 21 21z"
      />
      <Path
        fill={color}
        d="m117 42h277.333c11.598 0 21-9.402 21-21s-9.402-21-21-21h-277.333c-11.598 0-21 9.402-21 21s9.402 21 21 21z"
      />
      <Path
        fill={color}
        d="m339.725 268.884-64-32c-13.932-6.967-30.392 3.174-30.392 18.783v64.333h-21.667c-35.105 0-63.666 28.561-63.666 63.667s28.561 63.667 63.667 63.667 63.666-28.561 63.666-63.667c0-10.436 0-84.544 0-94.021l33.608 16.805c10.374 5.186 22.987.982 28.175-9.392 5.187-10.374.982-22.989-9.391-28.175zm-94.392 114.783c0 11.947-9.72 21.667-21.667 21.667s-21.666-9.721-21.666-21.667 9.72-21.667 21.667-21.667h21.667v21.667z"
      />
    </Svg>
  );
};
export default AlbumIcon;