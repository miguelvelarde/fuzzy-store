import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native'
import { Icon, Input, Button, Divider } from 'react-native-elements'
import { Navigation } from '@react-navigation/native'
import { isEmpty } from 'lodash'
import { validateEmail } from '../utils/Utils'
import { isUserLogged } from '../utils/Acciones'

export default function LoginForm(props) {

    const { toastRef } = props
    const [email, setemail] = useState('')
    const [show, setshow] = useState(true)
    const [password, setpassword] = useState('')

    if(isUserLogged){
        console.log('usuario logueado')
    }
    else{
        console.log('no login')
    }

    const login = ()=>{

        if(isEmpty(email) || isEmpty(password)){
            toastRef.current.show('Ingresar email y password!')
        }
        else if(!validateEmail(email)){
            toastRef.current.show('Email inválido')
        }
        
    }

    return (
        <View style={styles.container}>
            <View   
                style={styles.line}/>

            <Input
                containerStyle={styles.input}
                placeholder='Correo'
                onChange={(text)=>{ setemail(text)}}
                value={email}
                leftIcon={{
                    type: 'material-community',
                    name: 'email',
                    color: '#128c7e'
                }}
                rightIcon={{
                    type: 'material-community',
                    name: 'at',
                    color: '#128c7e'
                }}
                ></Input>
            
            <Input
                containerStyle={styles.input}
                placeholder='Password'
                secureTextEntry= {show}
                onChange={(text)=>{ setpassword(text)}}
                value={password}
                leftIcon={{
                    type: 'material-community',
                    name: 'security',
                    color: '#128c7e'
                }}
                rightIcon={{
                    type: 'material-community',
                    name: 'eye-outline',
                    color: '#128c7e',
                    onPress: ()=> setshow(!show)
                }}
                ></Input>

            <Button
                buttonStyle={{backgroundColor: '#25d366'}}
                containerStyle={styles.btnEnter}
                title='Entrar'
                onPress={()=> login()}
                ></Button>
            
            <Text style={styles.createAccount}>¿No tienes cuenta? 
                <Text style={styles.account}>{' '} Crear Cuenta</Text>    
            </Text>

            <Divider style={styles.dividerStyle}/>

            <Text> O </Text>

            <View style={styles.social}>
                <TouchableOpacity>
                    <Icon
                        size={24}
                        type='material-community'
                        name='google'
                        color='#128c7e'
                        backgroundColor='transparent'></Icon>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Icon
                        size={24}
                        type='material-community'
                        name='facebook'
                        color='#128c7e'
                        backgroundColor='transparent'></Icon>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#f5f6f8', 
        flex: 1,
        margin: 20,
        borderRadius: 50,
        alignItems: 'center',
        paddingTop: 20
    },
    dividerStyle:{
        backgroundColor: '#128c7e',
        height: 1,
        width: '90%',
        marginTop: 20
    },
    social:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        margin: 5,
    },
    input:{
        width: '90%',
        margin: 10,
        height: 50
    },
    btnEnter:{
        width: '90%',
        marginTop:10,
        marginBottom: 10
    },
    line:{
        borderBottomColor: '#25d366',
        borderBottomWidth: 2,
        width: 100
    },
    createAccount:{
        marginTop:20,
    },
    account:{
        color: '#128c7e',
        fontFamily: 'Roboto',
        fontSize: 12
    },
    txto:{
        color: '#128c7e',
        fontWeight: 'bold',
        fontSize: 12,
        marginTop:20
    },

})
