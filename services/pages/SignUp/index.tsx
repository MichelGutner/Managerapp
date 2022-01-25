import { View, Text } from 'react-native';
import React, { useState } from 'react';
import { styles } from "./styles"
import Input from '../../components/input';
import { Theme } from '../../../themes/color';
import ButtonPage from '../../components/ButtonPages';
import Auth from '@aws-amplify/auth';
import Icon from 'react-native-vector-icons/AntDesign';

const SignUp = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');


  const signUp = async () => {
    const validPassword = password.length > 4 && (password === confirmPassword);
    if (validPassword) {
      setErrorMessage('');
      Auth.signUp({
        username: email,
        password,
        attributes: {
          email,
          name,
        },
        validationData: [],
      })
        .then((data) => {
          console.log(data);
          console.log('navigation', navigation);
          navigation.navigate('Confirmation', { email })
        })
        .catch((err) => {
          if (err.code === 'UsernameExistsException') {
            setErrorMessage('Usúario Existente')
          }
          console.log(err)
        })
        .catch((err) => {
          if (err.message === 'InvalidPasswordException') {
            setErrorMessage('A seha deve conter 1 letra Maiuscula e 1 Caracter #$%,\ne deve ter no minimo 8 letras')
          }
          console.log(err)
        });
    } else {
      setErrorMessage('As senhas devem ser iguais')
    }
  }


  return (
    <View style={styles.container}>
      <Icon
        name='arrowleft'
        color={Theme.color.white}
        size={30}
        style={styles.headerIcon}
        onPress={() => navigation.navigate('Welcome')}
      />
      <View style={styles.inputs}>
        <Input
          style={styles.inputText}
          value={name}
          onChangeText={(text) => setName(text)}
          placeholder='ex: João'
          name='account'
          size={20}
          color={Theme.color.white}
        />
        <Input
          style={styles.inputText}
          value={email}
          onChangeText={(text) => setEmail(text)}
          placeholder='ex: account@email.com.br'
          name='email'
          size={20}
          color={Theme.color.white}
        />
        <Input
          style={styles.inputText}
          value={password}
          onChangeText={(text) => setPassword(text)}
          placeholder='**********'
          name='lock-check'
          size={20}
          color={Theme.color.white}
        />
        <Input
          style={styles.inputText}
          value={confirmPassword}
          onChangeText={(text) => setConfirmPassword(text)}
          placeholder='**********'
          name='lock-open-check'
          size={20}
          color={Theme.color.white}
        />
        <Text style={styles.errorMessage}>{errorMessage}</Text>
        {name.length || email.length > 0 ?
          (<ButtonPage
            backgroundColor={Theme.color.background}
            title='Cadastrar'
            style={styles.button}
            onPress={() => signUp()}
          />) : null}
      </View>
    </View>

  );
};

export default SignUp;
