import React from 'react'
import { Text, SafeAreaView, TouchableOpacity } from "react-native";


export default function Home(props) {
    const { navigation } = props;
    
    return (
      <SafeAreaView
        style={{flex: 1,alignItems: "center",justifyContent: "center",backgroundColor: "#1975F9",}}>
        <Text style={{ color: "#fff" }}>Aqui é a Home</Text>
        

        <TouchableOpacity
          style={{backgroundColor: "#fff",width: 60,height: 25,alignItems: "center",justifyContent: "center",borderRadius: 20,}}
          title="Ir para Sobre"
          onPress={() => navigation.navigate("Sobre")}>
          <Text style={{ color: "#000" }}>Sobre</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{backgroundColor: "#fff",width: 60,height: 25,alignItems: "center",justifyContent: "center",borderRadius: 20,}}
          title="Ir para Login"
          onPress={() => navigation.navigate("Login")}>
          <Text style={{ color: "#000" }}>Login</Text>
        </TouchableOpacity>

        
      </SafeAreaView>
    );
  }
  