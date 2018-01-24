import React, { Component } from 'react';
import { 
  Text,
  TextInput,
  View,
  Image,
  ImageBackground,
  Button
} from 'react-native';


class SignUp extends Component {
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
            placeholder="Adınız Soyadınız"
          />
          <TextInput 
            style={styles.Input}
            secureTextEntry
            placeholderTextColor="white"
            placeholder="Bölümünüz"
          />
          <TextInput 
            style={styles.Input}
            secureTextEntry
            placeholderTextColor="white"
            placeholder="Okul Numaranız"
          />
          <TextInput 
            style={styles.Input}
            secureTextEntry
            placeholderTextColor="white"
            placeholder="E-Posta Adresiniz"
          />
          <TextInput 
            style={styles.Input}
            secureTextEntry
            placeholderTextColor="white"
            placeholder="Telefon Numaranız"
          />
          <TextInput 
            style={styles.Input}
            secureTextEntry
            placeholderTextColor="white"
            placeholder="Kullanıcı Adınız"
          />
          <TextInput 
            style={styles.Input}
            secureTextEntry
            placeholderTextColor="white"
            placeholder="Şifreniz"
          />
          <Button 
            title="Kaydol"
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
    color: 'white'
  },
  Input: {
    alignSelf: 'center',
    width: 180,
    fontSize: 16
  },
  image: {
    alignSelf: 'center',
    width: 120,
    height: 120
  },
  background: {
    flex: 1,
    width: null,
    height: null
  },
};

export default SignUp;