import 'react-native-gesture-handler';
import React from 'react';
import {Box, UtilityThemeProvider} from 'react-native-design-utility';
import {NavigationContainer} from '@react-navigation/native';
import {ApolloProvider} from '@apollo/react-hooks';
import TrackPlayer from 'react-native-track-player';

import {theme} from './src/constants/theme';
import MainStackNavigator from './src/navigators/MainStackNavigator';
import {client} from './src/graphql/client';
import trackPlayerServices from './src/services/trackPlayerServices';
import {ActivityIndicator} from 'react-native';
import {PlayerContextProvider} from './src/contexts/PlayerContext';

const App = () => {
  const [isReady, setIsReady] = React.useState<boolean>(false);

  React.useEffect(() => {
    TrackPlayer.setupPlayer().then(() => {
      console.log('player is setup');
      TrackPlayer.registerPlaybackService(() => trackPlayerServices);
      setIsReady(true);
    });
  }, []);

  return (
    <UtilityThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        {isReady ? (
          <PlayerContextProvider>
            <NavigationContainer>
              <MainStackNavigator />
            </NavigationContainer>
          </PlayerContextProvider>
        ) : (
          <Box f={1} center>
            <ActivityIndicator />
          </Box>
        )}
      </ApolloProvider>
    </UtilityThemeProvider>
  );
};

export default App;
