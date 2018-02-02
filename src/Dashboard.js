import React from 'react';
import { StyleSheet, Text, View, Button, Image, ScrollView,TouchableHighlight } from 'react-native';
import { StackNavigator , DrawerNavigator} from 'react-navigation';
import t from 'tcomb-form-native';
import { NavigationActions } from 'react-navigation';

{/* Bu ekran çağırıldığında DashApp çağırılıyor. Aslında veriler dashboard componentine gitmeli.
    Bu sebeple bu değişken kullanıldı.  */}
data_params = null;

{/* Dashboard class. 
    TODO: Buraya kisi hakkındaki genel bilgiler ekleneeck. */}
class Dashboard extends React.Component {

    static navigationOptions = {
      title: 'Dashboard'
    };

   
    render() {
        {/* Navigation bilgisi. Navigation akışını devam ettirmek için. */}    
        const { navigate } = this.props.navigation;
        
        return (
        <ScrollView style = {styles.container}> 
            {/* Goruntu silinebilir, ornek amacıyla konuldu. Text de öyle. */}
            <Image source={require('../assets/Logo_Beyaz.png')} style={styles.image} />
            <Text style={styles.headerText}>Welcome {data_params.user}</Text>
        </ScrollView>
        );
    }
}

{/* Ekranı sola kaydırdığınızda gelen menude neler olacak */}
const SimpleApp = DrawerNavigator({
    Dashboard: { screen: Dashboard }
});


export default class DashApp extends React.Component {
    render() {
        {/* Giris ekranından yonlendirilen giris bilgileri buraya aktarılıyor */}
        {/* global degiskenden sonra Dashboard class'ı kullanacak, bu degisken arada bir kopru. */}
        const {params} = this.props.navigation.state;
        data_params = params;
        return <SimpleApp />;
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


