import React from 'react';
import {
  createBottomTabNavigator,
  BottomTabBar,
} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import FeatherIcon from 'react-native-vector-icons/Feather';

import ListenNowScreen from '../components/listenNow/ListenNowScreen';
import SearchScreen from '../components/search/SearchScreen';
import LibraryScreen from '../components/library/LIbraryScreen';
import PodcastDetailsScreen from '../components/podcastDetails/PodcastDetailsScreen';
import {theme} from '../constants/theme';
import MiniPlayer from '../components/miniPlayer/MiniPlayer';

const ListenNowStack = createStackNavigator();

const ListenNowStackNavigator = () => {
  return (
    <ListenNowStack.Navigator>
      <ListenNowStack.Screen
        options={{
          title: 'Listen Now',
        }}
        name="ListenNow"
        component={ListenNowScreen}
      />
    </ListenNowStack.Navigator>
  );
};

const SearchStack = createStackNavigator();

const SearchStackNavigator = () => {
  return (
    <SearchStack.Navigator
      screenOptions={{
        headerTintColor: theme.color.blueLight,
        headerTitleStyle: {
          color: theme.color.black,
        },
      }}>
      <SearchStack.Screen name="Search" component={SearchScreen} />
      <SearchStack.Screen
        name="PodcastDetails"
        component={PodcastDetailsScreen}
        options={{headerTitle: ''}}
      />
    </SearchStack.Navigator>
  );
};

const LibraryStack = createStackNavigator();

const LibraryStackNavigator = () => {
  return (
    <LibraryStack.Navigator>
      <LibraryStack.Screen name="Library" component={LibraryScreen} />
    </LibraryStack.Navigator>
  );
};

const ICON_SIZE = 24;

const MainTab = createBottomTabNavigator();

const MainTabNavigator = () => {
  return (
    <MainTab.Navigator
      tabBar={(tabsProps) => (
        <>
          <MiniPlayer />
          <BottomTabBar {...tabsProps} />
        </>
      )}
      tabBarOptions={{
        activeTintColor: theme.color.blueLight,
      }}>
      <MainTab.Screen
        name="ListenNow"
        options={{
          title: 'Listen Now',
          tabBarIcon: (props) => (
            <FeatherIcon
              color={props.color}
              size={ICON_SIZE}
              name="headphones"
            />
          ),
        }}
        component={ListenNowStackNavigator}
      />
      <MainTab.Screen
        name="Library"
        component={LibraryStackNavigator}
        options={{
          tabBarIcon: (props) => (
            <FeatherIcon color={props.color} size={ICON_SIZE} name="inbox" />
          ),
        }}
      />
      <MainTab.Screen
        name="Search"
        component={SearchStackNavigator}
        options={{
          tabBarIcon: (props) => (
            <FeatherIcon color={props.color} size={ICON_SIZE} name="search" />
          ),
        }}
      />
    </MainTab.Navigator>
  );
};

export default MainTabNavigator;
