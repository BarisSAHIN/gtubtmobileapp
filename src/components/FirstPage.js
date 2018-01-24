import React, { Component } from 'react';
import { 
  Text,
  View,
  Image,
  ImageBackground,
  Button
} from 'react-native';
import { Actions } from 'react-native-router-flux';


class FirstPage extends Component {
  LogIn() {
    Actions.LogInPage();
  }
  SignUp() {
    Actions.SignUpPage();
  }
  render() {
    return(
      <ImageBackground source={require('./../img/bck.png')} 
      style={{flex: 1, width: null, height: null}}>
          <Image source={require('../img/Logo_Beyaz.png')} style={styles.image}/>
          <Text style={styles.text}>
                Gebze Teknik{"\n"}
                Universitesi{"\n"}
            Bilgisayar Toplulugu
          </Text>
          <Button 
            title="Giriş Yap"
            onPress={this.LogIn}
            color="transparent"/>
            <Button 
            title="Kaydol"
            onPress={this.SignUp}
            color="transparent"/>
        </ImageBackground>
    );
  }
}

var styles ={
  text: {
    textAlign: 'center',
    fontSize: 16,
    color: 'white',
    paddingBottom: 30,
    paddingTop: 20
  },
  Input: {
    alignSelf: 'center',
    width: 180,
    fontSize: 16
  },
  image: {
    alignSelf: 'center',
    marginTop: 100,
    width: 180,
    height: 180,
    paddingTop: 10
  },
  background: {
    flex: 1,
    width: null,
    height: null
  },
};

export default FirstPage;