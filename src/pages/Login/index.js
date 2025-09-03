import { Text, View, Image, Pressable, Button } from "react-native";
import styles from "./style";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { TextInput } from "react-native-web";
import { Modal } from "react-native";
import { api } from "../../services/api";

export default function Login() {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [modal, setModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const entrar = async () => {
    if (!email || !senha) {
      setModalMessage("Informe email e senha.");
      setModal(true);
      return;
    }
    try {
      const resp = await api.post("/login", { email, senha });
      if (resp?.data?.ok) {
        setModalMessage("Login realizado com sucesso!");
        setModal(true);
        
      } else {
        setModalMessage("Credenciais inválidas.");
        setModal(true);
      }
    } catch (e) {
      const msg = e?.response?.data?.message || "Erro ao realizar login.";
      setModalMessage(msg);
      setModal(true);
    }
  };

  const fecharModal = () => {
    setModal(false);
    if (modalMessage.includes("sucesso")) {
      navigation.navigate("Home");
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
          placeholder="email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry
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
