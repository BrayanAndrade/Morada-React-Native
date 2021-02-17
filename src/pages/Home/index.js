import React from 'react';
import {StatusBar} from 'expo-status-bar'
import { Animated, Text, Image, View, StyleSheet, Dimensions, FlatList } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const {width, height} = Dimensions.get('screen');

const bgs = ['#3d3d3d', '#FF7B3D', '#00bcc2', '#f586ce'];

const DATA = [
  {
    "key": "3571572",
    "title": "SERVIÇOS",
    "description": "Você poderá encontrar serviços voluntarios e doações de todo tipo de ferramenta. Comece escolhendo uma categoria",
    "image": require("../../img/help.png")
  },
    {
      "key": "3571747",
      "title": "CONSTRUÇÃO",
      "description": "Alvenaria, concretagem, revestimentos, carpintaria...",
      "image": require("../../img/construcao.png")
    },
    {
      "key": "3571680",
      "title": "MANUTENÇÃO",
      "description": "Instalação elétrica, reparos hidráulicos, pinturas, etc...",
      "image": require("../../img/tools.png")
    },
    {
      "key": "3571603",
      "title": "DOAÇÕES",
      "description": "Tá com aquela caixa de ferramenta parada em casa, ou algum resto de obra Ofereça ajuda aqui na Morada",
      "image": require("../../img/heart.png")
    }
];

const Indicator = ({scrollX}) => {
  
  return (
    <View style={{position: 'absolute', bottom: 100, flexDirection: 'row'}}>
    {DATA.map((_, i) => {

      const inputRange = [(i - 1) * width, i * width, (i + 1) * width];

      const scale = scrollX.interpolate ({
        inputRange,
        outputRange: [0.5, 1.4, 0.5],
        extrapolate: 'clamp'
      });

      const opacity= scrollX.interpolate ({
        inputRange,
        outputRange: [0.6, 0.9, 0.6],
        extrapolate: 'clamp'
      });

      return(
        <Animated.View
          key={`indicator-${i}`}
          style= {{
            height: 10,
            width: 10,
            borderRadius: 5,
            backgroundColor: '#fff',
            opacity,
            margin: 10,
            transform: [
               {
              scale,
            },
          ],
        }}
      />
    );
    })}
  </View>
  );
};

const Backdrop = ({scrollX}) => {

  const backgroundColor = scrollX.interpolate ({
    inputRange: bgs.map((_, i) => i * width),
    outputRange: bgs.map((bg) => bg),
  });
  return (
  <Animated.View 
    style={[
      StyleSheet.absoluteFillObject,
    {
      backgroundColor,

    },
    ]}
  />
  )
}

const Square = ({scrollX}) => {
  const YOLO = Animated.modulo(Animated.divide(
    Animated.modulo(scrollX, width),
    new Animated.Value(width)), 
    1
  );

  const rotate = YOLO.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: ['35deg', '-35deg', '35deg']
  })

  const translateX = YOLO.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, -height, 0]
  })


  return (
    <Animated.View 
    style = {{
      width: height, 
      height: height, 
      backgroundColor: '#fff',
      borderRadius: 175,
      position: 'absolute',
      top: -height * 0.6,
      left: -height * 0.3,
      transform:[
        {
          rotate,
        },
        {
          translateX,
        },
      ],
      }}
   />
  )
}

export default function Home() {
  const scrollX = React.useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Backdrop scrollX={scrollX} />
      <Square scrollX={scrollX} />
     <Animated.FlatList 
        data={DATA}
        keyExtractor={(item) => item.key}
        horizontal
        scrollEventThrottle={32}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: false}
        )}
        contentContainerStyle={{paddingBottom: 100}}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        renderItem={({item}) => {
          return (
          <View style={{width, alignItems: 'center'}}>
            <View 
              style={{
                flex: 0.7,
                 justifyContent: 'center'
              }}>
            <Image 
              source={item.image}
              style={{
                width: width/2,
                height: width/2, 
                resizeMode: 'contain',
               }} 
               />
            </View>
                    <View style={{flex: 0.3}}>
                      <Text style={{fontWeight: 'bold', fontSize: 30, marginBottom: 10, textAlign: 'center', color: 'white', }}>{item.title}</Text>
                      <Text style={{fontWeight: '300', textAlign: 'center', fontSize: 17, color: 'white', marginLeft: 20, marginRight: 20}}>{item.description}</Text>
                    </View>
          </View> 
          );
        }}    
     />
      <Indicator scrollX={scrollX} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
  