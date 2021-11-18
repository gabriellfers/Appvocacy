import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { 
  doc, 
  getDoc,
  getFirestore 
} from "firebase/firestore";
import { 
  getAuth,
  onAuthStateChanged
} from "firebase/auth";

export default function Perfil() {

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
        <Text style={styles.text}>PERFIL</Text> 
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
    }

})