import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Login from "../pantallas/cuenta/Login";
import Registrar from "../pantallas/cuenta/Registro";
import RestaurarPassword from "../pantallas/cuenta/RestaurarPassword";

const Stack = createStackNavigator();

export default function RutasNoAutenticadas() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="login"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen component={Login} name="login" />

        <Stack.Screen component={Registrar} name="register" />

        <Stack.Screen component={RestaurarPassword} name="lost-password" />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
