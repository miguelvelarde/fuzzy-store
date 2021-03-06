import React, { useRef } from 'react'
import { StyleSheet, Text, View, Image, StatusBar } from 'react-native'
import Toast from 'react-native-easy-toast'

import LoginForm from '../../componentes/LoginForm'

export default function Login() {

    const toastRef = useRef()


    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#128c73"></StatusBar>
            <Image
                source={require('../../../assets/logo.png')}
                style={styles.imageLogo}/>
            <Text style={styles.banner}>¬°Bienvenido!</Text>
            <LoginForm toastRef={toastRef}></LoginForm>
            <Toast ref={toastRef} position='center' opacity={0.9}/>
        </View>
    )
}

const styles = StyleSheet.create({

    container:{
        flex: 1,
        backgroundColor: '#128c7e'
    },
    imageLogo:{
        width: 106,
        height: 106,
        marginTop:60,
        alignSelf: 'center'
    },
    banner:{
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: 30,
        color: '#fff',
        alignSelf:'center'
    }
})
