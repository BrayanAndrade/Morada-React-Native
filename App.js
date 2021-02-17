import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import{Home, Sobre, Login} from './src/pages'
import Router from './src/Components/Router/index'
import Header from './src/Components/Header'


const Stack = createStackNavigator();

function App() {
    return (
      <NavigationContainer initialRouteName='Login' headerMode='screen'>
        {/* <Header /> */}
        <Router/>
      </NavigationContainer>
    );
}

export default App;