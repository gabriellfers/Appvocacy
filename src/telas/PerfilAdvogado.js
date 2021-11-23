import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { 

} from "firebase/firestore";
import { 
  getAuth,
  signOut,
  onAuthStateChanged
} from "firebase/auth";

export default function Perfil({navigation}) {


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
  /*const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
 if (user) {
   console.log("Usuario logado: " +user.uid)
 } else {
   console.log("Não está logado")
 }
 });


  const db = getFirestore();
  const docRef = doc(db, "info-user", user.uid);
  const docSnap = getDoc(docRef);
  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }*/

 
  return (
    <View style = {styles.container}>
        <Text style={styles.text}>PERFIL ADVOGADOS</Text> 

      <TouchableOpacity style={styles.btnLogout} onPress={()=>{logoutFirebase()}}>
      <Text style={styles.textoLogin}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
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