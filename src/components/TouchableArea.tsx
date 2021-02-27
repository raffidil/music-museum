import {TouchableOpacity} from 'react-native';
import React from 'react';

const TouchableArea: React.FC<any> = (props) => {
  const {children} = props;
  return (
    <TouchableOpacity
      {...props}
      activeOpacity={0.8}
      delayPressIn={0}
      delayPressOut={0}>
      {children}
    </TouchableOpacity>
  );
};

export default TouchableArea;
