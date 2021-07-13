import { StyleSheet, Text, View } from 'react-native';

import Header from './Shared/Header'
import Main from './Navigators/Main'
import {NavigationContainer} from '@react-navigation/native'
import React from 'react';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <NavigationContainer>
      <Header/>
      <Main/>
    </NavigationContainer>
  );
}


