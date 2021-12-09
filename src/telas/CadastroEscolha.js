import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import { 
  getAuth,
} from "firebase/auth"

import { 
View, 
Text, 
Image,
StyleSheet,
ScrollView,
TouchableOpacity,
Dimensions
} from 'react-native';
require ("./../../firebaseConfig.js")

import logo from './../assets/logo.png';

const dHeight = Dimensions.get('window').height
const dWidth = Dimensions.get('window').width


export default function Cadastro({navigation}) {

  const auth = getAuth();
const user = auth.currentUser;

console.log(user)
  return (
    <ScrollView style = {styles.fundo}>
      <View style={styles.container}>
      <View style={styles.logo}>
       <Image style={{width:150, height:199}}
       source={logo} 
       />
     </View>

      <View style = {styles.container}>

      <TouchableOpacity style={styles.btnCadastroCliente} onPress={()=>{navigation.navigate('CadastroCliente')}}>
        <Text style={styles.textoButton} >Cliente</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btnCadastroAdvogado} onPress={()=>{navigation.navigate('CadastroAdvogado')}}>
        <Text style={styles.textoButton} >Advogado</Text>
      </TouchableOpacity>

      </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({

    fundo:{
      flex: 1,
      backgroundColor: '#e6e6e6'
    },

    logo:{
      marginBottom: 100,
      flex: 1,
      paddingTop: (dHeight-dHeight+100),
      justifyContent: 'center',
    },

    container:{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',

    },
    
    textoButton:{
      color: '#FFFFFF',
      fontSize: 17
    },

    btnCadastroCliente:{
      backgroundColor: '#D49D3D',
      width: (dWidth - 60),
      height: 40,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 7,
      marginBottom: 20,
    },

    btnCadastroAdvogado:{
      backgroundColor: '#D49D3D',
      width: (dWidth - 60),
      height: 40,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 7,
      marginBottom: 10,
    },

    btnLogin:{
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 7,
      marginBottom: 10,
      marginTop: 5,
    },

    textoLogin:{
      color: '#D49D3D',
      textDecorationLine: 'underline',
      fontWeight: 'bold',
      fontSize: 16,
      fontStyle: 'italic'
    },
    
    
})