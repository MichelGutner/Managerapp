import { View, Text } from 'react-native';
import React from 'react';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import SignIn from '../pages/SignIn';
import Welcome from '../pages/Welcome';
import SignUp from '../pages/SignUp';
import { Theme } from '../../themes/color';
import Confirmation from '../components/Confirmation/Confirmation';

const {Navigator, Screen} = createStackNavigator();
const ContainerStack = createStackNavigator();

const Routes = ({signIn}) => {
  return (
    <ContainerStack.Navigator screenOptions={{headerShown: false}}>
        <ContainerStack.Screen name="AuthPages">
            {() => (
                <Navigator
                    screenOptions={{
                        headerShown: false,
                        cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,
                        cardStyle: { backgroundColor: 'transparent' }
                    }}
                >
                    <Screen name="Welcome" component={Welcome}/>
                    <Screen name="SignIn">{({ navigation }) => <SignIn signIn={signIn} navigation={navigation}/>}</Screen>
                    <Screen name="SignUp" component={SignUp}/>
                </Navigator>
            )}
        </ContainerStack.Screen>
        <ContainerStack.Screen name="Confirmation" component={Confirmation}/>
    </ContainerStack.Navigator>
  );
};

export default Routes;
