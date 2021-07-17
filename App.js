import { LogBox, StyleSheet, Text, View } from 'react-native';

import Header from './Shared/Header'
import Main from './Navigators/Main'
import {NavigationContainer} from '@react-navigation/native'
import { Provider } from 'react-redux';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import store from './Redux/store';

LogBox.ignoreAllLogs(true)

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
      <Header/>
      <Main/>
      </NavigationContainer>
    </Provider>
    
  );
}


