import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import{Home, Sobre, Login} from './src/pages'


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer initialRouteName='Login' headerMode='screen'>
      <Stack.Navigator>
      <Stack.Screen name="Login"  component={Login} options={{ title: 'Login'}} />
      <Stack.Screen name="Home"  component={Home} options={{ title: 'Home'}}/>
      <Stack.Screen name="Sobre"  component={Sobre} options={{ title: 'Sobre'}} />
      
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;