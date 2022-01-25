import React, { useState } from 'react';
import {
  StyleSheet, View, ActivityIndicator, Text,
} from 'react-native';
import Auth from '@aws-amplify/auth';
import { NavigationContainer } from '@react-navigation/native';
import InitialRoute from './InitialRoute';
import Routes from './routes';


class AuthLoadingScreen extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        userToken: null,
        loading: true,
      };
      this.signOut = this.signOut.bind(this);
      this.signIn = this.signIn.bind(this);
    }
  
    async componentDidMount() {
      await this.loadApp();
    }
  
    async loadApp() {
      await Auth.currentAuthenticatedUser()
        .then((user) => {
          this.signIn(user);
        })
        .catch(() => {
          console.log('err signing in');
        });
      this.setState({
        loading: false,
      });
    }
  
    async signOut() {
      await Auth.signOut()
        .catch((err) => {
          console.log('ERROR: ', err);
        });
      this.setState({ userToken: null });
    }
  
    async signIn(user) {
      this.setState({
        userToken: user.signInUserSession.accessToken.jwtToken,
        loading: true
      });
    }
  
    render() {
      const { userToken, loading } = this.state;
      const showLoadingSpinner = (!userToken && loading);
      let view = '';
      if (showLoadingSpinner) {
        view = (
          <View style={styles.container}>
            <ActivityIndicator size="large" color="#aaa" />
          </View>
        );
      } else if (!userToken) {
        view = <Routes signIn={this.signIn} />;
      } else {
        view = <InitialRoute signOut={this.signOut} />;
      }
      return (
        <NavigationContainer>
          {view}
        </NavigationContainer>
      );
    }
  }
  
  
  export default AuthLoadingScreen;

  const styles = StyleSheet.create({
      container:{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
      }
  })