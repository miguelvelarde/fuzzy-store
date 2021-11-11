import React from 'react'
import { StyleSheet } from 'react-native'
import {createStackNavigator} from '@react-navigation/stack'

import MiTienda from '../pantallas/miTienda/MiTienda'
import EditarProducto from '../pantallas/miTienda/EditarProducto'

const Stack = createStackNavigator()

export default function MiTiendaStack() {
    return (
        <Stack.Navigator
            screenOptions={
                { 
                    headerStyle: { backgroundColor: '#128c7e' },
                    headerTintColor: '#fff' 
                }}>            

            <Stack.Screen
                component={MiTienda}
                name='mi-tienda'
                options={{ title: 'Mi Tienda'}}>
            </Stack.Screen>

            <Stack.Screen
                component={EditarProducto}
                name='editar-producto'
                options={{ title: 'Editar Producto'}}>
            </Stack.Screen>

        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({})
