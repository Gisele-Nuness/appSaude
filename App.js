import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "react-native";
import { NotificationProvider } from "./src/Context/NotificationContext";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import Splash from "./src/pages/Splash";
import Cadastro from "./src/pages/Cadastro";
import Cadastro2 from "./src/pages/Cadastro2";
import Cadastro3 from "./src/pages/Cadastro3";
import Login from "./src/pages/Login";
import Home from "./src/pages/Home";
import Perfil from "./src/pages/Perfil";
import Frutas from "./src/pages/Frutas";
import Sangue from "./src/pages/Sangue";
import Emergencia from "./src/pages/Emergencia";
import Vacinas from "./src/pages/Vacinas";
import Mapa from "./src/pages/Mapa";
import Alergias from "./src/pages/Alergias";
import Glicemia from "./src/pages/Glicemia";
import Agua from "./src/pages/Agua";
import Remedios from "./src/pages/Remedios";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NotificationProvider>
        <StatusBar hidden />
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="Cadastro" component={Cadastro} />
            <Stack.Screen name="Cadastro2" component={Cadastro2} />
            <Stack.Screen name="Cadastro3" component={Cadastro3} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Perfil" component={Perfil} />
            <Stack.Screen name="Frutas" component={Frutas} />
            <Stack.Screen name="Sangue" component={Sangue} />
            <Stack.Screen name="Emergencia" component={Emergencia} />
            <Stack.Screen name="Vacinas" component={Vacinas} />
            <Stack.Screen name="Mapa" component={Mapa} />
            <Stack.Screen name="Alergias" component={Alergias} />
            <Stack.Screen name="Agua" component={Agua} />
            <Stack.Screen name="Glicemia" component={Glicemia} />  
            <Stack.Screen name="Remedios" component={Remedios} />
          </Stack.Navigator>
        </NavigationContainer>
      </NotificationProvider>
    </GestureHandlerRootView>
  );
}
