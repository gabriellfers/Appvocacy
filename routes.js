import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Main from './src/telas/Main';
import Perfil from './src/telas/Perfil';
import Buscar from './src/telas/Busca';
import Chats from './src/telas/Chats';

import {Feather} from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

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
        name="Main"
        component={Main}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" color="#FFFFFF" size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Buscar"
        component={Buscar}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="search" color="#FFFFFF" size={size} />
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
            <Feather name="user" color="#FFFFFF" size={size} />
          ),
        }}
      />

    </Tab.Navigator>
    );

}