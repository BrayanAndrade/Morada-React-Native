import React from "react";
import { Text, SafeAreaView, TouchableOpacity } from "react-native";

export default function Sobre(props) {
    const {navigation} = props

  return (
    <SafeAreaView
      style={{flex: 1,alignItems: "center",justifyContent: "center",backgroundColor: "#FF5733",}}>
      <Text style={{ color: "#fff" }}>Aqui é a Sobre</Text>
     

        <TouchableOpacity
          style={{backgroundColor: "#fff",width: 60,height: 25,alignItems: "center",justifyContent: "center",borderRadius: 20,}}
          title="Ir para Home"
          onPress={() => navigation.navigate("Home")}>
          <Text style={{ color: "#000" }}>Home</Text>
        </TouchableOpacity>
    </SafeAreaView>
  );
}
