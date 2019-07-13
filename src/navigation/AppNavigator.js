import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from '../scence/home/HomePage';
import YoutubeScreen from '../scence/youtube/Youtube';

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Youtube: YoutubeScreen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

export default createAppContainer(AppNavigator);
