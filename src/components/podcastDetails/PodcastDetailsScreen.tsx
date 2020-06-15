import React from 'react';
import {Box, Text} from 'react-native-design-utility';
import {RouteProp, useRoute} from '@react-navigation/native';
import {FlatList, Image, StyleSheet} from 'react-native';

import {SearchStackRouteParamsList} from '../../navigators/types';

type NavigationParams = RouteProp<SearchStackRouteParamsList, 'PodcastDetails'>;

const PodcastDetailsScreen = () => {
  const {data} = useRoute<NavigationParams>().params ?? {};

  return (
    <Box f={1} bg="white">
      <FlatList
        ListHeaderComponent={
          <>
            <Box dir="row" px="sm" mt="sm" mb="md">
              {data.thumbnail && (
                <Box mr={10}>
                  <Image source={{uri: data.thumbnail}} style={s.thumbnail} />
                </Box>
              )}
              <Box f={1}>
                <Text size="lg" bold>
                  {data.podcastName}
                </Text>
                <Text size="xs" color="grey">
                  {data.artist}
                </Text>
                <Text color="blueLight" size="xs">
                  Subscribed
                </Text>
              </Box>
            </Box>
            <Box px="sm" mb="md">
              <Text>Play last episode</Text>
            </Box>

            <Box px="sm" mb="md">
              <Text bold size="lg">
                Episodes
              </Text>
            </Box>
          </>
        }
        data={[{id: '1'}, {id: '2'}]}
        ItemSeparatorComponent={() => (
          <Box w="100%" px="sm" my="sm">
            <Box style={{height: StyleSheet.hairlineWidth}} bg="greyLighter" />
          </Box>
        )}
        renderItem={() => (
          <Box px="sm">
            <Text size="xs" color="grey">
              FRIDAY
            </Text>
            <Text bold>#400 - The Title</Text>
            <Text size="sm" color="grey" numberOfLines={2}>
              "But I must explain to you how all this mistaken idea of
              denouncing pleasure and praising pain was born and I will give you
              a complete account of the system, and expound the actual teachings
              of the great explorer of the truth, the master-builder of human
              happiness. No one rejects, dislikes, or avoids pleasure itself,
              because it is pleasure, but because those who do not know how to
              pursue pleasure rationally encounter consequences that are
              extremely painful. Nor again is there anyone who loves or pursues
              or desires to obtain pain of itself, because it is pain, but
              because occasionally circumstances occur in which toil and pain
              can procure him some great pleasure. To take a trivial example,
              which of us ever undertakes laborious physical exercise, except to
              obtain some advantage from it? But who has any right to find fault
              with a man who chooses to enjoy a pleasure that has no annoying
              consequences, or one who avoids a pain that produces no resultant
              pleasure?" Section 1.10.33 of "de Finibus Bon
            </Text>
            <Text size="sm" color="grey">
              3hrs. 13min
            </Text>
          </Box>
        )}
        keyExtractor={(item) => item.id}
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
