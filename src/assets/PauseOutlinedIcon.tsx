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
        d="M124.5,0h-35c-44.112,0-80,35.888-80,80v352c0,44.112,35.888,80,80,80h35c44.112,0,80-35.888,80-80V80
			C204.5,35.888,168.612,0,124.5,0z M164.5,432c0,22.056-17.944,40-40,40h-35c-22.056,0-40-17.944-40-40V80
			c0-22.056,17.944-40,40-40h35c22.056,0,40,17.944,40,40V432z"
      />
      <Path
        fill={color}
        d="M482.5,352c11.046,0,20-8.954,20-20V80c0-44.112-35.888-80-80-80h-34c-44.112,0-80,35.888-80,80v352
			c0,44.112,35.888,80,80,80h34c44.112,0,80-35.888,80-80c0-11.046-8.954-20-20-20c-11.046,0-20,8.954-20,20
			c0,22.056-17.944,40-40,40h-34c-22.056,0-40-17.944-40-40V80c0-22.056,17.944-40,40-40h34c22.056,0,40,17.944,40,40v252
			C462.5,343.046,471.454,352,482.5,352z"
      />
    </Svg>
  );
};
export default AlbumIcon;
