import React, { useState } from "react";
import styles from "./style";
import {
  View,
  Text,
  TextInput,
  Modal,
  Image,
  ScrollView,
  Pressable,
  Button,
  Alert,
  Platform,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { api } from "../../services/api";

export default function Cadastro3() {
  const navigation = useNavigation();
  const route = useRoute();
  const dadosAnteriores = route.params?.dadosAnteriores || {};

  const [modal, setModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const [form, setForm] = useState({
    email: "",
    senha: "",
    confirmaSenha: "",
  });

  const normalizarDataBR = (s) => {
    if (/^\d{2}\/\d{2}\/\d{4}$/.test(s)) {
      const [dd, mm, yyyy] = s.split("/");
      return `${yyyy}-${mm}-${dd}`;
    }
    return s;
  };

  const finalizarCadastro = async () => {
    if (!form.email || !form.senha || !form.confirmaSenha) {
      setModalMessage("Preencha todos os dados.");
      setModal(true);
      return;
    }
    if (!/\S+@\S+\.\S+/.test(form.email)) {
      setModalMessage("Digite um email válido.");
      setModal(true);
      return;
    }
    if (form.senha.length < 6) {
      setModalMessage("A senha deve ter pelo menos 6 caracteres.");
      setModal(true);
      return;
    }
    if (form.senha !== form.confirmaSenha) {
      setModalMessage("As senhas não coincidem.");
      setModal(true);
      return;
    }

    const payload = new FormData();

    if (dadosAnteriores.imagem) {
      try {
        if (Platform.OS === "web") {
          const resp = await fetch(dadosAnteriores.imagem);
          const blob = await resp.blob();
          const ext = (blob.type && blob.type.split("/")[1]) || "jpg";
          const file = new File([blob], `foto.${ext}`, { type: blob.type || "image/jpeg" });
          payload.append("caminho_foto", file);
        } else {

          const uri =
            Platform.OS === "ios"
              ? dadosAnteriores.imagem.replace("file://", "")
              : dadosAnteriores.imagem;

          payload.append("caminho_foto", {
            uri,
            type: "image/jpeg",
            name: "foto.jpg",
          });
        }
      } catch (err) {
        console.warn("Falha ao preparar a imagem:", err);
      }
    }

    payload.append("nome", dadosAnteriores.nome);
    payload.append("data_nasc", normalizarDataBR(dadosAnteriores.dataNasc));
    payload.append("peso", dadosAnteriores.peso ? String(dadosAnteriores.peso) : "");
    payload.append("altura", dadosAnteriores.altura ? String(dadosAnteriores.altura) : "");
    payload.append("tipo_sangue", dadosAnteriores.tipoSangue || "");
    payload.append("cep", dadosAnteriores.cep || "");
    payload.append("logradouro", dadosAnteriores.logradouro || "");
    payload.append("numero", dadosAnteriores.numero || "");
    payload.append("bairro", dadosAnteriores.bairro || "");
    payload.append("cidade", dadosAnteriores.cidade || "");
    payload.append("email", form.email);
    payload.append("senha", form.senha);

    try {
      await api.post("/users", payload);
      setModalMessage("Cadastro realizado com sucesso!");
      setModal(true);
    } catch (e) {
      const msg =
        e?.response?.data?.message ||
        e?.response?.data?.error ||
        "Não foi possível salvar os dados.";
      setModalMessage(msg);
      setModal(true);
    }
  };

  const fecharModal = () => {
    setModal(false);
    if (modalMessage.includes("sucesso")) {
      navigation.navigate("Login");
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <Image source={require("../../../assets/logo.png")} style={styles.logo} />
        </View>

        <View style={styles.containerTitulo}>
          <Pressable onPress={() => navigation.goBack()} style={styles.btnVoltar}>
            <Image source={require("../../../assets/voltar.png")} style={styles.voltar} />
          </Pressable>
          <Text style={styles.titulo}>Cadastre-se</Text>
          <Image source={require("../../../assets/cadeado.png")} style={styles.imgPerfil} />
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
            onChangeText={(txt) => setForm((prev) => ({ ...prev, confirmaSenha: txt }))}
            placeholder="Confirme sua senha"
            secureTextEntry
          />

          <Pressable onPress={finalizarCadastro} style={styles.btnContainer}>
            <Image source={require("../../../assets/plus.png")} style={styles.iconMais} />
            <Text style={styles.btnHome}>Cadastrar</Text>
          </Pressable>
        </View>
      </ScrollView>

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
