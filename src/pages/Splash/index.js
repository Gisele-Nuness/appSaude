import { StatusBar } from "expo-status-bar";
import { Text, View, Image, Pressable } from "react-native";
import styles from "./style";
import { useNavigation } from "@react-navigation/native";
import * as Animatable from "react-native-animatable";
import React, { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Splash() {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(async () => {
      try {
        const recuperarDados = await AsyncStorage.getItem("recuperarDados"); // Espera a Promise ser resolvida
        console.log(recuperarDados);

        if (recuperarDados === null) {
        
          navigation.navigate("Cadastro");
        } else {
          
          navigation.navigate("Home");
        }
      } catch (error) {
        console.error("Erro ao recuperar dados:", error);
        navigation.navigate("Cadastro");
      }
    }, 5000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Animatable.View animation="bounceInDown">
        <Image
          source={require("../../../assets/gifCapivara.gif")}
          style={styles.img}
        />
        <Image
          source={require("../../../assets/carregando.gif")}
          style={styles.carregando}
        />
      </Animatable.View>

      <StatusBar style="auto" />
    </View>
  );
}
