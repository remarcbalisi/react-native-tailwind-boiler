import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import 'react-native-gesture-handler';
import HomeScreen from './src/screens/HomeScreen';
import MessagesScreen from './src/screens/MessagesScreen';

const TabNavigator = createBottomTabNavigator({
  Home: HomeScreen,
  Messages: MessagesScreen,
});

export default createAppContainer(TabNavigator);
