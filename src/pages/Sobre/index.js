import React from "react";
import { Text, SafeAreaView, FlatList, Image, View, StyleSheet, StatusBar } from "react-native";
import Header from '../../Components/Header/index'


export default function Sobre(props) {
    const {navigation} = props
    const DATA = [{
      id: Math.random(),
      title: 'NOSSA MISSÃO',
      description: "Somos uma organização que visa o desenvolvimento individual e coletivo de pessoas em situação insustentável de moradia. Neste processo estamos dispostos a melhorar moradias em situação de risco, pequenos reparos em toda parte de uma residência. "
    },
    {
      id: Math.random(),
      title: 'NOSSOS VALORES',
      description: "Nossos valores e ideais são paltados no trabalho voluntário, onde o indivíduo se sensibiliza com a causa do próximo e entra em contato para prover uma mudança na realidade de seu próximo, seja com doações de materias, ferramentas, mão de obra ou trasporte de materias."
    }
   ]

    const BG_IMG = 'https://images.pexels.com/photos/1939485/pexels-photo-1939485.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    
    
    const SPACING = 20;
    return <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>

    <Image
        source={{uri: BG_IMG}}
        style={StyleSheet.absoluteFillObject}
        // blurRadius={1}
    />

    
    <FlatList
    data={DATA}
    keyExtractor={item => item.id}
    contentContainerStyle={{padding: SPACING, paddingTop: StatusBar.currentHeight || 42}}
    renderItem={({item, index}) => {



        return <SafeAreaView  style={{
                    flextDirection: 'row',
                     padding: SPACING,
                     marginBottom: SPACING,
                     backgroundColor: 'rgba(255,255,255,0.4)',
                     borderRadius: 12,
                     borderColor:'white',
                     borderLeftWidth:1,
                     borderTopWidth:1,
                     blurRadius: '20',
                     
                }}>

            <SafeAreaView>
                <Text style={{fontSize:28, fontWeight: 'bold', textAlign: 'center',}}> {item.title}</Text>
                <Text style={{fontSize:21,   }}> {item.description} </Text>
               
            </SafeAreaView>
        </SafeAreaView>
    }}
/>


</SafeAreaView>
}
