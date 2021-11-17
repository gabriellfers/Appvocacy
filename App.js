import React from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import Cadastro from './src/telas/CadastroEscolha';
import CadastroCliente from './src/telas/CadastroCliente';
import Main from './src/telas/rotas';
import Login from './src/telas/Login';
import Perfil from './src/telas/Perfil';
import Buscar from './src/telas/Busca';
import Chats from './src/telas/Chats';


const Stack = createStackNavigator();


export default function App({  }){
 
  return(
     <NavigationContainer>
       <Stack.Navigator initialRouteName="Cadastro">
        <Stack.Screen 
        name="Cadastro"
        component={Cadastro}
        />
        <Stack.Screen 
        name="Main"
        component={Main}
        />
        <Stack.Screen 
        name="Login"
        component={Login}
        />
        <Stack.Screen 
        name="CadastroCliente"
        component={CadastroCliente}
        />
        <Stack.Screen 
        name="Perfil"
        component={Perfil}
        />
        <Stack.Screen 
        name="Buscar"
        component={Buscar}
        />
        <Stack.Screen 
        name="Chats"
        component={Chats}
        />
        
       </Stack.Navigator>
    </NavigationContainer>

  );
}