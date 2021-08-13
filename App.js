// Context API

import Auth from "./Context/store/Auth";
import Header from "./Shared/Header";
import { LogBox } from "react-native";
import Main from "./Navigators/Main";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import React from "react";
import { StatusBar } from "expo-status-bar";
import Toast from "react-native-toast-message";
import store from "./Redux/store";

LogBox.ignoreAllLogs(true);

export default function App() {
  return (
    <Auth>
      <Provider store={store}>
        <NavigationContainer>
          <Header />
          <Main />
          <Toast ref={(ref) => Toast.setRef(ref)} />
        </NavigationContainer>
      </Provider>
    </Auth>
  );
}