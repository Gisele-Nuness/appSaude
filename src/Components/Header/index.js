import { Image, Pressable, View, Modal, Text } from "react-native";
import styles from "./style";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Header() {
  const [menuVisible, setMenuVisible] = useState(false);
  const navigation = useNavigation();

  const sair = async () => {
    try {
      await AsyncStorage.clear();
      console.log("Dados limpos com sucesso!");
      navigation.navigate("Splash");
    } catch (error) {
      console.error("Erro ao limpar os dados:", error);
    }
  };

  return (
    <View style={styles.header}>
      <Image source={require("../../../assets/logo.png")} style={styles.logo} />

      <Pressable onPress={() => setMenuVisible(true)}>
        <Image
          source={require("../../../assets/menu.png")}
          style={styles.menu}
        />
      </Pressable>

      <Modal visible={menuVisible} transparent={true} animationType="fade">
        <Pressable
          style={styles.menuOverlay}
          onPress={() => setMenuVisible(false)}
        >
          <Pressable style={styles.menuContainer}>
            <Pressable
              style={({ pressed }) => [
                styles.menuOptionPressable,
                pressed && styles.menuOptionPressableHover,
              ]}
              onPress={() => {
                setMenuVisible(false);
                navigation.navigate("Home");
              }}
            >
              <View style={styles.menuIcons}>
                <Image
                  source={require("../../../assets/home.png")}
                  style={styles.icons}
                />
                <Text style={styles.menuOption}>Home</Text>
              </View>
            </Pressable>

            <Pressable
              style={({ pressed }) => [
                styles.menuOptionPressable,
                pressed && styles.menuOptionPressableHover,
              ]}
              onPress={() => {
                setMenuVisible(false);
                navigation.navigate("Perfil");
              }}
            >
              <View style={styles.menuIcons}>
                <Image
                  source={require("../../../assets/perfil-edit.png")}
                  style={styles.icons}
                />
                <Text style={styles.menuOption}>Perfil</Text>
              </View>
            </Pressable>

            <Pressable
              style={({ pressed }) => [
                styles.menuOptionPressable,
                pressed && styles.menuOptionPressableHover,
              ]}
              onPress={() => {
                setMenuVisible(false);
                sair();
              }}
            >
              <View style={styles.menuIcons}>
                <Image
                  source={require("../../../assets/sair.png")}
                  style={styles.icons}
                />
                <Text style={styles.menuOptionLogout}>Sair</Text>
              </View>
            </Pressable>
          </Pressable>
        </Pressable>
      </Modal>
    </View>
  );
}
