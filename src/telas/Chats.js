
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { View, Text, StyleSheet, InputField} from 'react-native';
import { Card, CardItem, NativeBaseProvider } from "native-base";
import { getAuth } from "firebase/auth";
import { collection, addDoc, getFirestore, Timestamp } from "firebase/firestore";
import { FlatList, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons'; 
import {ChatBox} from "../components";

const Chats = ({route,navigation}) => {
  const {params} = route;
  const db = getFirestore();
  const {Nome, Imagem, textoImg, Id, currentUserID} = params;
  const auth = getAuth();
  const user1 = auth.currentUser.uid;
  const user2 = Id
  const [mensagem,setMensagem] = useState('')
  const [messages,setMessages] = useState([])

  console.log(Nome)
  console.log(Imagem)
  console.log(Id)

  console.log(user1)
  console.log(user2)

  useLayoutEffect(()=>{
    navigation.setOptions({
      headerTitle: <Text>{Nome}</Text>
    })
  }, [navigation]);


  const handleSubmit = async () => {

    const id = user1 > user2 ? `${user1 + user2}` : `${user2 + user1}`;

    let url;

    await addDoc(collection(db, "messages", id, "chat"), {
      text: mensagem,
      from: user1,
      to: user2,
      createdAt: Timestamp.fromDate(new Date()),
      media: url || "",
    });

    /*await setDoc(doc(db, "lastMsg", id), {
      text,
      from: user1,
      to: user2,
      createdAt: Timestamp.fromDate(new Date()),
      media: url || "",
      unread: true,
    });*/

    console.log(mensagem)
    setMensagem("");
  };
  console.log(mensagem)

  return (
    <NativeBaseProvider>
    <View style = {styles.container}>
    <View style={styles.enviar}>
      <TextInput
          placeholder="Escreva sua mensagem"
          numberOfLines={10}
          onChangeText={mensagem => setMensagem(mensagem)}
          style={styles.input}
      />
      <TouchableOpacity style={styles.btn}
      onPress={handleSubmit}>
        <Ionicons name="send" size={30} color="#FFF" />
      </TouchableOpacity>
      
    </View>
    </View>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: "#e6e6e6"
    },
    Mensagem: {
      flexDirection: "row",
      alignItems: "center",
      alignContent: "center",
    },
    enviar:{
      position: "absolute",
      bottom: 10,
      width: "100%",
      display: "flex",
      flexDirection: "row",
      flexWrap: "nowrap",
      justifyContent: "center",
      alignItems: 'center',
    },
    input: {
      width: 275,
      height: 40,
      borderStyle: "solid",
      borderColor: "#D49D3D",
      borderWidth: 1,
      top: 0,
      backgroundColor: "#FFF",
      borderTopLeftRadius: 20,
      borderBottomLeftRadius: 20,
      padding: 5
    },
    btn: {
      padding: 0,
      borderStyle: "solid",
      borderColor: "#D49D3D",
      borderWidth: 1,
      display: "flex",
      backgroundColor: "#D49D3D",
      justifyContent: "center",
      alignItems: "center",
      width: 50,
      height: 40,
      borderTopRightRadius: 20,
      borderBottomRightRadius: 20,
    },
})

export default Chats;