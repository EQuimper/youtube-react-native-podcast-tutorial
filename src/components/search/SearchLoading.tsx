import React from 'react';
import {ActivityIndicator} from 'react-native';
import {Box} from 'react-native-design-utility';

import {theme} from '../../constants/theme';

const SearchLoading = () => {
  return (
    <Box f={1} center h={300}>
      <ActivityIndicator size="large" color={theme.color.blueLight} />
    </Box>
  );
};

export default SearchLoading;
