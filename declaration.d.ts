declare module '*.gif';
declare module '*.png';
declare module '*.svg' {
  import {SvgProps} from 'react-native-svg';

  const content: React.FC<SvgProps>;
  export default content;
}

declare module 'js-yaml';
declare module 'react-native-track-player/lib/hooks';
declare module 'react-native-track-player/lib/eventTypes';
declare module 'react-native-track-player/lib/ProgressComponent';
