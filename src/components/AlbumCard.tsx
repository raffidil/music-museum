import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: 200,
    backgroundColor: '#0288d1',
    borderRadius: 12,
    // padding: 8,
    elevation: 5,
    flexDirection: 'column',
    alignItems: 'center',
  },
  titleContainer: {
    width: '100%',
    height: 80,
    backgroundColor: '#00000050',
    marginTop: 'auto',
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    justifyContent: 'center',
    // paddingVertical: 16,
    paddingHorizontal: 16,
    // jus: 'center',
  },
  titleText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    color: 'white',
  },
});

const AlbumCard: React.FC<{title?: string; id: number}> = ({title, id}) => {
  return (
    <TouchableOpacity
      style={styles.root}
      activeOpacity={0.6}
      delayPressIn={0}
      delayPressOut={0}>
      {Boolean(title) && (
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>{title}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default AlbumCard;
