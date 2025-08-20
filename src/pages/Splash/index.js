import { Text, View, Image, Pressable } from "react-native";
import styles from "./style";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Splash() {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(async () => {
      try {
        const usuarioSalvo = await AsyncStorage.getItem("dadosUsuario");
        if (usuarioSalvo) {
          navigation.navigate("Home");
        } else {
          navigation.navigate("Cadastro");
        }
      } catch (error) {
        console.error("Erro ao recuperar dados:", error);
        navigation.navigate("Cadastro");
      }
    }, 5000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Image
          source={require("../../../assets/logo.png")}
          style={styles.logo}
        />
      </View>
    </View>
  );
}
