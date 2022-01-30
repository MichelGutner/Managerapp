import Amplify from "@aws-amplify/core";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { LogBox, StatusBar } from "react-native";
import config from './aws-exports';
import { Background } from "./services/components/background";
import DataProvider from "./services/contexts/DataProvider";
import AuthLoadingScreen from "./services/routes/AuthRoutes";

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);


Amplify.configure(config);

export default function () {
  return (
    <NavigationContainer>
      <DataProvider>
        <Background>
          <StatusBar
            barStyle='light-content'
            backgroundColor='transparent'
            translucent
          />
          <AuthLoadingScreen />
        </Background>
      </DataProvider>
    </NavigationContainer>


  )
}