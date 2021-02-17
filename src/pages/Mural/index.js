import  React from 'react';
import { StatusBar, Image, Animated, Text, View, Dimensions, StyleSheet, FlatList } from 'react-native';
const { width, height } = Dimensions.get('screen');
import faker from 'faker'

faker.seed(10);
const DATA = [...Array(30).keys()].map((_, i) => {
    return {
        key: faker.random.uuid(),
        image: `https://randomuser.me/api/portraits/${faker.helpers.randomize(['women', 'men'])}/${faker.random.number(60)}.jpg`,
        name: faker.name.findName(),
        jobTitle: faker.name.jobTitle(),
        email: faker.internet.email(),
    };
});

const BG_IMG = 'https://images-ext-2.discordapp.net/external/KDI34rqMPdkobzhlvjm25_YkpxcS38BMTn7k7UJ9uBU/https/i.pinimg.com/originals/4d/e0/c7/4de0c7654c3877c6cfada14fa2d7104f.jpg?width=169&height=300'

const SPACING = 20;
const AVATAR_SIZE = 70;

export default () => {
 

    return <View style={{flex: 1, backgroundColor: '#fff'}}>

        <Image
            source={{uri: BG_IMG}}
            style={StyleSheet.absoluteFillObject}
            blurRadius={13}
        />

        
        <FlatList
        data={DATA}
        keyExtractor={item => item.key}
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
                <Image
                    source={{uri:item.image}}
                    style={{
                        width: AVATAR_SIZE,
                         height: AVATAR_SIZE,
                         borderRadius: AVATAR_SIZE, 
                         marginRight: SPACING / 2
                    }}/>

                <View>
                    <Text style={{fontSize:22, fontWeight: '700'}}> {item.name}</Text>
                    <Text style={{fontSize:18, opacity: .7}}> {item.jobTitle} </Text>
                    <Text style={{fontSize:22, opacity: .8, color: '#0099cc'}}> {item.email}</Text>
                </View>
            </View>
        }}
    />


    </View>
}