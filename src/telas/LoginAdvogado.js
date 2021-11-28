import React, {useState} from 'react';

import {
View, 
ScrollView,
StyleSheet, 
Text, 
TextInput,
TouchableOpacity,
Image
} from 'react-native';

import { 
getAuth, 
signInWithEmailAndPassword,
sendPasswordResetEmail,
onAuthStateChanged
} from "firebase/auth";
require ("./../../firebaseConfig.js")

import { 
  getDoc,
  doc,
  getFirestore
} from "firebase/firestore";

import { Ionicons } from '@expo/vector-icons';
import logo from './../assets/logo.png';


export default function Login({navigation}) {
  
  const db = getFirestore();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [ocultarSenha, setOcultarSenha] = useState (true);

  function redefinirSenha(){
  const auth = getAuth();
  sendPasswordResetEmail(auth, email)
  .then(() => {
    alert("Email enviado!")
    // ..
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert("Digite seu email!")
    console.log("Email não enviado "+errorCode+ " "+errorMessage)
    // ..
  });

  }

  function logarFirebaseA(){
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, senha)
      .then((userCredential) => {
        const user = userCredential.user;
        alert("Logado")
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode, errorMessage);
      });
   }


  
   const Verificar = async ()=>{
    const auth = getAuth();
    onAuthStateChanged(auth, async (user) => {
   if (user) {
    const docRef = doc(db, "info-advogado", user.uid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
    console.log("Bem vindo: " +user.uid)
    navigation.navigate("PerfilAdvogado")
    } else {
    // doc.data() will be undefined in this case
    alert("A conta logada no momento não é uma conta de advogado");
    alert("Entre na área certa e saia da conta para poder cadastrar/logar em outra");
    navigation.navigate("Cadastro")
    }
   } else {
     console.log("Não está logado")
   }
   });
  }


  Verificar();


  return (
    <ScrollView style={styles.fundo}>
    <View style={styles.container}>
     <View style={styles.logo}>
       <Image 
       source={logo} 
       />
     </View>

     <View style={styles.container}>
     
       

      <TextInput 
        style={styles.inputEmail}
        autoCorrect = {false}
        placeholder = "Email ou OAB"
        onChangeText={ email => setEmail(email) }  
      />

    <View style={styles.areaInputSenha}>
    <TextInput 
        style={styles.inputsenha}
        autoCorrect = {false}
        placeholder = " Senha"
        onChangeText={ senha => setSenha(senha) }  
        secureTextEntry={ocultarSenha}
    />
    
    <TouchableOpacity style={styles.icon} onPress={ () => setOcultarSenha(!ocultarSenha)}>
        {ocultarSenha ?
          <Ionicons name="eye" color="#FFF" size={25} />
          :
          <Ionicons name="eye-off" color="#8c8c8c" size={25} />
        }
    </TouchableOpacity>
    </View>

      <TouchableOpacity style={styles.btnLogin} onPress={()=>{logarFirebaseA()}}>
        <Text style={styles.textoLogin}>Fazer Login</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btnCadastrar}>
        <Text style={styles.textoCad} onPress={()=>{redefinirSenha()}}>Esqueci minha senha</Text>
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

  titulo:{
  fontSize: 40,
  alignItems: 'center'
  },

  logo:{
    flex: 1,
    paddingTop: 100,
    justifyContent: 'center',
  },

  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },

  inputEmail:{
    backgroundColor: '#FFF',
    width: 300,
    marginBottom: 15,
    color:'#000000',
    fontSize: 17,
    borderRadius: 7,
    padding: 10
  },

  btnLogin:{
    backgroundColor: '#D49D3D',
    width: '75%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    },

  textoLogin:{
    color: '#FFFFFF',
    fontSize: 17
  },
  
  btnCadastrar:{
    marginTop: 20
  },

  textoCad:{
    color: '#D49D3D',
    marginBottom: 15,
      textDecorationLine: 'underline',
      fontWeight: 'bold',
      fontSize: 16,
  },
  areaInputSenha:{
    flexDirection: 'row',
    justifyContent: 'center',
    borderStyle: 'solid'
},
inputsenha:{
  backgroundColor: '#FFF',
  width: 260,
  marginBottom: 10,
  color:'#000000',
  fontSize: 17,
  borderTopRightRadius: 0,
  borderBottomRightRadius: 0,
  borderRadius: 7,
  paddingRight: 0,
  paddingLeft: 0,
  padding: 10
},
  icon:{
    width: 40,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000',
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    borderRadius: 7,

  }
});