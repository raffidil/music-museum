import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {SectionGrid} from 'react-native-super-grid';
import ItemCard from '../components/ItemCard';
import theme from '../../theme';
const styles = StyleSheet.create({
  grid: {
    flex: 1,
    paddingHorizontal: 3,
  },
  root: {
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
  },
  categoryTitle: {
    fontSize: 28,
    fontFamily: 'Poppins-Bold',
    marginTop: 24,
    paddingHorizontal: 16,
    color: theme.colors.text,
    // textAlign: 'right',
  },
  itemContainerStyle: {
    padding: 7,
    // backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    // width: '40%',
  },
});

const HomePage: React.FC = () => {
  const sections = [
    {
      title: 'Artist 1',
      data: [
        {
          id: 1,
          name: 'Album 1',
          artistName: 'Artist Name',
          type: 'album',
          tracks: [
            {
              name: 'Track 1',
              artistName: 'Artist Name specific',
              type: 'track',
            },
          ],
        },
        {
          id: 2,
          name: 'Album 2',
          type: 'album',
          tracks: [
            {
              name: 'Track 1',
              artistName: 'Artist Name specific',
              type: 'track',
            },
          ],
        },
        {id: 3, name: 'Album 3', type: 'album'},
        {id: 4, name: 'Single 1', type: 'single', artistName: 'Artist Name'},
      ],
    },
  ];

  return (
    <View style={styles.root}>
      <SectionGrid
        spacing={1}
        style={styles.grid}
        itemContainerStyle={styles.itemContainerStyle}
        itemDimension={250}
        sections={sections}
        renderItem={({item, section}) => <ItemCard data={item} />}
        renderSectionHeader={({section}) => (
          <Text style={styles.categoryTitle}>{section.title}</Text>
        )}
      />
    </View>
  );
};

export default HomePage;
