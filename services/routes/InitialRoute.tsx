import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import MetaDetails from '../components/metaDetails';
import Home from '../pages/Home';

const AppStack = createStackNavigator();

const InitialRoute = ({signOut}) => {
  return (
    <AppStack.Navigator screenOptions={{headerShown: false}}>
        <AppStack.Screen name="Home">
            {() => <Home signOut={signOut} />}
        </AppStack.Screen>
        <AppStack.Screen name="MetaDetails" component={MetaDetails}/>
    </AppStack.Navigator>
  );
};

export default InitialRoute;
