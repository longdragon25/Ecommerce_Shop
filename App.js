import { StyleSheet, Text, View } from 'react-native';

import Main from './Navigators/Main'
import {NavigationContainer} from '@react-navigation/native'
import React from 'react';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <NavigationContainer>
      <Main/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
