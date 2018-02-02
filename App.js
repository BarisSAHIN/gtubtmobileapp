import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator , DrawerNavigator} from 'react-navigation';
import RegisterScreen from './src/Register';
import HomeScreen from './src/Home'
import Dashboard from './src/Dashboard'


const SimpleApp = StackNavigator({
  Home: { screen: HomeScreen },
  RegisterPage: {screen: RegisterScreen},
  DashboardPage: {screen: Dashboard}
});

export default class App extends React.Component {
  render() {
    return <SimpleApp />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});