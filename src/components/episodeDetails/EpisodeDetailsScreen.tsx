import React from 'react';
import {Box, Text} from 'react-native-design-utility';
import {useRoute} from '@react-navigation/native';
import {Image, ScrollView, TouchableOpacity} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

import {FeedQuery_feed, SearchQuery_search} from '../../types/graphql';
import {theme} from '../../constants/theme';
import {humanDuration} from '../../lib/dateTimeHelpers';
import {usePlayerContext} from '../../contexts/PlayerContext';
import HtmlReader from '../HtmlReader';

const EpisodeDetailsScreen = () => {
  const playerContext = usePlayerContext();

  const routeParams = (useRoute().params ?? {}) as {
    episode: FeedQuery_feed;
    podcast: SearchQuery_search;
  };

  console.log('routeParams.episode.duration', routeParams.episode.duration);

  return (
    <Box bg="white" f={1}>
      <ScrollView>
        <Box px="sm" mt="sm">
          <Box dir="row" mb="sm">
            <Box h={60} w={60} radius={10} style={{overflow: 'hidden'}} mr={10}>
              <Image
                source={{
                  uri:
                    routeParams.episode.image ?? routeParams.podcast.thumbnail,
                }}
                style={{flex: 1}}
              />
            </Box>
            <Box f={1}>
              <Text weight="bold" size="sm">
                {routeParams.episode.title}
              </Text>
            </Box>
            <Box w={50} />
          </Box>

          <Box dir="row" align="center" mb="sm">
            <TouchableOpacity
              onPress={() => {
                playerContext.play({
                  title: routeParams.episode.title,
                  artwork:
                    routeParams.episode.image ?? routeParams.podcast.thumbnail,
                  id: routeParams.episode.linkUrl,
                  url: routeParams.episode.linkUrl,
                  artist: routeParams.podcast.artist,
                });
              }}>
              <FeatherIcon
                name="play"
                size={30}
                color={theme.color.blueLight}
              />
            </TouchableOpacity>
            <Box>
              <Text weight="bold" size="sm">
                Play
              </Text>
              <Text color="grey" size="xs">
                {humanDuration(routeParams.episode.duration)}
              </Text>
            </Box>
          </Box>

          <Box bg="greyLightest" h={1} mb="sm" />

          <Box>
            <Text size="xl" weight="bold">
              Episode Notes
            </Text>
            <HtmlReader html={routeParams.episode.description} />
          </Box>
        </Box>
      </ScrollView>
    </Box>
  );
};

export default EpisodeDetailsScreen;
