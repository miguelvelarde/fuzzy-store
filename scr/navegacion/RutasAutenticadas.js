import React from "react";
import { Icon } from "react-native-elements/dist/icons/Icon";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";

import TiendaStack from "./TiendaStack";
import MiTiendaStack from "./MiTiendaStack";
import PerfilStack from "./PerfilStack";
import ShopButton from "../componentes/ShopButton";

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const printIcon = (route, color) => {
  let iconName;

  switch (route.name) {
    case "cuenta":
      iconName = "account-circle-outline";
      break;
    case "latienda":
      iconName = "gift";
      break;
    case "mitienda":
      iconName = "star-outline";
      break;
    default:
      break;
  }

  return (
    <Icon type="material-community" name={iconName} size={24} color={color} />
  );
};

const TabBar = () => {
  return (
    <Tab.Navigator
      initialRouteName="latienda"
      tabBarOptions={{
        inactiveTintcolor: "#fff",
        activeTintColor: "#fff",
        style: {
          borderTopLeftRadius: 60,
          borderTopRightRadius: 60,
          alignItems: "center",
          backgroundColor: "#128c7e",
          paddingBottom: 5,
        },
      }}

      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => printIcon(route, color),
      })}
      
    >
      <Tab.Screen
        component={TiendaStack}
        name="latienda"
        options={{ title: "Tienda" }}
      />

      <Tab.Screen
        component={MiTiendaStack}
        name="mitienda"
        options={{
          title: "Mi Tienda",
          tabBarIcon: () => <ShopButton />,
        }}
      />

      <Tab.Screen
        component={PerfilStack}
        name="cuenta"
        options={{ title: "Mi Cuenta" }}
      />
    </Tab.Navigator>
  );
};

export default function RutasAutenticadas() {
  return (
    <NavigationContainer>
      <TabBar></TabBar>
    </NavigationContainer>
  );
}
