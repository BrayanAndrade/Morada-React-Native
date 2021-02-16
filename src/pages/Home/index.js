import React from 'react'
import { Text, SafeAreaView, TouchableOpacity, Image } from "react-native";


export default function Home(props) {
    const { navigation } = props;
    
    return (
      <SafeAreaView
        style={{flex: 1,alignItems: "center",justifyContent: "center",backgroundColor: "#fff",}}>
        <Text style={{ color: "#fff" }}>Aqui é a Home</Text>

        
      </SafeAreaView>
    );
  }
  