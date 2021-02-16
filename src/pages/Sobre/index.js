import React from "react";
import { Text, SafeAreaView, TouchableOpacity, FlatList, Image, View } from "react-native";


export default function Sobre(props) {
    const {navigation} = props
    const DATA = [{
      id: Math.random(),
      title: 'NOSSA MISSÃO',
      description: "Somos uma organização que visa o desenvolvimento individual e coletivo de pessoas em situação insustentável de moradia. Neste processo estamos dispostos a melhorar moradias em situação de risco, pequenos reparos em toda parte de uma residência. Sempre utilizando métodos construtivos que irão efetivamente reparar um problema e mudar as condições de bem estar dessas pessoas."
    },
    {
      id: Math.random(),
      title: 'NOSSOS VALORES',
      description: "Nossos valores e ideais são paltados no trabalho voluntário, onde o indivíduo se sensibiliza com a causa do próximo e entra em contato para prover uma mudança na realidade de seu próximo, seja com doações de materias, ferramentas, mão de obra ou trasporte de materias."
    }

    ]
  return (
    <SafeAreaView
      style={{flex: 1,alignItems: "center",justifyContent: "center",backgroundColor: "#fff",}}>
      <Text >Aqui é a Sobre</Text>

    <View>    
        <FlatList 
          data={DATA}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <View>
                <Text style={{fontSize: 45}}> {item.title} </Text> 
                <Text style={{fontSize: 25}}> {item.description} </Text> 
            </View>
             
       
          )}
        />
    </View>
      <Text>Sobre</Text>

    </SafeAreaView>
  );
}
