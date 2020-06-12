import 'react-native-gesture-handler';
import React from 'react';
import {UtilityThemeProvider} from 'react-native-design-utility';
import {NavigationContainer} from '@react-navigation/native';
import {ApolloProvider} from '@apollo/react-hooks';

import {theme} from './src/constants/theme';
import MainStackNavigator from './src/navigators/MainStackNavigator';
import {client} from './src/graphql/client';

const App = () => {
  return (
    <UtilityThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <NavigationContainer>
          <MainStackNavigator />
        </NavigationContainer>
      </ApolloProvider>
    </UtilityThemeProvider>
  );
};

export default App;
