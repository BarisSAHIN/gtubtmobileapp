import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, ScrollView } from 'react-native';
import { FormLabel, FormInput } from 'react-native-elements'
import t from 'tcomb-form-native';

{/* Form oluştur. */}
const Form = t.form.Form;

{/* Formda ne olacak? */}
const User = t.struct({
  name: t.String, // İsim Soyisim 
  department: t.String, // Okuldaki bölüm
  uniID: t.String, // Okul numarası
  email: t.String, // E-mail
  phone: t.maybe(t.String), // Telefon numarası, tercihi
  username: t.String, // Kullanıcı adı
  password: t.String, // Şifre
});

{/* Form özellikleri */}
const options = {
  auto: 'placeholders', // Kutucukların içinde silik yazı olarak manaları yazsın.
  fields: {
    name: {
      label: 'Ad Soyad',
    },
    department: {
      label: 'Bölüm',
    },
    phone: {
      label: 'Telefon Numarası',
    },
    username: {
      label: 'Kullanıcı Adı',
    },
    email: {
      label: 'E-mail',
    },
    uniID: {
      label: 'Okul numarası',
    },
    password: {
      label: 'Şifre',
      secureTextEntry: true // şifre gizli.
    },
  },
};



class Register extends React.Component {
  // Ekran başlığı.
  static navigationOptions = {
    title: 'Kayıt Ekranı'
  };

  // Bu kısım deneme amaçlı. Formdaki butona tıklandığında buradan değerler çekilebilir manasına geliyor
  // Database'de kayıt işlemi için fonksiyon yazıldığında burada kullanılarak kayıt işlemi gerçekleşecek.
  onPress = () => {
    const value = this._form.getValue(); // use that ref to get the form value
    console.log('value: ', value);
  }


  render() {
    return (
      <ScrollView style={styles.container}>
        {/* Başlık yazısı */}
        <Text style={styles.headerText}>Gebze Teknik Üniversitesi</Text>
        <Text style={styles.headerText}>Bilgisayar Topluluğu{"\n"}</Text>
        {/* Form */}
        <Form 
        ref={c => this._form = c} // assign a ref
        type={User} 
        options={options}
        />
        {/* Kayıt butonu. */}
        <TouchableHighlight style={styles.button} onPress={this.onPress} underlayColor='#99d9f4'>
          <Text style={styles.buttonText}>Kayıt ol</Text>
        </TouchableHighlight>

        {/* Kayıt ol kısmı aşağıda kalıyordu, boş bir newline ile düzelttim. */}
        <Text style={styles.headerText}>{"\n"}</Text> 
    </ScrollView>

    );
  }
}

{/* Stiller */}
const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#ffffff',
  },
  headerText: {
    fontSize: 30
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
});


export default Register;