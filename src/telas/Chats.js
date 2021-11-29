
import React, { useLayoutEffect, useState } from 'react';
import { View, Text, StyleSheet, InputField} from 'react-native';
import { FlatList, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons'; 

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
    <View style = {styles.container}>
      <Text style = {styles.text}>
        <FlatList
        inverted
        data={[1,2,3]}
        renderItem={({ item })=>(
          <Text>{AdvogadoNome}</Text>
        )}
        />
      </Text>
    <View style={styles.enviar}>
      <TextInput
          placeholder="Escreva sua mensagem"
          numberOfLines={10}
          style={styles.input}
          onChangeText={(text)=>handleOnChange(text)}
      />
      <TouchableOpacity style={styles.btn}
      onPress={()=> handleSend}>
        <Ionicons name="send" size={30} color="#FFF" />
      </TouchableOpacity>
      
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "#e6e6e6"
    },
    text:{
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'left'
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
      width: "85vw",
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
      width: "12vw",
      height: 40,
      borderTopRightRadius: 20,
      borderBottomRightRadius: 20,
    },
})

export default Chats;