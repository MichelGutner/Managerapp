import Auth from '@aws-amplify/auth';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Alert, Text, View } from 'react-native';
import { Theme } from '../../../themes/color';
import ButtonPage from '../../components/ButtonPages';
import Input from '../../components/input';
import LoadingSpinner from '../../components/Modals/loading';
import { styles } from "./styles";


const SignIn = ({ navigation, signIn: signInCb }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const signIn = async () => {
    if (email.length > 4 && password.length > 4) {
      setModalVisible(true)
      setTimeout(() => {
        setModalVisible(false);
      }, 7000)
      await Auth.signIn(email, password)
        .then((user) => {
          signInCb(user);
        })
        .catch((err) => {
          if (!err.message) {
            console.log('Erro ao Entrar', err);
            Alert.alert('Erro ao entrar', err)
          } else if (err.code === 'UserNotExistException') {
            console.log('Usúario ou senha incorretos');
          } else {
            if (err.code === 'UserNotConfirmedException') {
              console.log('Usúario não validado');
              navigation.navigate('Confirmation', { email });
            }
            if (err.message) {
              setErrorMessage(err.message)
            }
          }
        })
    } else {
      setErrorMessage('Email ou senha Invalidos')
    }
  }

  return (
    <View style={styles.container}>

      <Input
        value={email}
        onChangeText={(text) => setEmail(text)}
        placeholder='EX: email@email.com'
        placeholderTextColor={Theme.color.white}
        name='account'
        size={25}
        color={Theme.color.white}
      />

      <Input
        value={password}
        onChangeText={(text) => setPassword(text)}
        placeholder=''
        placeholderTextColor={Theme.color.white}
        secureTextEntry
        name='lock'
        size={25}
        color={Theme.color.white}
      />
      <Text style={styles.errorMessage}>{errorMessage}</Text>
      {email.length > 0 ? (
        <ButtonPage
          onPress={() => signIn()}
          title='Entrar'
          backgroundColor={undefined}
          style={styles.button} />)
        : null
      }
      <LoadingSpinner visible={modalVisible} />
    </View>
  );
};

export default SignIn;

SignIn.propTypes = {
  signIn: PropTypes.func.isRequired,
};
