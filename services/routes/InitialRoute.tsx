import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import MetaDetails from '../components/metaDetails';
import Home from '../pages/Home';
import StorageDate from '../pages/StorageData';

const AppStack = createStackNavigator();

const InitialRoute = ({ signOut }) => {
  return (
    <AppStack.Navigator screenOptions={{
      headerShown: false,
      cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
      cardStyle: { backgroundColor: 'transparent' }
    }}>
      <AppStack.Screen name="Home">
        {() => <Home signOut={signOut} />}
      </AppStack.Screen>
      <AppStack.Screen name="MetaDetails" component={MetaDetails} />
      <AppStack.Screen name="Sellers" component={StorageDate} />
    </AppStack.Navigator>
  );
};

export default InitialRoute;
