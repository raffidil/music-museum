import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Image, Text, FlatList} from 'react-native';
import Header from '../components/Header';
import TrackCard from '../components/TrackCard';
import theme from '../../theme';
import {RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '../../App';
import Divider from '../components/Divider';
import TouchableArea from '../components/TouchableArea';
import SoundCard from '../components/SoundCard';
import PlayIcon from '../assets/PlayIcon';
import PauseIcon from '../assets/PauseIcon';
import VolDownIcon from '../assets/VolDownIcon';
import VolUpIcon from '../assets/VolUpIcon';
import TrackPlayer from 'react-native-track-player';

import {Track} from '../types';

const styles = StyleSheet.create({
  root: {
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
  },
  artistRoot: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  artistAvatarContainer: {
    width: 150,
    height: 150,
    borderRadius: 100,
    borderColor: theme.colors.primary,
    borderWidth: 2,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  artistImageContainer: {
    width: 132,
    height: 132,
    borderRadius: 100,
    backgroundColor: '#ccc',
  },
  infoContainer: {
    paddingHorizontal: 16,
    marginTop: 4,
    flex: 1,
    flexDirection: 'column',
  },
  artistName: {
    fontSize: 26,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  trackTitleText: {
    fontSize: 18,
    textAlign: 'center',
    color: theme.colors.text,
    marginBottom: 7,
  },
  controlsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  divider: {marginTop: 24},
  infoDivider: {
    marginVertical: 8,
    width: '100%',
  },
  tracksRoot: {
    width: '100%',
    height: '100%',
    paddingHorizontal: 40,
  },
  tracksContentContainer: {
    paddingVertical: 24,
  },
  singlesContentContainer: {
    paddingBottom: 24,
  },
  controllerButton: {
    marginHorizontal: 10,
  },
  flatList: {
    height: 100,
    paddingHorizontal: 40,
  },
  singlePlaybackController: {
    marginBottom: 16,
  },
});

type AlbumPageRouteProp = RouteProp<RootStackParamList, 'Album'>;

type Props = {
  route: AlbumPageRouteProp;
};

const AlbumPage = ({route}: Props) => {
  const {album, language} = route?.params;
  const [selectedTrack, setSelectedTrack] = useState<Track | null>(null);
  const [playerState, setPlayerState] = useState<'playing' | 'paused' | 'idle'>(
    'idle',
  );

  useEffect(() => {
    TrackPlayer.setupPlayer().then(() => {
      // The player is ready to be used
    });

    const onPlaybackStateChange = TrackPlayer.addEventListener(
      'playback-state',
      async (data) => {
        const stateNumber = data.state;
        console.log(stateNumber);
        switch (stateNumber) {
          case 3:
            setPlayerState('playing');
            break;
          case 2:
            setPlayerState('paused');
            break;
          // case 1:
          //   setPlayerState('idle');
          //   break;

          default:
            setPlayerState('idle');
            break;
        }

        // this.setState({trackTitle: track.title});
      },
    );
    const stopMusic = async () => {
      await TrackPlayer.stop();
    };

    return () => {
      console.log('exit');
      onPlaybackStateChange.remove();
      stopMusic();
    };
  }, []);

  const start = async ({audioPath, title, imagePath}) => {
    // Set up the player
    await TrackPlayer.setupPlayer();

    // Add a track to the queue
    await TrackPlayer.add({
      id: 'trackId',
      url: `file:///storage/emulated/0/museum/${audioPath}`,
      title: title,
      artist: album.title[language],
      artwork: `file:///storage/emulated/0/museum/${imagePath}`,
    });

    // Start playing it
    await TrackPlayer.play();
  };

  const volDown = async () => {
    const vol = await TrackPlayer.getVolume();
    await TrackPlayer.setVolume(vol - 0.2);
  };

  const volUp = async () => {
    const vol = await TrackPlayer.getVolume();
    await TrackPlayer.setVolume(vol + 0.2);
  };

  const showPlayback = playerState === 'playing' || playerState === 'paused';

  return (
    <View style={styles.root}>
      <Header />
      {album?.type !== 'sound' && (
        <View style={styles.artistRoot}>
          <View style={styles.artistAvatarContainer}>
            <Image
              style={styles.artistImageContainer}
              source={{
                uri: `file:///storage/emulated/0/museum/${album?.avatarPath}`,
              }}
            />
          </View>
          <View style={styles.infoContainer}>
            <Text
              style={[styles.artistName, {fontFamily: theme.fonts[language]}]}>
              {album?.title?.[language]}
            </Text>
            {showPlayback && <Divider style={styles.infoDivider} />}
            {showPlayback && (
              <Text
                style={[
                  styles.trackTitleText,
                  {fontFamily: theme.fonts[language]},
                ]}>
                {selectedTrack?.title[language]}
              </Text>
            )}

            {showPlayback && (
              <View style={styles.controlsContainer}>
                <TouchableArea
                  onPress={volDown}
                  style={styles.controllerButton}>
                  <VolDownIcon size="45" color={theme.colors.primary} />
                </TouchableArea>
                <TouchableArea
                  style={styles.controllerButton}
                  onPress={() => {
                    if (playerState === 'playing') {
                      TrackPlayer.pause();
                    } else {
                      TrackPlayer.play();
                    }
                  }}>
                  {playerState !== 'playing' && (
                    <PlayIcon size="45" color={theme.colors.primary} />
                  )}
                  {playerState === 'playing' && (
                    <PauseIcon size="45" color={theme.colors.primary} />
                  )}
                </TouchableArea>
                <TouchableArea style={styles.controllerButton} onPress={volUp}>
                  <VolUpIcon size="45" color={theme.colors.primary} />
                </TouchableArea>
              </View>
            )}
          </View>
        </View>
      )}
      {album?.type !== 'sound' && <Divider style={styles.divider} />}
      {album?.type !== 'sound' && (
        <FlatList
          style={styles.flatList}
          data={album?.tracks}
          contentContainerStyle={styles.tracksContentContainer}
          renderItem={(item) => {
            const isPlaying =
              `${item?.item?.title.en}_${item?.item?.audioPath}` ===
                `${selectedTrack?.title.en}_${selectedTrack?.audioPath}` &&
              playerState === 'playing';
            return (
              <TrackCard
                language={language}
                track={item?.item}
                isPlaying={isPlaying}
                onClick={() => {
                  if (isPlaying) {
                    TrackPlayer.pause();
                  } else {
                    start({
                      audioPath: item?.item?.audioPath,
                      imagePath: item?.item?.imagePath,
                      title: item?.item?.title[language],
                    });
                  }
                  setSelectedTrack(item?.item);
                }}
              />
            );
          }}
          keyExtractor={(item) => `${item?.title.en}_${item?.audioPath}`}
        />
      )}
      {album?.type === 'sound' && !showPlayback && (
        <View style={{height: 62}} />
      )}
      {album?.type === 'sound' && showPlayback && (
        <View
          style={[styles.controlsContainer, styles.singlePlaybackController]}>
          <TouchableArea onPress={volDown} style={styles.controllerButton}>
            <VolDownIcon size="45" color={theme.colors.primary} />
          </TouchableArea>
          <TouchableArea
            style={styles.controllerButton}
            onPress={() => {
              if (playerState === 'playing') {
                TrackPlayer.pause();
              } else {
                TrackPlayer.play();
              }
            }}>
            {playerState !== 'playing' && (
              <PlayIcon size="45" color={theme.colors.primary} />
            )}
            {playerState === 'playing' && (
              <PauseIcon size="45" color={theme.colors.primary} />
            )}
          </TouchableArea>
          <TouchableArea style={styles.controllerButton} onPress={volUp}>
            <VolUpIcon size="45" color={theme.colors.primary} />
          </TouchableArea>
        </View>
      )}
      {album?.type === 'sound' && (
        <FlatList
          style={styles.flatList}
          data={album?.tracks}
          contentContainerStyle={styles.singlesContentContainer}
          renderItem={(item) => {
            const isPlaying =
              `${item?.item?.title.en}_${item?.item?.audioPath}` ===
                `${selectedTrack?.title.en}_${selectedTrack?.audioPath}` &&
              playerState === 'playing';
            return (
              <SoundCard
                isLast={item?.index === album?.tracks?.length - 1}
                language={language}
                track={item?.item}
                isPlaying={isPlaying}
                onClick={() => {
                  if (isPlaying) {
                    TrackPlayer.pause();
                  } else {
                    start({
                      audioPath: item?.item?.audioPath,
                      imagePath: item?.item?.imagePath,
                      title: item?.item?.title[language],
                    });
                  }
                  setSelectedTrack(item?.item);
                }}
              />
            );
          }}
          keyExtractor={(item) => `${item?.title.en}_${item?.audioPath}`}
        />
      )}
    </View>
  );
};

export default AlbumPage;
