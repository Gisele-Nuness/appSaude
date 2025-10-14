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
import ModalPadrao from "../../Components/Modal/index.js";

export default function Login() {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [modal, setModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");



  const entrar = async () => {
    if (!email || !senha) {
      setModal(true);
      setModalMessage("Informe email e senha.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setModal(true);
      setModalMessage("Digite um email válido.");
      return;
    }

    if (senha.length < 6) {
      setModal(true);
      setModalMessage("A senha deve ter pelo menos 6 caracteres.");
      return;
    }

    try {
      const resp = await api.post("/login", { email, senha });

      if (resp?.data?.ok && resp?.data?.user) {
        const user = resp.data.user;

        await AsyncStorage.setItem("@userId", String(user.id));

        setModal(true);
        setModalMessage("Login realizado com sucesso!");
        navigation.navigate("Home");
      } else {
        setModal(true);
        setModalMessage("Credenciais inválidas.");
      }
    } catch (e) {
      setModal(true);
      setModalMessage("Erro ao realizar login.");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("../../../assets/logo.png")} style={styles.logo} />
      </View>

      <View style={styles.containerTitulo}>
        <Text style={styles.titulo}>Login</Text>
        <Image source={require("../../../assets/perfil-login.png")} style={styles.imgPerfil} />
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

      <ModalPadrao
        visible={modal}
        onClose={() => setModal(false)}
        modalMessage={modalMessage}
      />
    </View>
  );
}
