/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, Platform, StyleSheet, Text, View, Button, TouchableHighlight } from 'react-native';
import Component1 from './app/Components/Component1/Component1';
import Component2 from './app/Components/Component2/Component2';
import HomeScreen from './Screens/HomeScreen';
import LoginScreen from './Screens/LoginScreen';
import RegisterScreen from './Screens/RegisterScreen';
import ProfileScreen from './Screens/ProfileScreen';
import UserListScreen from './Screens/UserListScreen';
import QuestionScreen from './Screens/QuestionScreen';
import FeedScreen from './Screens/FeedScreen';
import TeamNumScreen from './Screens/TeamNumScreen';
import FindUsersScreen from './Screens/FindUsersScreen';
import OtherProfileScreen from './Screens/OtherProfileScreen';
import RegionalScreen from './Screens/RegionalScreen';
import AdminScreen from './Screens/AdminScreen';
import AdminUserListScreen from './Screens/AdminUserListScreen';
import {StackNavigator} from 'react-navigation'

export default class App extends React.Component {
LearnMore1 (){
    console.log ('New User pressed!');
}
LearnMore2 (){
  console.log ('Return user Pressed!');
}




  render() {
    return (
        <AppNavigator />
    );
  }
}


const AppNavigator = StackNavigator({
  HomeScreen: { screen: HomeScreen },
  LoginScreen: { screen: LoginScreen },
  RegisterScreen: { screen: RegisterScreen },
  ProfileScreen: { screen: ProfileScreen },
  UserListScreen: { screen: UserListScreen },
  QuestionScreen: { screen: QuestionScreen },
  FeedScreen: { screen: FeedScreen },
  TeamNumScreen: { screen: TeamNumScreen },
  FindUsersScreen: { screen: FindUsersScreen },
  OtherProfileScreen: { screen: OtherProfileScreen },
  RegionalScreen: { screen: RegionalScreen },
  AdminScreen: { screen: AdminScreen },
  AdminUserListScreen: { screen: AdminUserListScreen },

}, { headerMode: 'screen' }
);

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
  welcome: {
    fontSize: 50,
    textAlign: 'center',
    margin: 10,
    height: 100,
    color: 'orange'
  },
  instructions: {
    textAlign: 'center',
    color: 'orange',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('j2718', () => j2718);
