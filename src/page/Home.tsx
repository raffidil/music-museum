import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, PermissionsAndroid} from 'react-native';
import {FlatGrid} from 'react-native-super-grid';
import ArtistItem from '../components/ArtistItem';
import TouchableArea from '../components/TouchableArea';
import Divider from '../components/Divider';
import Header from '../components/Header';
import theme from '../../theme';
import AsyncStorage from '@react-native-async-storage/async-storage';
import rnfs from 'react-native-fs';
import jsYaml from 'js-yaml';
import {Content} from '../types';
import RNLockTask from 'react-native-lock-task';
import {hideNavigationBar} from 'react-native-navigation-bar-color';
const styles = StyleSheet.create({
  grid: {
    flex: 1,
  },
  gridContentContainer: {
    paddingTop: 12,
    alignItems: 'center',
  },
  root: {
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 48,
    marginVertical: 32,
  },
  logo: {
    width: 80,
    height: 150,
  },
  homeIcon: {
    height: 65,
    width: 65,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40,
    elevation: 15,
    backgroundColor: theme.colors.primary,
  },
  languageSelectorContainer: {
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  languageButton: {
    width: 120,
    height: 40,
    backgroundColor: theme.colors.unfocused,
    borderRadius: 50,
    margin: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  faLang: {
    fontFamily: theme.fonts.fa,
    color: 'white',
    fontSize: 22,
  },
  armLang: {
    color: 'white',
    fontSize: 19,
    fontFamily: theme.fonts.am,
  },
  engLang: {
    color: 'white',
    fontFamily: theme.fonts.en,
    fontSize: 20,
    lineHeight: 50,
  },
  selectedLang: {
    backgroundColor: theme.colors.primary,
  },
  title: {
    fontSize: 32,
    textAlign: 'center',
    marginBottom: 12,
  },
});

const readContent = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
    );
    if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
      return;
    }
    const content = await rnfs.readFile(
      '/storage/emulated/0/museum/content.yaml',
      'utf8',
    );
    const json = jsYaml.load(content);
    return json;
  } catch (err) {
    console.error(err.message, err.code);
  }
};

const HomePage: React.FC = () => {
  const [languageState, setLanguageState] = useState<'en' | 'fa' | 'am'>('fa');
  const [content, setContent] = useState<Content | null>(null);
  useEffect(() => {
    readContent().then((res) => {
      setContent(res);
    });
  }, []);

  console.log('content: ', content);

  useEffect(() => {
    hideNavigationBar();
    RNLockTask.startLockTask();
  }, []);

  const getLanguage = async () => {
    try {
      const value = await AsyncStorage.getItem('language');
      console.log(value);

      if (value !== null) {
        setLanguageState(value as 'en' | 'fa' | 'am');
        return value;
      } else {
        setLanguageState('fa');
        setLanguage('fa');
        return 'fa';
      }
    } catch (e) {
      // error reading value
    }
  };

  const setLanguage = async (value: 'en' | 'fa' | 'am') => {
    try {
      await AsyncStorage.setItem('language', value);
      setLanguageState(value);
    } catch (e) {
      // saving error
    }
  };

  getLanguage();

  return (
    <View style={styles.root}>
      <Header
        rightElement={
          <View style={styles.languageSelectorContainer}>
            <TouchableArea
              onPress={() => setLanguage('fa')}
              style={[
                styles.languageButton,
                languageState === 'fa' && styles.selectedLang,
              ]}>
              <Text style={styles.faLang}>فارسی</Text>
            </TouchableArea>
            <TouchableArea
              onPress={() => setLanguage('am')}
              style={[
                styles.languageButton,
                languageState === 'am' && styles.selectedLang,
              ]}>
              <Text style={styles.armLang}>ՀԱՅԵՐԵՆ</Text>
            </TouchableArea>
            <TouchableArea
              onLongPress={() => {
                console.log('device owner deactivated!');
                RNLockTask.clearDeviceOwnerApp();
              }}
              delayLongPress={5000}
              onPress={() => setLanguage('en')}
              style={[
                styles.languageButton,
                languageState === 'en' && styles.selectedLang,
              ]}>
              <Text style={styles.engLang}>ENGLISH</Text>
            </TouchableArea>
          </View>
        }
      />

      <Text style={[styles.title, {fontFamily: theme.fonts[languageState]}]}>
        {content?.homeTitle?.[languageState]}
      </Text>

      <Divider />

      <FlatGrid
        itemDimension={130}
        data={content?.albums || []}
        style={styles.grid}
        contentContainerStyle={styles.gridContentContainer}
        spacing={10}
        renderItem={({item}) => (
          <ArtistItem album={item} language={languageState} />
        )}
      />
    </View>
  );
};

export default HomePage;
