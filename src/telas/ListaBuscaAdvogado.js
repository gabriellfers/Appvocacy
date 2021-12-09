import React from 'react';
import { useState, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  TextInput,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Text,
  Dimensions
} from 'react-native';


import {
  collection, 
  query, 
  where, 
  getDocs,
  getFirestore,
  orderBy, 
  limit
} from "firebase/firestore";

import { 
  Avatar,
  ListItem
} from "react-native-elements";

import { TouchableHighlight } from "react-native";
import { MaterialCommunityIcons, Feather} from '@expo/vector-icons';



const ListaBusca = ({route,navigation}) => {
  //const {tipoescolhido}=route.params;
  const dHeight = Dimensions.get('window').height
const ddHeight = Dimensions.get('screen').height
const dWidth = Dimensions.get('window').width
const [selected, setSelected] = useState(0);
  const [searchText, setSearchText] = useState('');
  const [listar, setListar] = useState();
  const [users, setUsers] = useState();
  const [clicado, setClicado] = useState (false);
  const [infoUser, setInfoUser] = useState({
    Id: "", 
    Nome: "",
    Imagem: "",
  })

  useEffect(async()=> {
    const db = getFirestore();
    var vquery = query(collection(db,'info-user'), where('Nome','==', '3DS'))
    var data = []
    getDocs(vquery).then(resultados=>{
      resultados.forEach(doc=>{
        var Usr = doc.data()
        Usr.id = doc.id
        data.push(Usr) 
      })
      setUsers(data)
    })
  },[])


  const handleOrderClick = () => {
    let newList = [...users];

      
    if(listar==0){
      setUsers(newList.sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0)))
      setListar(1)
      console.log("crescente")
    }
    else{
      setUsers(newList.sort((a, b) => (a.name < b.name ? 1 : b.name < a.name ? -1 : 0)))
      setListar(0)
      console.log("decrescente")
    }
    //setList(newList);

    console.log(listar)
  };


  const seila = async ()=>{
    const db = getFirestore();
    const q = query(collection(db, "info-user"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
  });}
  seila()

  const nameTap = (Imagem, Nome, Id) =>{
    if(!Imagem){
      navigation.push("Chats",{
      Nome,
      Imagem: Nome.charAt(0),
      Id,
      })
    }
    else{
      navigation.push("Chats",{
      Nome,
      Imagem,
      Id,
      })
    }
  }
  return (

    <SafeAreaView style={styles.container}>
      {/* <TouchableOpacity style={styles.floatingbutton} onPress={()=>navigation.navigate("PerfilAdvogado")}>
        <Text>
        <Feather name="users" color="#FFFFFF" size={25} />
        </Text>
      </TouchableOpacity> */}
       <View style={styles.Titulo}>
        <Text style={styles.Texto}>Conversas Ativas</Text>
      </View>

      {users && <FlatList
        data={users}
        style={styles.list}
        renderItem={({ item })=>
        <View key={item.id}>
        <ListItem
        Component={TouchableHighlight}
        containerStyle={{
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: "#e6e6e6",
        borderTopColor:"#FFF",
        }}
        disabledStyle={{ opacity: 0.5 }}
        pad={20}
        //onPress={()=> nameTap(item.Imagem, item.Nome, item.id)}
        >
        
        <Avatar
        avatarStyle={{justifyContent: 'center'}}
        containerStyle={{ backgroundColor: "#BDBDBD" }}
        size="large"
        rounded
        source={{
          uri: item.Imagem
        }}
        title={item.Nome.charAt(0)}
        />
      <ListItem.Content>

        <ListItem.Title>
        <Text style={styles.nome}> {item.Nome} </Text>
        </ListItem.Title>

        <ListItem.Subtitle>
        <Text style={styles.tipo}> {item.Tipo} </Text>
        </ListItem.Subtitle>
      </ListItem.Content>
      <TouchableOpacity style={styles.btnEditar} onPress={() => nameTap(item.Imagem, item.Nome, item.id)}>
        <Text style={styles.textoLogin}>Entrar</Text>
      </TouchableOpacity>
        </ListItem>
        </View>
      }
      />}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Titulo:{
    height: 60,
    alignItems: 'center',
    backgroundColor: '#FFF',
    justifyContent: "center",
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#e6e6e6',
  },
  Texto:{
    fontSize: 22,
    fontWeight: 'bold',
    
  },
  floatingbutton:{
    position:"absolute",
    width:60,
    height:60,
    right: 20,
    top: 20,
    zIndex: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#D49D3D"
  },
  container: {
    flex: 1,
  },
  nome:{
    fontSize: 24,
  },
  tipo:{
   fontSize: 18,
  },
  botao:{
    marginRight: 10
  },
  input: {
    borderColor: '#e6e6e6',
    borderStyle: 'solid',
    borderWidth: 1,
    flex: 1,
    height: 50,
    backgroundColor: '#fff',
    margin: 20,
    marginLeft: 15,
    marginRight: 5,
    borderRadius: 5,
    fontSize: 19,
    paddingLeft: 10,
    paddingRight: 10,
    color: '#000',
  },
  searchArea: {
    flexDirection: 'row',
    alignItems: 'center',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: "#e6e6e6",
  },
  orderButton: {
    width: 32,
    marginRight: 20,
  },
  list: {
    flex: 1,
  },
  btnEditar:{
    backgroundColor: '#53D489',
    height: 40,
    width: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    marginTop: 10,
    marginBottom: 10
    },
    textoLogin:{
      color: '#FFFFFF',
      fontSize: 17
    },
});

export default ListaBusca;