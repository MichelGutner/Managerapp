import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import Auth from "@aws-amplify/auth";
import { Theme } from '../../../themes/color';
import Input from '../input';

const Confirmation = ({route, navigation}) => {
    const {email} = route.params;
    console.log(email)
    const [authCode, setAuthCode] = useState('');
    const [error, setError] = useState('');
    console.log('confirmation navigation: ', navigation);

    const confirmSignUp = async () => {
        if(authCode.length > 0) {
            await Auth.confirmSignUp(email, authCode)
            .then(() => {
                navigation.navigate('SignIn');
            })
            .catch ((err) => {
                if (!err.message) {
                    setError('Algo está errado, entre em contato com suporte!')
                }else{
                    setError(err.message)
                }
            })
        }else{
            setError('Insara o código de confirmação.')
        }
    }


  return (
    <View style={styles.container}>
        <Text>Digite o código recebido pelo email</Text>
        <Input 
            value={authCode}
            onChangeText={(text) => setAuthCode(text)}
            maxLength={6}
            keyboardType='numeric'
        />
    </View>
  );
};

export default Confirmation;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 100,
        backgroundColor: Theme.color.background,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        marginTop: 120,
        marginBottom: 120,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 10,
      },
});
