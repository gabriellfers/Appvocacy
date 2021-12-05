
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { View, Text, StyleSheet, InputField} from 'react-native';
import { Card, CardItem, NativeBaseProvider } from "native-base";
import { FlatList, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons'; 
import {ChatBox} from "../components";

const Chats = ({route,navigation}) => {
  const {params} = route;
  const {AdvogadoNome, AdvogadoImagem, textoImg, AdvogadoId, currentUserID} = params;
  const [msgValue, setMsgValue] = useState('')
  const [messages,setMessages] = useState([])

  console.log(AdvogadoNome)
  console.log(AdvogadoImagem)
  console.log(AdvogadoId)

  useLayoutEffect(()=>{
    navigation.setOptions({
      headerTitle: <Text>{AdvogadoNome}</Text>
    })
  }, [navigation]);


  return (
    <NativeBaseProvider>
    <View style = {styles.container}>
      <Text style = {styles.text}>
        <FlatList
        inverted
        items={[1,2,3]}
        data={messages}
        renderItem={({ item })=>(
          <ChatBox
          msg={item.msg}
          userId={item.sendBy}
          AdvogadoImagem={item.Imagem}
          onImgTap={()=> imgTap(item.Imagem)}
          />
        )}
        />
      </Text>
    <View style={styles.enviar}>
      <TextInput
          placeholder="Escreva sua mensagem"
          numberOfLines={10}
          style={styles.input}
      />
      <TouchableOpacity style={styles.btn}
      onPress={()=> handleSend}>
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