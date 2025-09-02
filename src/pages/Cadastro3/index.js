import React, { useState } from "react";
import styles from "./style";
import {
  View,
  Text,
  TextInput,
  Modal,
  Alert,
  Image,
  ScrollView,
  Pressable,
  Button,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation, useRoute } from "@react-navigation/native";

export default function Cadastro3() {
  const navigation = useNavigation();
  const route = useRoute();
  const dadosAnteriores = route.params?.dadosAnteriores || {};
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const [form, setForm] = useState({
    email: "",
    senha: "",
    confirmaSenha: "",
  });

  const salvarDados = async () => {
    if (!form.email || !form.senha || !form.confirmaSenha) {
      setModalMessage("Preencha todos os dados");
      setModal(true);
      return;
    }
    if (!/\S+@\S+\.\S+/.test(form.email)) {
      setModalMessage("Erro", "Digite um email válido!");
      setModal(true);
      return;
    }
    if (form.senha.length < 6) {
      setModalMessage("A senha deve ter pelo menos 6 caracteres!");
      setModal(true);
      return;
    }
    if (form.senha !== form.confirmaSenha) {
      setModalMessage("As senhas não coincidem!");
      setModal(true);
      return;
    }

    try {
      const usuarioCompleto = {
        ...dadosAnteriores,
        email: form.email,
        senha: form.senha,
      };
      await AsyncStorage.setItem(
        "usuarioCompleto",
        JSON.stringify(usuarioCompleto)
      );
      setModalVisible(true);
      setLoading(false);
      setModalMessage("Cadastro realizado com sucesso!!!");
      navigation.navigate("Login");
    } catch (e) {
      setModalMessage("Erro", "Não foi possível salvar os dados");
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <Image
            source={require("../../../assets/logo.png")}
            style={styles.logo}
          />
        </View>

        <View style={styles.containerTitulo}>
          <Pressable
            onPress={() => navigation.goBack()}
            style={styles.btnVoltar}
          >
            <Image
              source={require("../../../assets/voltar.png")}
              style={styles.voltar}
            />
          </Pressable>
          <Text style={styles.titulo}>Cadastre-se</Text>
          <Image
            source={require("../../../assets/perfil.png")}
            style={styles.imgPerfil}
          />
        </View>

        <View style={styles.containerInput}>
          <TextInput
            style={styles.input}
            value={form.email}
            onChangeText={(txt) => setForm((prev) => ({ ...prev, email: txt }))}
            placeholder="Digite seu email"
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <TextInput
            style={styles.input}
            value={form.senha}
            onChangeText={(txt) => setForm((prev) => ({ ...prev, senha: txt }))}
            placeholder="Digite sua senha"
            secureTextEntry
          />

          <TextInput
            style={styles.input}
            value={form.confirmaSenha}
            onChangeText={(txt) =>
              setForm((prev) => ({ ...prev, confirmaSenha: txt }))
            }
            placeholder="Confirme sua senha"
            secureTextEntry
          />

          <Pressable onPress={salvarDados} style={styles.btnContainer}>
            <Image
              source={require("../../../assets/plus.png")}
              style={styles.iconMais}
            />
            <Text style={styles.btnHome}>concluir Cadastro</Text>
          </Pressable>
        </View>
      </ScrollView>

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
