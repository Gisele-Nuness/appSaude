import { Image, Pressable, View, Modal, Text, Button } from "react-native";
import styles from "./style";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { excluirPerfil } from "../../Controllers/Usuario";

export default function Header() {
  const [menuVisible, setMenuVisible] = useState(false);
  const navigation = useNavigation();
  const [modal, setModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalFinal, setModalFinal] = useState(false);

  const sair = async () => {
    try {
      await AsyncStorage.clear();
      console.log("Dados limpos com sucesso!");
      navigation.navigate("Splash");
    } catch (error) {
      console.error("Erro ao limpar os dados:", error);
    }
  };

  const deletarConta = async () => {
    try {
      const res = await excluirPerfil();
      setModal(false);
      setModalMessage(res.message);
      setModalFinal(true);

    } catch (err) {
      setModal(false);
      setModalMessage(err.message);
      setModalFinal(true);
    }
  };

    const onFecharModalFinal = () => {
    setModalFinal(false);
    navigation.reset({ index: 0, routes: [{ name: "Splash" }] });
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
                setModal(true);
              }}
            >
              <View style={styles.menuIcons}>
                <Image
                  source={require("../../../assets/excluir.png")}
                  style={styles.icons}
                />
                <Text style={styles.menuOptionLogout}>Excluir conta</Text>
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

      <Modal visible={modal} transparent={true} animationType="fade">
        <View style={styles.modal}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalText}>
              Tem certeza que deseja excluir sua conta?
            </Text>
            <View style={{ gap: 10, width: "100%" }}>
              <Button
                title="Excluir"
                color="#b82132"
                onPress={() => deletarConta()}
              />
              <Button
                title="Cancelar"
                color="#888"
                onPress={() => setModal(false)}
              />
            </View>
          </View>
        </View>
      </Modal>

      <Modal visible={modalFinal} transparent={true} animationType="fade">
        <View style={styles.modal}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalText}>{modalMessage}</Text>
            <View style={{ gap: 10, width: "100%" }}>
              <Button title="OK" color="#b82132" style={{width: "80px" }} onPress={onFecharModalFinal} />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
