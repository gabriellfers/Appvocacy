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
        options={{title: "Appvocacy", headerLeft: null, headerShown: true}}
        />
        <Stack.Screen 
        name="Main"
        component={Main}
        options={{title: "Appvocacy", headerLeft: null, headerShown: true}}
        />
        <Stack.Screen 
        name="Login"
        component={Login}
        options={{title: "Appvocacy", headerLeft: null, headerShown: true}}
        />
        <Stack.Screen 
        name="CadastroCliente"
        component={CadastroCliente}
        options={{title: "Appvocacy" ,headerLeft: null, headerShown: true}}
        />
        <Stack.Screen 
        name="Perfil"
        component={Perfil}
        options={{title: "Appvocacy", headerLeft: null, headerShown: true}}
        />
        <Stack.Screen 
        name="Buscar"
        component={Buscar}
        options={{title: "Appvocacy", headerLeft: null, headerShown: true}}
        />
        <Stack.Screen 
        name="Chats"
        component={Chats}
        options={{title: "Appvocacy", headerLeft: null, headerShown: true}}
        />
        
       </Stack.Navigator>
    </NavigationContainer>

  );
}