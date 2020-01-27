import type {Node} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const HomeScreen: () => Node = Platform.select({
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

export default HomeScreen;
