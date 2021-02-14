import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity, Animated, Keyboard, Image } from 'react-native';

export default function Login(props) {
    const { navigation } = props;

  const [offset] = useState(new Animated.ValueXY({x: 0, y:95}));
  const [opacity] = useState(new Animated.Value(0));
  const [logo] = useState(new Animated.ValueXY({x: 230, y:300}))

  useEffect(() => {
     Keyboard.addListener("keyboardDidShow", keyboardDidShow);
     Keyboard.addListener('keyboardDidHide', keyboardDidHide);


    Animated.parallel([
      Animated.spring(offset.y,{
        toValue:0,
        speed: 4,
        bounciness: 20
      }),
      Animated.timing(opacity,{
        duration:500,
        toValue: 1,
      })
    ]).start();
    
  }, []);

  function keyboardDidShow(){
    Animated.parallel([
      Animated.timing(logo.x, {
        toValue: 155,
        duration: 100,
      }),
      Animated.timing(logo.y, {
        toValue: 195,
        duration: 100,
      }),
    ]).start();
  }

  function keyboardDidHide(){
    Animated.parallel([
      Animated.timing(logo.x, {
        toValue: 230,
        duration: 100,
      }),
      Animated.timing(logo.y, {
        toValue: 300,
        duration: 100,
      }),
    ]).start();
  }

  return (
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.logo}>
        <Animated.Image 
        style={{
          width: logo.x,
          height: logo.y,
        }} source={require('../../../assets/morada.png')} />
      </View>

      <Animated.View 
        style={[styles.container,
           {
            opacity: opacity,
            transform:[
              {translateY: offset.y}
              ]}]}>
        <TextInput style={styles.input}
        placeholder="Email"
        autoCorrect={false}
        onChangeText={() => {}}
        />

        <TextInput style={styles.input}
        placeholder="Senha"
        autoCorrect={false}
        onChangeText={() => {}}
        />

        <TouchableOpacity
         style={styles.btnSubmit}  title="Entrar"
         onPress={() => navigation.navigate("Home")}>
          <Text style={styles.SubmitText}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnRegister}>
          <Text style={styles.RegisterText}>Cadastre-se</Text>
        </TouchableOpacity>

      </Animated.View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#191919',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    flex:1,
    justifyContent: 'center',

  },
  container:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '85%',
  },
  input:{
    backgroundColor: '#fff',
    width: '90%',
    marginBottom:15,
    color:'#222',
    fontSize: 17,
    borderRadius:7,
    padding: 10,
  },
  btnSubmit:{
    backgroundColor: '#35AAFF',
    width: '90%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7
  },
  SubmitText:{
    color: '#fff',
    fontSize: 18
  },
  btnRegister:{
    marginTop: 10,
  },
  RegisterText:{
    color:'#fff'
  }
});
