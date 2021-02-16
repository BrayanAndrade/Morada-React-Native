import React from 'react'
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs'
import { Ionicons } from '@expo/vector-icons';

import Home from '../../pages/Home/index'
import Sobre from '../../pages/Sobre/index'
import Login from '../../pages/Login/index'
import Mural from '../../pages/Mural/index'


const Tab = createMaterialBottomTabNavigator();

const Routes= () => {
    return(



        <Tab.Navigator inactiveColor="rgba(255, 255, 255, 0.5)" activeColor="#fff">
            <Tab.Screen 
                name="Home"
                component = {Home}
                options={{
                    tabBarLabel: 'Home',
                    tabBarColor: '#206AFF',
                    tabBarIcon:({ color }) => (
                        <Ionicons name="home" color={color} size={26}/>
                    ),
                }}
            />
            <Tab.Screen 
                name="Sobre"
                component = {Sobre}
                options={{
                    tabBarLabel: 'Sobre',
                    tabBarColor: '#983DFF',
                    tabBarIcon:({ color }) => (
                        <Ionicons name="heart" color={color} size={26}/>
                    ),
                }}
            />
            <Tab.Screen 
                name="Mural"
                component = {Mural}
                options={{
                    tabBarLabel: 'Mural',
                    tabBarColor: '#FF7B3D',
                    tabBarIcon:({ color }) => (
                        <Ionicons name="construct" color={color} size={24}/>
                    ),
                }}
            />
            <Tab.Screen 
                name="Login"
                component = {Login}
                options={{
                    tabBarLabel: 'Login',
                    tabBarColor: '#000',
                    tabBarIcon:({ color }) => (
                        <Ionicons name="person" color={color} size={26}/>
                    ),
                }}
            />

        </Tab.Navigator>

 
 
      
    )
}

export default Routes