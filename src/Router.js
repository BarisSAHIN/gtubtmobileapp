import React from 'react';
import { ImageBackground } from 'react-native';
import { Scene, Router } from 'react-native-router-flux';

import FirstPage from './components/FirstPage';
import LogInPage from './components/LogIn';
import SignUpPage from './components/SignUp';

const RouterComponent = () => {
  return (
    <Router style={{ backgroundColor: 'transparent'}}>
      <Scene key="BtApp">
        <Scene key="FirstPage" component={FirstPage} navTransparent={1}/>
        <Scene key="LogInPage" component={LogInPage} navTransparent={1}/>
        <Scene key="SignUpPage" component={SignUpPage} navTransparent={1}/>
      </Scene>
    </Router>
  );
};


export default RouterComponent;