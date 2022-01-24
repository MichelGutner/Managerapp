import Amplify from "@aws-amplify/core";
import { NavigationContainer } from "@react-navigation/native";
import config from './aws-exports';
import React from "react";
import { StatusBar, Text, View } from "react-native";
import { Background } from "./services/components/background";
import Routes from "./services/routes/routes";

Amplify.configure(config);

export default function () {
  return (
    <NavigationContainer>
      <Background>
        <StatusBar
          barStyle='default'
          backgroundColor='transparent'
          translucent
        />
        <Routes/>
      </Background>
    </NavigationContainer>

  )
}