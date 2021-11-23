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
                backgroundColor: '#BBC7F0',
                borderTopColor: 'transparent',

            },
           tabBarActiveBackgroundColor: '#B1BDE3',
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
            <Feather name="user" color="#FFFFFF" size={size} />
          ),
        }}
      />
    </Tab.Navigator>
    );

}