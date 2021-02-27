import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {FlatGrid} from 'react-native-super-grid';
import ArtistItem from '../components/ArtistItem';
import TouchableArea from '../components/TouchableArea';
import Divider from '../components/Divider';
import Header from '../components/Header';
import theme from '../../theme';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import content from '../content.yaml';
import RNFS from 'react-native-fs';
import jsYaml from 'js-yaml';

const styles = StyleSheet.create({
  grid: {
    flex: 1,
  },
  gridContentContainer: {
    paddingTop: 12,
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
    fontFamily: theme.fonts.persian,
    color: 'white',
    fontSize: 22,
  },
  armLang: {
    color: 'white',
    fontSize: 19,
    fontFamily: theme.fonts.armenian,
  },
  engLang: {
    color: 'white',
    fontFamily: theme.fonts.english,
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
    const content = await RNFS.readFile(
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
  const [languageState, setLanguageState] = useState<
    'english' | 'persian' | 'armenian'
  >('persian');
  const [content, setContent] = useState(null);

  useEffect(() => {
    readContent().then((res) => {
      setContent(res);
    });
  }, []);

  console.log('content: ', content);

  const getLanguage = async () => {
    try {
      const value = await AsyncStorage.getItem('language');
      console.log(value);

      if (value !== null) {
        setLanguageState(value as 'english' | 'persian' | 'armenian');
        return value;
      } else {
        setLanguageState('persian');
        setLanguage('persian');
        return 'persian';
      }
    } catch (e) {
      // error reading value
    }
  };

  const setLanguage = async (value: 'english' | 'persian' | 'armenian') => {
    try {
      await AsyncStorage.setItem('language', value);
      setLanguageState(value);
    } catch (e) {
      // saving error
    }
  };

  getLanguage();

  const items = [
    {name: 'واروژان بارتو', code: '#1abc9c'},
    {name: 'Varujan Barto', code: '#2ecc71'},
    {name: 'Վարուժան', code: '#3498db'},
    {name: 'AMETHYST', code: '#9b59b6'},
    {name: 'WET ASPHALT', code: '#34495e'},
    {name: 'Hamik Alexarewndrian', code: '#3498db'},
    {name: 'AMETHewrYST', code: '#9b59b6'},
    {name: 'WET werASPHALT', code: '#34495e'},
    {name: 'Hamik Alexanrewqrdrian', code: '#3498db'},
    {name: 'AMETHYSrweT', code: '#9b59b6'},
    {name: 'WET ASwrwPHALT', code: '#34495e'},
  ];

  return (
    <View style={styles.root}>
      <Header
        rightElement={
          <View style={styles.languageSelectorContainer}>
            <TouchableArea
              onPress={() => setLanguage('persian')}
              style={[
                styles.languageButton,
                languageState === 'persian' && styles.selectedLang,
              ]}>
              <Text style={styles.faLang}>فارسی</Text>
            </TouchableArea>
            <TouchableArea
              onPress={() => setLanguage('armenian')}
              style={[
                styles.languageButton,
                languageState === 'armenian' && styles.selectedLang,
              ]}>
              <Text style={styles.armLang}>ՀԱՅԵՐԵՆ</Text>
            </TouchableArea>
            <TouchableArea
              onPress={() => setLanguage('english')}
              style={[
                styles.languageButton,
                languageState === 'english' && styles.selectedLang,
              ]}>
              <Text style={styles.engLang}>ENGLISH</Text>
            </TouchableArea>
          </View>
        }
      />

      <Text style={[styles.title, {fontFamily: theme.fonts[languageState]}]}>
        {/* {content?.homeTitle.am} */}
      </Text>

      <Divider />

      <FlatGrid
        itemDimension={130}
        data={items}
        style={styles.grid}
        contentContainerStyle={styles.gridContentContainer}
        spacing={10}
        renderItem={({item}) => (
          <ArtistItem data={{title: item.name}} language={languageState} />
        )}
      />
    </View>
  );
};

export default HomePage;
