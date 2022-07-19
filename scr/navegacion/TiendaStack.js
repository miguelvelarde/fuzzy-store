import React from 'react'
import { View } from 'react-native'
import {createStackNavigator} from '@react-navigation/stack'

import AddProduct from '../pantallas/tienda/AddProduct'
import Contacto from '../pantallas/tienda/Contacto'
import Detalle from '../pantallas/tienda/Detalle'
import Mensajes from '../pantallas/tienda/Mensajes'
import Tienda from '../pantallas/tienda/Tienda'


const Stack = createStackNavigator()

export default function TiendaStack() {
    return (
        <View>
            <Stack.Navigator>
                <Stack.Screen
                    component={Tienda}
                    name='tienda'
                    options={
                        {headerShown: false}
                    }>
                </Stack.Screen>

                <Stack.Screen
                    component={Mensajes}
                    name='mensajes'
                    options={
                        {
                            title: 'Mensajes',
                            headerStyle: {backgroundColor: '#128c7e'},
                            headerTintColor: '#fff'
                        }
                    }>
                </Stack.Screen>


                <Stack.Screen
                    component={Detalle}
                    name='detalle'
                    options={
                        {
                            headerTransparent: true,
                            headerTintColor: '#128c7e',
                            title: ''
                        }
                    }>
                </Stack.Screen>

                <Stack.Screen
                    component={Contacto}
                    name='contacto'
                    options={
                        {
                            title: 'Contacto',
                            headerStyle: {backgroundColor: '#128c7e'},
                            headerTintColor: '#fff'
                        }
                    }>
 
                </Stack.Screen>

                <Stack.Screen
                    component={AddProduct}
                    name='add-product'
                    options={
                        {
                            title: 'Agregar nuevo producto',
                            headerStyle: {backgroundColor: '#128c7e'},
                            headerTintColor: '#fff'
                        }
                    }>
                </Stack.Screen>
            </Stack.Navigator>
        </View>
    )
}
