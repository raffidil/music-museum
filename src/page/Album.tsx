import React from 'react';
import {View, StyleSheet} from 'react-native';
import Header from '../components/Header';
import theme from '../../theme';
import {RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '../../App';

const styles = StyleSheet.create({
  root: {
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
  },
  backButton: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 16,
    borderColor: theme.colors.primary,
  },
  backButtonText: {
    marginLeft: 8,
    fontSize: 20,
    color: theme.colors.primary,
    fontFamily: 'Poppins-Regular',
  },
  InfoContainer: {
    flexDirection: 'row',
    width: '100%',
    height: 150,
    // backgroundColor: 'red',
    marginTop: 16,
  },
  imageContainer: {
    height: '100%',
    width: 150,
    backgroundColor: theme.colors.primary,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoContentContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
    padding: 16,
  },
  albumTitleText: {
    fontSize: 28,
    fontFamily: 'Poppins-SemiBold',
    color: theme.colors.text,
  },
  artistTitleText: {
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold',
    color: theme.colors.text,
  },
  trackCounts: {
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    color: theme.colors.secondaryText,
  },
  divider: {
    width: '100%',
    height: 1,
    marginVertical: 8,
    backgroundColor: theme.colors.divider,
  },
  tracksTitle: {
    fontFamily: 'Poppins-SemiBold',
    marginVertical: 24,
    fontSize: 24,
    color: theme.colors.text,
  },
  grid: {flex: 1},
});

type AlbumPageRouteProp = RouteProp<RootStackParamList, 'Album'>;

type Props = {
  route: AlbumPageRouteProp;
};

const AlbumPage = ({route}: Props) => {
  const {data, language} = route?.params;

  return (
    <View style={styles.root}>
      <Header />
    </View>
  );
};

export default AlbumPage;
