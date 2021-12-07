import React from 'react';
import "./src/components/App.css"
import 'react-native-gesture-handler';
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Cadastro from './src/telas/CadastroEscolha';
import CadastroCliente from './src/telas/CadastroCliente';
import CadastroAdvogado from './src/telas/CadastroAdvogado';
import Main from './src/telas/rotas';
import LoginCliente from './src/telas/LoginCliente';
import LoginAdvogado from './src/telas/LoginAdvogado';
import Perfil from './src/telas/Perfil';
import PerfilAdvogado from './src/telas/PerfilAdvogado';
import Home from './src/telas/Busca';
import Chats from './src/telas/Chats';
import ChatsBar from './src/telas/ChatsBar';
import ChatsAdvogado from './src/telas/ChatsAdvogado';
import ListaBusca from './src/telas/ListaBusca';
import ListaBuscaAdvogado from './src/telas/ListaBuscaAdvogado';


const Stack = createStackNavigator();

function LogoBranca(){
  return(
  <Image 
  source = {require('./src/assets/appvocacy-titulo-branco.png')}
    />
  )
}

function LogoGold(){
  return(
  <Image 
  style={{width: 162, height: 50}}
  source = {require('./src/assets/appvocacy-titulo-gold.png')}
    />
  )
}

export default function App({  }){
 
  return(
     <NavigationContainer>
       <Stack.Navigator initialRouteName="Cadastro">
        <Stack.Screen 
        name="Cadastro"
        component={Cadastro}
        options={{headerTitle: (props) => <LogoGold  {...props}/>, headerShown: true}}
        />
        <Stack.Screen 
        name="Main"
        component={Main}
        options={{headerTitle: (props) => <LogoGold  {...props}/>, headerLeft: false, headerShown: true}}
        />
        <Stack.Screen 
        name="LoginCliente"
        component={LoginCliente}
        options={{headerTitle: (props) => <LogoGold  {...props}/>, headerShown: true}}
        />
        <Stack.Screen 
        name="LoginAdvogado"
        component={LoginAdvogado}
        options={{headerTitle: (props) => <LogoGold  {...props}/>, headerShown: true}}
        />
        <Stack.Screen 
        name="CadastroCliente"
        component={CadastroCliente}
        options={{headerTitle: (props) => <LogoGold  {...props}/>, headerShown: true}}
        />
        <Stack.Screen 
        name="CadastroAdvogado"
        component={CadastroAdvogado}
        options={{headerTitle: (props) => <LogoGold  {...props}/>, headerShown: true}}
        />
        <Stack.Screen 
        name="Perfil"
        component={Perfil}
        options={{headerTitle: (props) => <LogoGold  {...props}/>, headerShown: true}}
        />
        <Stack.Screen 
        name="PerfilAdvogado"
        component={PerfilAdvogado}
        options={{headerTitle: (props) => <LogoGold  {...props}/>, headerShown: true}}
        />
        <Stack.Screen 
        name="Home"
        component={Home}
        options={{headerTitle: (props) => <LogoGold  {...props}/>, headerShown: true}}
        />
        <Stack.Screen 
        name="Chats"
        component={Chats}
        options={{headerTitle: (props) => <LogoGold  {...props}/>, headerShown: true}}
        />
        <Stack.Screen 
        name="ChatsBar"
        component={ChatsBar}
        options={{headerTitle: (props) => <LogoGold  {...props}/>, headerShown: true}}
        />
        <Stack.Screen 
        name="ChatsAdvogado"
        component={ChatsAdvogado}
        options={{headerTitle: (props) => <LogoGold  {...props}/>, headerShown: true}}
        />
        <Stack.Screen 
        name="ListaBusca"
        component={ListaBusca}
        options={{headerTitle: (props) => <LogoGold  {...props}/>, headerShown: true}}
        />
         <Stack.Screen 
        name="ListaBuscaAdvogado"
        component={ListaBuscaAdvogado}
        options={{headerTitle: (props) => <LogoGold  {...props}/>, headerShown: true}}
        />

       </Stack.Navigator>
    </NavigationContainer>

  );
}