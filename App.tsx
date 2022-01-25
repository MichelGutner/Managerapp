import Amplify from "@aws-amplify/core";
import React from "react";
import { LogBox, StatusBar } from "react-native";
import config from './aws-exports';
import { Background } from "./services/components/background";
import AuthLoadingScreen from "./services/routes/AuthRoutes";

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);


Amplify.configure(config);

export default function () {
  return (
      <Background>
        <StatusBar
          barStyle='default'
          backgroundColor='transparent'
          translucent
        />
        <AuthLoadingScreen />
      </Background>

  )
}