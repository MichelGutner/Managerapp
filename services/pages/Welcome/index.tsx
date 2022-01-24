import React from 'react';
import { View } from 'react-native';
import ButtonPage from '../../components/ButtonPages';
import { styles } from './styles';

const Welcome = ({navigation}) => {

    return (
        <View style={styles.container}>
            <ButtonPage
                title='Entrar'
                backgroundColor={styles.signIn}
                onPress={() => navigation.navigate('SignIn')}
            />
            <ButtonPage
                title='Criar Conta'
                backgroundColor={styles.signUp} />
        </View>
    );
};

export default Welcome;
