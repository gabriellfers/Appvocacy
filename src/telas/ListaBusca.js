import React from 'react';
import { useState, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  TextInput,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Text
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
import results from './results';
import { render } from 'react-dom';

const ListaBusca = ({route,navigation}) => {
  const {tipoescolhido}=route.params;
  const [searchText, setSearchText] = useState('');
  const [listar, setListar] = useState();
  const [advogados, setAdvogados] = useState();
  const [clicado, setClicado] = useState (false);


  useEffect(async()=> {
    const db = getFirestore();
    var vquery = query(collection(db,'info-advogado'), where('Tipo','==', tipoescolhido))
    var data = []
    getDocs(vquery).then(resultados=>{
      resultados.forEach(doc=>{
        var Adv = doc.data()
        Adv.id = doc.id
        data.push(Adv) 
      })
      setAdvogados(data)
    })
    console.log(advogados)
  },[])


  const handleOrderClick = () => {
    let newList = [...advogados];

      
    if(listar==0){
      setAdvogados(newList.sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0)))
      setListar(1)
      console.log("crescente")
    }
    else{
      setAdvogados(newList.sort((a, b) => (a.name < b.name ? 1 : b.name < a.name ? -1 : 0)))
      setListar(0)
      console.log("decrescente")
    }
    //setList(newList);

    console.log(listar)
  };


  const seila = async ()=>{
    const db = getFirestore();
    const q = query(collection(db, "info-advogado"), where("Tipo", "==", tipoescolhido));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
  });}
  seila()
  return (

    <SafeAreaView style={styles.container}>
      
      <View style={styles.searchArea}>
        <TextInput
          style={styles.input}
          placeholder= "Pesquise"
          placeholderTextColor="#888"
          value={searchText}
          onChangeText={(t) => setSearchText(t)}
        />

        <TouchableOpacity style={StyleSheet.botao} onPress={()=>{
          setClicado(!clicado)
          handleOrderClick()
        }
          } style={styles.orderButton}>
          
          {clicado ?
            <MaterialCommunityIcons name="order-alphabetical-ascending" size={40} color="#888"/>
            :
            <MaterialCommunityIcons name="order-alphabetical-descending" size={40} color="#888"/>
          }

        </TouchableOpacity>

      </View>

      {advogados && <FlatList
        data={advogados}
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
        pad={20}>
        <Avatar
        activeOpacity={0.2}
        avatarStyle={{justifyContent: 'center'}}
        containerStyle={{ backgroundColor: "#BDBDBD" }}
        size="large"
        rounded
        source={{}}
        title={item.Nome.charAt(0)}
        titleStyle={{}}
      />
      <ListItem.Content>

        <ListItem.Title>
        <Text> {item.Nome} </Text>
        </ListItem.Title>

        <ListItem.Subtitle>
        <Text> {item.Tipo} </Text>
        </ListItem.Subtitle>
      </ListItem.Content>
        </ListItem>
        </View>
      }
      />}

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
});

export default ListaBusca;