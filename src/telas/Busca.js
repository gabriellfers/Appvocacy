import React from "react";

import { 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  ScrollView 
} from "react-native";

import { 
  TouchableOpacity 
} from 'react-native-gesture-handler';

import { 
  Card,
} from "react-native-elements";

import { FontAwesome, FontAwesome5 } from '@expo/vector-icons'; 

const Buscar = ({navigation}) => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);

  return (
    <ScrollView>
    <Card containerStyle={styles.profile} >
    <Text style={styles.titulo}>Escolha o assunto desejado</Text>
      <TouchableOpacity style={{
        backgroundColor: "#D49D3D",
        width: 300,
        marginBottom: 10,
        padding: 20,
        borderRadius: 11
      }} onPress={() => navigation.push('ListaBusca', {
        tipoescolhido:"Ambiental"
      })}>
      <Text style={{fontSize:20, color:"#FFF"}}><FontAwesome name="tree" size={20} color="#FFF" />    Direito Ambiental</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{
        backgroundColor: "#D49D3D",
        width: 300,
        marginBottom: 10,
        padding: 20,
        borderRadius: 11
      }} onPress={() => navigation.push('ListaBusca', {
        tipoescolhido:"Administrativo"
      })}>
      <Text style={{fontSize:20, color:"#FFF"}}><FontAwesome name="fax" size={20} color="#FFF" />    Direito Administrativo</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{
        backgroundColor: "#D49D3D",
        width: 300,
        marginBottom: 10,
        padding: 20,
        borderRadius: 11
      }} onPress={() => navigation.push('ListaBusca', {
       tipoescolhido:"Civil"
      })}>
      <Text style={{fontSize:20, color:"#FFF"}}><FontAwesome name="vcard" size={20} color="#FFF" />    Direito Civil</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{
        backgroundColor: "#D49D3D",
        width: 300,
        marginBottom: 10,
        padding: 20,
        borderRadius: 11
      }} onPress={() => navigation.push('ListaBusca', {
        tipoescolhido:"Consumidor"
      })}>
      <Text style={{fontSize:20, color:"#FFF"}}><FontAwesome name="shopping-cart" size={20} color="#FFF" />    Direito do Consumidor</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{
        backgroundColor: "#D49D3D",
        width: 300,
        marginBottom: 10,
        padding: 20,
        borderRadius: 11
      }} onPress={() => navigation.push('ListaBusca', {
       tipoescolhido:"Contratual"
      })}>
      <Text style={{fontSize:20, color:"#FFF"}}><FontAwesome name="archive" size={20} color="#FFF" />    Direito Contratual</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{
        backgroundColor: "#D49D3D",
        width: 300,
        marginBottom: 10,
        padding: 20,
        borderRadius: 11
      }} onPress={() => navigation.push('ListaBusca', {
        tipoescolhido:"Criminal"
      })}>
      <Text style={{fontSize:20, color:"#FFF"}}><FontAwesome name="chain" size={20} color="#FFF" />    Direito Criminal</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{
        backgroundColor: "#D49D3D",
        width: 300,
        marginBottom: 10,
        padding: 20,
        borderRadius: 11
      }} onPress={() => navigation.push('ListaBusca', {
        tipoescolhido:"Eleitoral"
      })}>
      <Text style={{fontSize:20, color:"#FFF"}}><FontAwesome5 name="vote-yea" size={20} color="#FFF" />    Direito Eleitoral</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{
        backgroundColor: "#D49D3D",
        width: 300,
        marginBottom: 10,
        padding: 20,
        borderRadius: 11
      }} onPress={() => navigation.push('ListaBusca', {
        tipoescolhido:"Empresarial"
      })}>
      <Text style={{fontSize:20, color:"#FFF"}}><FontAwesome name="briefcase" size={20} color="#FFF" />    Direito Empresarial</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{
        backgroundColor: "#D49D3D",
        width: 300,
        marginBottom: 10,
        padding: 20,
        borderRadius: 11
      }} onPress={() => navigation.push('ListaBusca', {
        tipoescolhido:"Estado"
      })}>
      <Text style={{fontSize:20, color:"#FFF"}}><FontAwesome name="flag" size={20} color="#FFF" />    Direito do Estado</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{
        backgroundColor: "#D49D3D",
        width: 300,
        marginBottom: 10,
        padding: 20,
        borderRadius: 11
      }} onPress={() => navigation.push('ListaBusca', {
        tipoescolhido:"Penal"
      })}>
      <Text style={{fontSize:20, color:"#FFF"}}><FontAwesome name="legal" size={20} color="#FFF" />    Direito Penal</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{
        backgroundColor: "#D49D3D",
        width: 300,
        marginBottom: 10,
        padding: 20,
        borderRadius: 11
      }} onPress={() => navigation.push('ListaBusca', {
        tipoescolhido:"Previdenciário"
      })}>
      <Text style={{fontSize:20, color:"#FFF"}}><FontAwesome5 name="money-check-alt" size={20} color="#FFF" />    Direito Previdenciário</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{
        backgroundColor: "#D49D3D",
        width: 300,
        marginBottom: 10,
        padding: 20,
        borderRadius: 11
      }} onPress={() => navigation.push('ListaBusca', {
        tipoescolhido:"Propriedade Intelectual"
      })}>
      <Text style={{fontSize:20, color:"#FFF"}}><FontAwesome name="commenting" size={20} color="#FFF" />    Direito da Propriedade Intelctual</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{
        backgroundColor: "#D49D3D",
        width: 300,
        marginBottom: 10,
        padding: 20,
        borderRadius: 11
      }} onPress={() => navigation.push('ListaBusca', {
        tipoescolhido:"Tecnologia da Informação"
      })}>
      <Text style={{fontSize:20, color:"#FFF"}}><FontAwesome name="laptop" size={20} color="#FFF" />    Direito da Tecnologia da Informação</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{
        backgroundColor: "#D49D3D",
        width: 300,
        marginBottom: 10,
        padding: 20,
        borderRadius: 11
      }} onPress={() => navigation.push('ListaBusca', {
        tipoescolhido:"Trabalhista"
      })}>
      <Text style={{fontSize:20, color:"#FFF"}}><FontAwesome name="industry" size={20} color="#FFF" />    Direito Trabalhista</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{
        backgroundColor: "#D49D3D",
        width: 300,
        marginBottom: 10,
        padding: 20,
        borderRadius: 11
      }} onPress={() => navigation.push('ListaBusca', {
        tipoescolhido:"Tributário"
      })}>
      <Text style={{fontSize:20, color:"#FFF"}}><FontAwesome name="file-text" size={20} color="#FFF" />    Direito Tributário</Text>
      </TouchableOpacity>
      </Card>
      </ScrollView>
  );
};

const styles = StyleSheet.create({
  container2: {
    marginBottom: 5,
    alignItems: "center",
  },
  profile:{
    alignItems: "center",
    textAlign: "center",
    marginBottom: 10
  },
  titulo:{
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },
});

export default Buscar;
