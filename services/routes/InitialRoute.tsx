import { View, Text } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../pages/Home';

const AppStack = createStackNavigator();

const InitialRoute = ({signOut}) => {
  return (
    <AppStack.Navigator>
        <AppStack.Screen name="Home">
            {() => <Home signOut={signOut}/>}
        </AppStack.Screen>
    </AppStack.Navigator>
  );
};

export default InitialRoute;
