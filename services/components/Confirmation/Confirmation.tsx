import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import Auth from "@aws-amplify/auth";
import { Theme } from '../../../themes/color';
import Input from '../input';
import { TextInput } from 'react-native-gesture-handler';
import ButtonPage from '../ButtonPages';

const Confirmation = ({ route, navigation }) => {
    const { email } = route.params;
    console.log(email)
    const [authCode, setAuthCode] = useState('');
    const [error, setError] = useState('');
    console.log('confirmation navigation: ', navigation);

    const confirmSignUp = async () => {
        if (authCode.length > 0) {
            await Auth.confirmSignUp(email, authCode)
                .then(() => {
                    navigation.navigate('SignIn');
                })
                .catch((err) => {
                    if (!err.message) {
                        setError('Algo está errado, entre em contato com suporte!')
                    } else {
                        setError(err.message)
                    }
                })
        } else {
            setError('Insara o código de confirmação.')
        }
    }


    return (
        <View style={styles.container}>
            <Text style={styles.textConfirm}>Digite o código recebido pelo email</Text>
            <TextInput
                textAlign='center'
                style={styles.inputCode}
                value={authCode}
                onChangeText={(text) => setAuthCode(text)}
                maxLength={6}
                keyboardType='numeric'
            />
            <ButtonPage 
                title='Confirmar'
                style={{marginTop: 20,}}
                onPress={() => confirmSignUp()}/>
        </View>
    );
};

export default Confirmation;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Theme.color.background,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 10,
    },
    textConfirm: {
        fontSize: 18,
        color: Theme.color.white,
        alignSelf: 'center'
    },
    inputCode:{
        fontSize: 20,
        borderBottomWidth: 0.25,
        borderColor: Theme.color.white,
        width: 90,
        color: Theme.color.white,
        
    }
});
