import type {Node} from 'react';
import {Platform, StyleSheet} from 'react-native';
import React from 'react';
import {Text, View} from 'react-native';

const MessagesScreen: () => Node = Platform.select({
  ios: () => (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>HomeScreen!</Text>
    </View>
  ),
  default: () => (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>HomeScreen!</Text>
    </View>
  ),
});

export default MessagesScreen;
