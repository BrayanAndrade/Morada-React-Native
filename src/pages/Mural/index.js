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

const dados = [
    {
        id: Math.random(),
        nome: "Rosana Vieira",
        descricao: "Ofereço serviços de troca de chuveiro e pequenos reparos elétricos",
        bairro: "R. Linda Batista",
        categoria: "Oferecendo"

    },
    {
        id: Math.random(),
        nome: "Lucas Moreira",
        descricao: "Pedreiro para alvenaria.",
        bairro: "Av. Aílton Henrique da Costa",
        categoria: "Solicitando"

    },
    {
        id: Math.random(),
        nome: "Matheus Paulo",
        descricao: "Posso nessa semana ajudar em pequenos reparos na região de bento ribeiro.",
        bairro: "Av. José Luiz Ferraz",
        categoria: "Oferecendo"

    },
    {
        id: Math.random(),
        nome: "Roberto Correia",
        descricao: "Ajudo com penas alvenarias em bloco de concreto.",
        bairro: "R. Adina Mera",
        categoria: "Oferecendo"

    },
    {
        id: Math.random(),
        nome: "Brayan Andrade",
        descricao: "Pintura de casa",
        bairro: "R. Sandro Moreira",
        categoria: "Solicitando"

    },
    {
        id: Math.random(),
        nome: "João Paulo",
        descricao: "Tenho uma caixa de ferramentas para doar",
        bairro: "R. Gicondo Dias",
        categoria: "Oferecendo"

    },
    {
        id: Math.random(),
        nome: "Wellington Ferreira",
        descricao: "Peço ajuda para consertar meu telhado",
        bairro: "R. Guernica",
        categoria: "Solicitando"

    },
    {
        id: Math.random(),
        nome: "Milene Almeida",
        descricao: "Preciso cimento para terminar de consertar a calçada",
        bairro: "R. Origenes Lessa",
        categoria: "Solicitando"

    },
    {
        id: Math.random(),
        nome: "Rodrigo Andrade",
        descricao: "Pintura",
        bairro: "Av. Teotonio Viléla ",
        categoria: "Oferecendo"

    },
    {
        id: Math.random(),
        nome: "Marcos Antonio",
        descricao: "Preciso de ajuda para executar 2 metros de alvenaria.",
        bairro: "R. Gilberto Freire",
        categoria: "Solicitando"

    },
    {
        id: Math.random(),
        nome: "Lucas Moreira",
        descricao: "Mão de obra pintura",
        bairro: "R. Gicondo Dias",
        categoria: "Oferecendo"

    },
    {
        id: Math.random(),
        nome: "Fernanda Carla",
        descricao: "Eletricista para instalação de tomadas.",
        bairro: "R. Sandro Moreira",
        categoria: "Solicitando"

    },
    {
        id: Math.random(),
        nome: "Maria Clara",
        descricao: "Preciso de um carrinho de mão para tirar areia aqui da frente de casa",
        bairro: "R. Alberto Bianchi",
        categoria: "Solicitando"

    },
    {
        id: Math.random(),
        nome: "Matheus Santana",
        descricao: "Posso nessa semana ajudar em pequenos reparos na região de bento ribeiro.",
        bairro: "R. Manoel Bouncher Pinto",
        categoria: "Oferecendo"

    },
]

//https://images-ext-2.discordapp.net/external/KDI34rqMPdkobzhlvjm25_YkpxcS38BMTn7k7UJ9uBU/https/i.pinimg.com/originals/4d/e0/c7/4de0c7654c3877c6cfada14fa2d7104f.jpg?width=169&height=300

const BG_IMG = 'https://www.wallpapertip.com/wmimgs/193-1930168_4k-white-brickwall-close-up-white-bricks-bricks.jpg'

const SPACING = 20;
const AVATAR_SIZE = 70;

export default () => {
 

    return <View style={{flex: 1, backgroundColor: '#fff'}}>

        <Image
            source={{uri: BG_IMG}}
            style={StyleSheet.absoluteFillObject}
            // blurRadius={1}
        />

        
        <FlatList
        data={dados}
        keyExtractor={item => item.id}
        contentContainerStyle={{padding: SPACING, paddingTop: StatusBar.currentHeight || 42}}
        renderItem={({item, index}) => {



            return <View style={{
                        flextDirection: 'row',
                         padding: SPACING,
                         marginBottom: SPACING,
                         backgroundColor: 'rgba(255,255,255,0.7)',
                         borderRadius: 12,
                         shadowColor: "#000",
                         shadowOffset:{width: 0, height: 10},
                         shadowOpacity: .3,
                         shadowRadius: 20,
                       
                    }}>

                <View>
                    <Text style={{fontSize:26, fontWeight: '700', marginBottom: 5}}> {item.nome}</Text>
                    <Text style={{fontSize:20, opacity: .7, marginBottom: 20}}> {item.descricao} </Text>
                    <Text style={{fontSize:18, opacity: .6, fontWeight: '700', marginBottom: 5}}> {item.bairro} </Text>
                    <Text style={{fontSize:22, opacity: .9, color: '#fff', backgroundColor: '#3179FF', borderRadius: 30, width: 150, textAlign: 'center', marginLeft: 80, }}> {item.categoria}</Text>
                </View>
            </View>
        }}
    />


    </View>
}