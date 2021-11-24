import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './src/telas/Main';
import Perfil from './src/telas/Perfil';
import PerfilAdvogado from './src/telas/PerfilAdvogado';
import Buscar from './src/telas/Busca';
import Chats from './src/telas/Chats';
import ChatsAdvogado from './src/telas/ChatsAdvogado';

import {Feather} from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const Tab2 = createBottomTabNavigator();




export default function Routes(){
    return(
        <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarLabelStyle: {
            color: "#fff"
          },
            tabBarStyle:{
                backgroundColor: '#D49D3D',
                borderTopColor: 'transparent',
                
            },
           tabBarActiveBackgroundColor: '#bf8d36',
            tabStyle: {
                tabStyle:{
                    paddingBottom:5,
                    paddingTop:5, 
                }
            }
        }}
        >
      <Tab.Screen
        name="Home"
        component={Buscar}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" color="#FFFFFF" size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Chats"
        component={Chats}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="message-square" color="#FFFFFF" size={size} />
          ),
        }}
      />
        <Tab.Screen
        name="Perfil"
        component={Perfil}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="users" color="#FFFFFF" size={size} />
          ),
        }}
      />

    </Tab.Navigator>



      
    );
}

      
  