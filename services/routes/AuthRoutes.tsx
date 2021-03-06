import React, { useState } from 'react';
import {
  StyleSheet, View, ActivityIndicator, Text,
} from 'react-native';
import Auth from '@aws-amplify/auth';
import InitialRoute from './InitialRoute';
import Routes from './routes';
import Home from '../pages/Home';
import { Theme } from '../../themes/color';


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
      let Page = '';
      if (showLoadingSpinner) {
        Page = (
          <View style={styles.container}>
            <ActivityIndicator size="large" color={Theme.color.activity} />
          </View>
        );
      } else if (!userToken) {
        Page = <Routes signIn={this.signIn} />;
      } else {
        Page = <InitialRoute signOut={this.signOut} navigation={this.props} />;
      }
      return (
        Page
      );
    }
  }
  
  
  export default AuthLoadingScreen;

  const styles = StyleSheet.create({
      container:{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'flex-end',
          marginBottom: 20,
      }
  })