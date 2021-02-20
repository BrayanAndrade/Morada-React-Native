import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

const Header = () => {
    return (
        <View style={styles.container}>
            {/* <img src={require('../../img/morada.png')} style={{width: 30, marginLeft:20}}/> */}
            <Text style={styles.logo}>Morada</Text>
            <View style={{ flexDirection: 'row' }} >
                <Icon name="search" size={25} color='#fff' style={{ marginRight: 20 }} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '10%',
        marginTop: 30,
        backgroundColor: '#983DFF',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    lupa: {
        color: 'white',
        marginRight: 20,
        fontSize: 30
    }
})

export default Header