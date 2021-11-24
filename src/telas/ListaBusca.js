import React from 'react';
import { useState, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  TextInput,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import ListItem from './../components/ListItem';
import { MaterialCommunityIcons, Feather} from '@expo/vector-icons';
import results from './results';

const ListaBusca = () => {
  const [searchText, setSearchText] = useState('');
  const [list, setList] = useState(results);
  const [listar, setListar] = useState(0);
  const [clicado, setClicado] = useState (false);

  useEffect(() => {
    if (searchText === '') {
      setList(results);
    } else {
      setList(
        results.filter(
          (item) =>
            item.name.toLowerCase().indexOf(searchText.toLowerCase()) > -1
        )
      );
    }
  }, [searchText]);

  const handleOrderClick = () => {
    let newList = [...list];

      
    if(listar==0){
      setList(newList.sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0)))
      setListar(1)
      console.log("crescente")
    }
    else{
      setList(newList.sort((a, b) => (a.name < b.name ? 1 : b.name < a.name ? -1 : 0)))
      setListar(0)
      console.log("decrescente")
    }
    //setList(newList);

    console.log(listar)
  };

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
          handleOrderClick()
          setClicado(!clicado)
        }
          } style={styles.orderButton}>
          
          {clicado ?
            <MaterialCommunityIcons name="order-alphabetical-ascending" size={40} color="#888"/>
            :
            <MaterialCommunityIcons name="order-alphabetical-descending" size={40} color="#888"/>
          }

        </TouchableOpacity>

      </View>

      <FlatList
        data={list}
        style={styles.list}
        renderItem={({ item }) => <ListItem data={item} />}
        keyExtractor={(item) => item.id}
      />

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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