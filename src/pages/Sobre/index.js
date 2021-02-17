import React from "react";
import { Text, SafeAreaView, FlatList, Image, View, StyleSheet } from "react-native";
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
  return (
   
    <SafeAreaView style={styles.container}>
       <Image
            source={{uri: BG_IMG}}
            style={StyleSheet.absoluteFillObject}
            blurRadius={13}
        />
          <FlatList 
            data={DATA}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              
              <View style={styles.box}>
                <View style={styles.inner}>
                    <Text style={styles.titulo}> { item.title } </Text>
                    <Text style={styles.descricao} > { item.description } </Text>
                </View>       
             </View>
            )}
          />
         
      <View>
          
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    padding: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#dbd0ff',
  },
  box:{
      flex: 1,
      padding: 5,

    
  },
  inner:{
      flex: 1,
      height: 260,
      backgroundColor: "rgba(255, 255, 255, 0.3)",
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      borderRadius: 15,
      marginTop:50
  },
  titulo:{
    fontSize: 35,
    color: '#fff',
    marginBottom: 10,
    fontWeight: 'bold'
  },
  descricao:{
    fontSize: 17,
    marginBottom: 5,
    textAlign: 'center',
    color: '#fff'
  }

})
