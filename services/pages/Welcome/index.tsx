import React from 'react';
import { View } from 'react-native';
import ButtonPage from '../../components/ButtonPages';
import { styles } from './styles';

const Welcome = ({navigation}) => {

    return (
        <View style={styles.container}>
            <ButtonPage
                title='Entrar'
                style={styles.signIn}
                onPress={() => navigation.navigate('SignIn')}
            />
            <ButtonPage
                title='Criar Conta'
                style={styles.signUp}
                onPress={() => navigation.navigate('SignUp')}
            />
        </View>
    );
};

export default Welcome;
