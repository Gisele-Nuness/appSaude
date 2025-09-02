import { Text, View, Image, Pressable, Button } from "react-native";
import styles from "./style";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { TextInput } from "react-native-web";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Modal } from "react-native";

export default function Login() {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [modal, setModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const recuperarDados = async () => {
    try {
      const usuarioSalvo = await AsyncStorage.getItem("usuarioCompleto");
      const dados = usuarioSalvo ? JSON.parse(usuarioSalvo) : null;

      if (dados && dados.email === email && dados.senha === senha) {
        await AsyncStorage.setItem(
          "recuperarDados",
          JSON.stringify({ email, senha })
        );

        setModalMessage("Login realizado com sucesso!");
        setModal(true);
        navigation.navigate("Home");
      } else {
        setModalMessage("Credenciais inválidas");
        setModal(true);
      }
    } catch (e) {
      setModalMessage("Erro ao realizar login");
      setModal(true);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../../../assets/logo.png")}
          style={styles.logo}
        />
      </View>

      <View style={styles.containerTitulo}>
        <Text style={styles.titulo}>Login</Text>
        <Image
          source={require("../../../assets/perfil.png")}
          style={styles.imgPerfil}
        />
      </View>

      <View style={styles.containerInput}>
        <TextInput
          style={styles.input}
          placeholder="email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          value={senha}
          onChangeText={(text) => setSenha(text)}
        />

        <View style={styles.containerBtn}>
          <Pressable style={styles.btn} onPress={recuperarDados}>
            <Text style={styles.txtBtn}>Entrar</Text>
          </Pressable>
        </View>

        <View style={styles.containerCadastro}>
          <Pressable
            style={styles.btnCadastro}
            onPress={() => navigation.navigate("Cadastro")}
          >
            <Text style={styles.txtBtnCadastro}>
              Não tem cadastro? Clique aqui
            </Text>
          </Pressable>
        </View>
      </View>

      <Modal
        visible={modal}
        animationType="fade"
        transparent={true}
        onRequestClose={() => setModal(false)}
      >
        <View style={styles.modal}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalText}>{modalMessage}</Text>
            <Button
              title="Fechar"
              color="#b82132"
              onPress={() => setModal(false)}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}
