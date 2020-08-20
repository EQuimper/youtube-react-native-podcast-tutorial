import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import MainTabNavigator from './MainTabNavigator';
import PlayerScreen from '../components/player/PlayerScreen';
import QueueScreen from '../components/queue/QueueScreen';

const MainStack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <MainStack.Navigator headerMode="none" mode="modal">
      <MainStack.Screen name="Tabs" component={MainTabNavigator} />
      <MainStack.Screen name="Player" component={PlayerScreen} />
      <MainStack.Screen name="Queue" component={QueueScreen} />
    </MainStack.Navigator>
  );
};

export default MainStackNavigator;
