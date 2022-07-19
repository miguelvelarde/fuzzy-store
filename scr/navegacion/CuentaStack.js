import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'

import ConfirmarNumero from '../pantallas/cuenta/ConfirmarNumero.js'
import EnviarConfirmacion from '../pantallas/cuenta/EnviarConfirmacion'

const Stack = createStackNavigator()

export function CuentaStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                component={ConfirmarNumero}
                name='confirmar-numero'
                options={
                    {
                        title: 'Confirma tu teléfono',
                        headerStyle: {backgroundColor: '#128c7e'},
                        headerTintColor: '#fff'
                    }}
            ></Stack.Screen>

            <Stack.Screen
                component={EnviarConfirmacion}
                name='enviar-confirmacion'
                options={
                    {
                        title: 'Confirmar teléfono',
                        headerStyle: {backgroundColor: '#128c7e'},
                        headerTintColor: '#fff'
                    }}
            ></Stack.Screen>
        </Stack.Navigator>
    )
}