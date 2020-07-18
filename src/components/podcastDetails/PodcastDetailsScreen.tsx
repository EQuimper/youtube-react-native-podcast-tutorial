import React from 'react';
import {Box, Text} from 'react-native-design-utility';
import {RouteProp, useRoute, useNavigation} from '@react-navigation/native';
import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {useQuery} from '@apollo/react-hooks';

import {SearchStackRouteParamsList} from '../../navigators/types';
import {theme} from '../../constants/theme';
import {FeedQuery, FeedQueryVariables} from '../../types/graphql';
import feedQuery from '../../graphql/query/feedQuery';
import {getWeekDay, humanDuration} from '../../lib/dateTimeHelpers';
import {usePlayerContext} from '../../contexts/PlayerContext';

type NavigationParams = RouteProp<SearchStackRouteParamsList, 'PodcastDetails'>;

const PodcastDetailsScreen = () => {
  const playerContext = usePlayerContext();
  const navigation = useNavigation();
  const {data: podcastData} = useRoute<NavigationParams>().params ?? {};

  const {data, loading} = useQuery<FeedQuery, FeedQueryVariables>(feedQuery, {
    variables: {
      feedUrl: podcastData.feedUrl,
    },
  });

  return (
    <Box f={1} bg="white">
      <FlatList
        ListHeaderComponent={
          <>
            <Box dir="row" px="sm" mt="sm" mb="md">
              {podcastData.thumbnail && (
                <Box mr={10}>
                  <Image
                    source={{uri: podcastData.thumbnail}}
                    style={s.thumbnail}
                  />
                </Box>
              )}
              <Box f={1}>
                <Text size="lg" bold>
                  {podcastData.podcastName}
                </Text>
                <Text size="xs" color="grey">
                  {podcastData.artist}
                </Text>
                <Text color="blueLight" size="xs">
                  Subscribed
                </Text>
              </Box>
            </Box>
            <Box px="sm" mb="md" dir="row" align="center">
              <Box mr={10}>
                <TouchableOpacity
                  onPress={() => {
                    const el = data?.feed[0];

                    if (!el) {
                      return;
                    }

                    playerContext.play({
                      title: el.title,
                      artwork: el.image ?? podcastData.thumbnail,
                      id: el.linkUrl,
                      url: el.linkUrl,
                      artist: podcastData.artist,
                    });
                  }}>
                  <FeatherIcon
                    name="play"
                    size={30}
                    color={theme.color.blueLight}
                  />
                </TouchableOpacity>
              </Box>
              <Box f={1}>
                <Text bold>Play</Text>
                <Text size="sm">{data?.feed[0].title}</Text>
              </Box>
            </Box>

            <Box px="sm" mb="md">
              <Text bold size="lg">
                Episodes
              </Text>
            </Box>

            {loading && (
              <Box h={200} center>
                <ActivityIndicator size="large" color={theme.color.blueLight} />
              </Box>
            )}
          </>
        }
        data={data?.feed}
        ItemSeparatorComponent={() => (
          <Box w="100%" px="sm" my="sm">
            <Box style={{height: StyleSheet.hairlineWidth}} bg="greyLighter" />
          </Box>
        )}
        renderItem={({item}) => (
          <Box px="sm">
            <Text size="xs" color="grey">
              {getWeekDay(new Date(item.pubDate)).toUpperCase()}
            </Text>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('EpisodeDetails', {
                  episode: item,
                  podcast: podcastData,
                })
              }>
              <Text bold>{item.title}</Text>
            </TouchableOpacity>
            <Text size="sm" color="grey" numberOfLines={2}>
              {item.summary}
            </Text>
            <Text size="sm" color="grey">
              {humanDuration(item.duration)}
            </Text>
          </Box>
        )}
        keyExtractor={(item) => item.linkUrl}
      />
    </Box>
  );
};

const s = StyleSheet.create({
  thumbnail: {
    height: 100,
    width: 100,
    borderRadius: 10,
  },
});

export default PodcastDetailsScreen;
