import {DefaultTheme} from '@react-navigation/native';

const Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#69272b',
    card: '#f8f8f8',
    notification: '#2a2d31',
    text: '#102027',
    divider: '#90a4ae',
    unfocused: '#888888',
    secondaryText: '#9e9e9e',
  },
  fonts: {
    armenian: 'Tahoma',
    persian: 'VazirRegular',
    english: 'Poppins-Regular',
  },
};

export default Theme;
