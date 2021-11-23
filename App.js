import React from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from "@react-navigation/stack";
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
import ChatsAdvogado from './src/telas/ChatsAdvogado';
import ListaBusca from './src/telas/ListaBusca';


const Stack = createStackNavigator();


export default function App({  }){
 
  return(
     <NavigationContainer>
       <Stack.Navigator initialRouteName="Cadastro">
        <Stack.Screen 
        name="Cadastro"
        component={Cadastro}
        options={{title: "Appvocacy", headerShown: true}}
        />
        <Stack.Screen 
        name="Main"
        component={Main}
        options={{title: "Appvocacy", headerLeft: false, headerShown: true}}
        />
        <Stack.Screen 
        name="LoginCliente"
        component={LoginCliente}
        options={{title: "Appvocacy", headerShown: true}}
        />
        <Stack.Screen 
        name="LoginAdvogado"
        component={LoginAdvogado}
        options={{title: "Appvocacy", headerShown: true}}
        />
        <Stack.Screen 
        name="CadastroCliente"
        component={CadastroCliente}
        options={{title: "Appvocacy", headerShown: true}}
        />
        <Stack.Screen 
        name="CadastroAdvogado"
        component={CadastroAdvogado}
        options={{title: "Appvocacy", headerShown: true}}
        />
        <Stack.Screen 
        name="Perfil"
        component={Perfil}
        options={{title: "Appvocacy", headerShown: true}}
        />
        <Stack.Screen 
        name="PerfilAdvogado"
        component={PerfilAdvogado}
        options={{title: "Appvocacy", headerShown: true}}
        />
        <Stack.Screen 
        name="Home"
        component={Home}
        options={{title: "Appvocacy", headerShown: true}}
        />
        <Stack.Screen 
        name="Chats"
        component={Chats}
        options={{title: "Appvocacy", headerShown: true}}
        />
        <Stack.Screen 
        name="ChatsAdvogado"
        component={ChatsAdvogado}
        options={{title: "Appvocacy", headerShown: true}}
        />
        <Stack.Screen 
        name="ListaBusca"
        component={ListaBusca}
        options={{title: "Appvocacy", headerShown: true}}
        />

       </Stack.Navigator>
    </NavigationContainer>

  );
}