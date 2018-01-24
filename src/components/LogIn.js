import React, { Component } from 'react';
import { 
  Text,
  TextInput,
  View,
  Image,
  ImageBackground,
  Button
} from 'react-native';


class LogIn extends Component {
  press() {
    console.log('press');
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
          <TextInput 
            style={styles.Input} 
            placeholderTextColor="white"
            placeholder="Kullanıcı Adı"
            
          />
          <TextInput 
            style={styles.Input}
            secureTextEntry
            placeholderTextColor="white"
            placeholder="Şifre"
          />
          <Button 
            title="Giriş Yap"
            onPress={this.press}
            color="transparent"/>
        </ImageBackground>
    );
  }
}

var styles ={
  container: {
    backgroundColor: 'rgba(52, 52, 52, 0.8)'
  },
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

export default LogIn;