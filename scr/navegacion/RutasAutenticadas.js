import React from 'react'
import { Icon } from 'react-native-elements/dist/icons/Icon'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import TiendaStack from './TiendaStack'
import MiTiendaStack from './MiTiendaStack'
import PerfilStack from './PerfilStack'
import ShopButton from '../componentes/ShopButton'

const Tab = createBottomTabNavigator()

const printIcon = (route, color) => {
    let iconName

    switch (route.name) {
        case 'cuenta':
            iconName = 'account-circle-outline'
            break;
        case 'latienda':
            iconName = 'gift'
            break;
        case 'mitienda':
            iconName = 'star-outline'
            break;
        default:
            break;
    }

    return(
        <Icon
            type='material-community'
            name={iconName}
            size={22}
            color={color}/>
    )
}

export default function RutasAutenticadas() {
    return (
        <NavigationContainer>
            <Tab.Navigator
            initialRouteName='latienda'
            screenOptions={({route})=>({
                tabBarIcon: ({color}) => printIcon(route, color),
                tabBarActiveTintColor: '#fff',
                    tabBarInactiveTintColor: '#fff',
                    tabBarStyle: 
                      {
                          borderTopLeftRadius: 40,
                          borderTopRightRadius:40,
                          alignItems:'center',
                          backgroundColor:'#128c7e',
                          paddingBottom:5    
                      }
            })}>
            
            <Tab.Screen
                component={TiendaStack}
                name='latienda'
                options={{title:'Tienda'}}/>
            
            <Tab.Screen
                component={MiTiendaStack}
                name='mitienda'
                options={{
                    title:'Mi Tienda',
                    tabBarIcon: ()=> <ShopButton/>
                    }}/>

            <Tab.Screen
                component={PerfilStack}
                name='cuenta'
                options={{title: 'Mi Cuenta'}}/>

        </Tab.Navigator>
        </NavigationContainer>
        )
}
