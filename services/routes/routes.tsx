import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Confirmation from '../components/Confirmation/Confirmation';
import MetaDetails from '../components/metaDetails';
import Home from '../pages/Home';
import MercadoLivrePage from '../pages/MercadoLivre';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Welcome from '../pages/Welcome';

const { Navigator, Screen } = createStackNavigator();
const ContainerStack = createStackNavigator();

const Routes = ({ signIn, signOut }) => {
    return (
        <ContainerStack.Navigator screenOptions={{ headerShown: false }}>
            <ContainerStack.Screen name="AuthPages">
                {() => (
                    <Navigator
                        screenOptions={{
                            headerShown: false,
                            cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
                            cardStyle: { backgroundColor: 'transparent' }
                        }}
                    >
                        <Screen name="Welcome" component={Welcome} />
                        <Screen name="SignIn">
                            {({ navigation }) => <SignIn signIn={signIn} navigation={navigation} />}
                        </Screen>
                        <Screen name="SignUp" component={SignUp} />
                        <ContainerStack.Screen name="Confirmation" component={Confirmation} />
                        <Screen name="MetaDetails" component={MetaDetails} />
                    </Navigator>
                )}
            </ContainerStack.Screen>
        </ContainerStack.Navigator>
    );
};

export default Routes;
