import React from "react";
import { Text, SafeAreaView, FlatList, Image, View, StyleSheet, StatusBar } from "react-native";
import Header from '../../Components/Header/index'


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

    const BG_IMG = 'https://images-ext-2.discordapp.net/external/CDTZ9Y1YKIScLr6tRu-ZQa-SaAPOt7zbnYwVJuvm_P0/https/www.wallpapertip.com/wmimgs/172-1725278_1080-x-2340-gradient.jpg?width=228&height=405'
    
    
    const SPACING = 20;
    return <View style={{flex: 1, backgroundColor: '#fff'}}>

    <Image
        source={{uri: BG_IMG}}
        style={StyleSheet.absoluteFillObject}
        blurRadius={13}
    />

    
    <FlatList
    data={DATA}
    keyExtractor={item => item.id}
    contentContainerStyle={{padding: SPACING, paddingTop: StatusBar.currentHeight || 42}}
    renderItem={({item, index}) => {



        return <View style={{
                    flextDirection: 'row',
                     padding: SPACING,
                     marginBottom: SPACING,
                     backgroundColor: 'rgba(255,255,255,0.8)',
                     borderRadius: 12,
                     shadowColor: "#000",
                     shadowOffset:{width: 0, height: 10},
                     shadowOpacity: .3,
                     shadowRadius: 20,
                   
                }}>

            <View>
                <Text style={{fontSize:28, fontWeight: '700', textAlign: 'center'}}> {item.title}</Text>
                <Text style={{fontSize:20, opacity: .7, textAlign: 'center'}}> {item.description} </Text>
               
            </View>
        </View>
    }}
/>


</View>
}
