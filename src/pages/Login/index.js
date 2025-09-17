import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  Pressable,
  Button,
  Modal,
  TextInput,
} from "react-native";
import styles from "./style";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { api } from "../../services/api";

export default function Login() {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [modal, setModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const abrirModal = (msg) => {
    setModalMessage(msg);
    setModal(true);
  };

  const fecharModal = () => {
    setModal(false);
    if (modalMessage.toLowerCase().includes("sucesso")) {
      navigation.navigate("Home");
    }
  };

  const entrar = async () => {
    if (!email || !senha) {
      abrirModal("Informe email e senha.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      abrirModal("Digite um email válido.");
      return;
    }
    if (senha.length < 6) {
      abrirModal("A senha deve ter pelo menos 6 caracteres.");
      return;
    }

    try {
      const resp = await api.post("/login", { email, senha });

      if (resp?.data?.ok && resp?.data?.user) {
        const user = resp.data.user;

        await AsyncStorage.setItem("@userId", String(user.id));

        abrirModal("Login realizado com sucesso!");
      } else {
        abrirModal(resp?.data?.message || "Credenciais inválidas.");
      }
    } catch (e) {
      const msg = e?.response?.data?.message || "Erro ao realizar login.";
      abrirModal(msg);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("../../../assets/logo.png")} style={styles.logo} />
      </View>

      <View style={styles.containerTitulo}>
        <Text style={styles.titulo}>Login</Text>
        <Image source={require("../../../assets/perfil.png")} style={styles.imgPerfil} />
      </View>

      <View style={styles.containerInput}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
          placeholderTextColor="#b82132"
          
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry
          placeholderTextColor="#b82132"
        />

        <View style={styles.containerBtn}>
          <Pressable style={styles.btn} onPress={entrar}>
            <Text style={styles.txtBtn}>Entrar</Text>
          </Pressable>
        </View>

        <View style={styles.containerCadastro}>
          <Pressable style={styles.btnCadastro} onPress={() => navigation.navigate("Cadastro")}>
            <Text style={styles.txtBtnCadastro}>Não tem cadastro? Clique aqui</Text>
          </Pressable>
        </View>
      </View>

      <Modal visible={modal} animationType="fade" transparent onRequestClose={fecharModal}>
        <View style={styles.modal}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalText}>{modalMessage}</Text>
            <Button title="Fechar" color="#b82132" onPress={fecharModal} />
          </View>
        </View>
      </Modal>
    </View>
  );
}
