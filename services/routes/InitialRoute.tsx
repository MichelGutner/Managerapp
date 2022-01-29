import { View, Text } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../pages/Home';
import MercadoLivrePage from '../pages/MercadoLivre';
import SignUp from '../pages/SignUp';

const AppStack = createStackNavigator();

const InitialRoute = ({signOut, navigation}) => {
  return (
    <AppStack.Navigator screenOptions={{headerShown: false}}>
        <AppStack.Screen name="Home">
            {() => <Home navigation={navigation} signOut={signOut} />}
        </AppStack.Screen>
    </AppStack.Navigator>
  );
};

export default InitialRoute;
