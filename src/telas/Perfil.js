import React, { useReducer } from 'react';

import { 
  View, 
  Text, 
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native';
import { 
  getFirestore,
  doc,
  getDoc,
} from "firebase/firestore";
import { 
  getAuth,
  signOut,
  onAuthStateChanged
} from "firebase/auth";

import { 
  Avatar 
} from "react-native-elements";


export default function Perfil({navigation}) {

  var documento = 'info-user';

  class User {
    constructor (Nome, CPF, DataNascimnto, Telefone ) {
        this.Nome = Nome;
        this.CPF = CPF;
        this.DataNascimnto = DataNascimnto;
        this.Telefone = Telefone;
    }
    toStringNome() {
      return this.Nome;
    }
    toStringCPF() {
      return this.CPF;
    }
    toStringData() {
      return this.DataNascimnto;
    }
    toStringTel() {
      return this.Telefone;
    }

    
}


  const userConverter = {
    toFirestore: (documento) => {
        return {
            Nome: documento.Nome,
            CPF: documento.CPF,
            DataNascimnto: documento.DataNascimnto,
            Telefone: documento.Telefone
            };
    },
    fromFirestore: (snapshot, options) => {
        const data = snapshot.data(options);
        return new User(data.Nome, data.CPF, data.DataNascimnto, data.Telefone);
    }
}




  const db = getFirestore();
  const auth = getAuth();

  function logoutFirebase(){
    const auth = getAuth();
  signOut(auth).then(() => {
    alert("Deslogado")
    navigation.navigate('Cadastro')
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorCode, errorMessage);
  });
  }

  onAuthStateChanged(auth, (user) => {
 if (user) {
   console.log("Usuario logado: " +user.uid)
   getDoc(doc(db, "info-user", user.uid).withConverter(userConverter)).then(docSnap => {
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      var data = docSnap.data();
  
      console.log(data.toStringNome());
      console.log(data.toStringCPF());
      console.log(data.toStringData());
      console.log(data.toStringTel());
    } else {
      console.log("No such document!");
    }
  })  
 } else {
   console.log("Não está logado")
 }
})


 
 
  return (
    <View style = {styles.container}>

    <View style = {styles.profile}>
    <Text style={styles.text}>asdf</Text> 
    </View>
    
    <View style = {styles.list}>
      <TouchableOpacity style={styles.btnLogout} onPress={()=>{logoutFirebase()}}>
      <Text style={styles.textoLogin}>Sair</Text>
      </TouchableOpacity>
    </View>

    </View>

  );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
    },
    profile:{
      fontSize: 25,
      fontWeight: 'bold',
    },
    list:{
      alignItems: 'center',
      justifyContent: 'center',
    },
    text:{
        fontSize: 25,
        fontWeight: 'bold'
    },
    btnLogout:{
      backgroundColor: '#4a0000',
      width: '75%',
      height: 40,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 7,
      marginTop: 15
      },
      textoLogin:{
        color: '#FFFFFF',
        fontSize: 17
      },
})