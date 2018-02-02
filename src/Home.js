import React from 'react';
import { StyleSheet, Text, View, Button, Image, ScrollView,TouchableHighlight } from 'react-native';
import { StackNavigator } from 'react-navigation';
import t from 'tcomb-form-native';
import { NavigationActions } from 'react-navigation';

{/* Formu hazırla */}
const Form = t.form.Form;
{/* Formun içeriği ne olsun? Giriş ekranı olduğundan kullanıcı adı ve şifre. */}
const User = t.struct({
  username: t.String,
  password: t.String,
});

{/* Form özellikleri:
    auto: placeholders kısmı içindeki silik yazı için
    Fields kısmı yukarıda tanımlanan kullanıcı adı ve şifreyi barındırabilir
    İki kısım için de label ekledim, alanların başlığını türkçe olarak yazmış oldum
    secureTextEntry de şifreyi girerken gözükmesin diyerek. 
    İstenirse şifremi göster tarzı bir şey yapılabilir ama güvenli değil gibi.
 */}
const options = {
    auto: 'placeholders',
    fields: {  
        username: {
            label: 'Kullanıcı Adı',
            
        },
        password: {
            label: 'Şifre',
            secureTextEntry: true
        },
    },
};


{/* Ana ekran class. */}
class HomeScreen extends React.Component {
    // options kısmı. Burada yukarıdaki başlığı GTUBT olarak değiştirdim. Boş bırakılabilir.
    static navigationOptions = {
      title: 'GTUBT'
    };

    // Giriş kontrolü. Burada database üzerinden kontrol yapılmalı. 
    login(){
        
        // Buradaki işlemler giriş başarılı oluğunda gerçekleşecek. user ve password olarak aktardığım kısımlar değişebilir
        // İstediğiniz kadar parametre ekleyebilirsiniz. Database tarafındaki unique id yollansa yeter diye düşünüyorum.
        // Benim yolladığım parametreler sonradan silinmeli! Dashboard'da user kısmını göstermelik olarak kullanıyorum, dikkat!
        const resetAction = NavigationActions.reset({
        index: 0,
        actions: [
            NavigationActions.navigate({ routeName: 'DashboardPage', params: { user: 'Yasin' , password: 'xd'} , action: {} })
        ]
        })
        this.props.navigation.dispatch(resetAction)
        
        

    }


    render() {
        {/* Navigasyon akışının devam etmesi için. */}
        const { navigate } = this.props.navigation;

        return (
            <ScrollView style = {styles.container}> 
                {/* Stil ayarlanırken logo değişebilir. */}
                <Image source={require('../assets/Logo_Beyaz.png')} style={styles.image} />
                {/* Program başlığı */}
                <Text style={styles.headerText}>Gebze Teknik Üniversitesi</Text>
                <Text style={styles.headerText}>Bilgisayar Topluluğu{"\n"}</Text>
                {/* Yukarıda hazırlanan form burada çağırılıyor. */}
                <Form 
                ref={c => this._form = c} // assign a ref
                type={User} 
                options={options}
                />

            {/* Giriş ekranına giden buton. verilerin kontrol edilmesi için login metoduna gönderildi. Database check yapılmalı. */}
            <TouchableHighlight style={styles.button} onPress={() => {this.login();}} underlayColor='#99d9f4'>
                <Text style={styles.buttonText}>Giriş Yap</Text>
            </TouchableHighlight>

            {/* Kayıt olmak isteyenler için ayrı bir ekrana gönderilmek amacıyla kullanılacak. */}
            <TouchableHighlight style={styles.button} onPress = {() => navigate('RegisterPage')} underlayColor='#99d9f4'>
                <Text style={styles.buttonText}>Kayıt Ol</Text>
            </TouchableHighlight>

            {/* Kayıt olmayanlar için duyuruları barındıracak */}
            <TouchableHighlight style={styles.button} onPress = {() => navigate('RegisterPage')} underlayColor='#99d9f4'>
                <Text style={styles.buttonText}>Kayıt Olmadan Devam Et</Text>
            </TouchableHighlight>

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
        fontSize: 30,
        alignSelf: 'center'
    },
    image: {
        width: 100, 
        height: 100,
        alignSelf: 'center'
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




export default HomeScreen;