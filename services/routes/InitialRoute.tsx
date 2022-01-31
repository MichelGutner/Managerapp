import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import MetaDetails from '../components/metaDetails';
import Home from '../pages/Home';
import MercadoLivrePage from '../pages/MercadoLivre';

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
      <AppStack.Screen name="Sellers" component={MercadoLivrePage} />
    </AppStack.Navigator>
  );
};

export default InitialRoute;
