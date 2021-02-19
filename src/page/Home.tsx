import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {SectionGrid} from 'react-native-super-grid';
import AlbumCard from '../components/AlbumCard';

const styles = StyleSheet.create({
  grid: {flex: 1, paddingHorizontal: 3},
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
    // textAlign: 'right',
  },
  itemContainerStyle: {
    padding: 5,
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
        {id: 1, name: 'Album 1'},
        {id: 2, name: 'Album 2'},
        {id: 3, name: 'Album 3'},
        {id: 4, name: 'Album 4'},
      ],
    },
    {
      title: 'Artist 1',
      data: [
        {id: 1, name: 'Album 1'},
        {id: 2, name: 'Album 2'},
        {id: 3, name: 'Album 3'},
        {id: 4, name: 'Album 4'},
      ],
    },
  ];
  const content = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((item) => <AlbumCard />);
  return (
    <View style={styles.root}>
      {/* <AlbumCard /> */}
      <SectionGrid
        spacing={1}
        style={styles.grid}
        itemContainerStyle={styles.itemContainerStyle}
        itemDimension={150}
        sections={sections}
        renderItem={({item, section}) => (
          <AlbumCard title={item.name} id={item.id} />
        )}
        renderSectionHeader={({section}) => (
          <Text style={styles.categoryTitle}>{section.title}</Text>
        )}
      />
    </View>
  );
};

export default HomePage;
