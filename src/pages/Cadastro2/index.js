import { Text, View, Pressable, TextInput, Image, Button } from "react-native";
import styles from "./style";
import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import { Modal } from "react-native";
import axios from "axios";
import ModalPadrao from "../../Components/Modal/index.js";

export default function Cadastro2() {
  const navigation = useNavigation();
  const route = useRoute();
  const dadosIniciais = route.params?.dadosIniciais ?? {};

  const [cep, setCep] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [numero, setNumero] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [modal, setModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const buscarEndereco = async () => {
    const cepLimpo = (cep || "").replace(/\D/g, "");
    if (cepLimpo.length !== 8) return;

    try {
      const url = `https://viacep.com.br/ws/${cepLimpo}/json/`;
      const response = await axios.get(url);
      if (response.data?.erro) {
        setModalMessage("CEP não encontrado.");
        setModal(true);
        return;
      }
      setLogradouro(response.data.logradouro || "");
      setBairro(response.data.bairro || "");
      setCidade(response.data.localidade || "");
    } catch (error) {
      setModalMessage("Erro ao buscar dados do CEP.");
      setModal(true);
    }
  };

  const salvarDados = () => {
    if (!cep || !logradouro || !numero || !bairro || !cidade) {
      setModalMessage("Por favor, preencha todos os campos.");
      setModal(true);
      return;
    }

    const dadosUsuario = {
      ...dadosIniciais,
      cep,
      logradouro,
      numero,
      bairro,
      cidade,
    };

    navigation.navigate("Cadastro3", { dadosAnteriores: dadosUsuario });
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
        <Pressable onPress={() => navigation.goBack()} style={styles.btnVoltar}>
          <Image
            source={require("../../../assets/voltar.png")}
            style={styles.voltar}
          />
        </Pressable>
        <Text style={styles.titulo}>Cadastre-se</Text>
        <Image
          source={require("../../../assets/localizacao.png")}
          style={styles.imgPerfil}
        />
      </View>

      <View style={styles.containerInput}>
        <TextInput
          style={styles.input}
          placeholder="CEP"
          value={cep}
          onChangeText={setCep}
          onBlur={buscarEndereco}
          keyboardType="numeric"
        />

        <TextInput
          style={styles.input}
          placeholder="Logradouro"
          value={logradouro}
          onChangeText={setLogradouro}
        />

        <TextInput
          style={styles.input}
          placeholder="Número"
          value={numero}
          onChangeText={setNumero}
          keyboardType="numeric"
        />

        <TextInput
          style={styles.input}
          placeholder="Bairro"
          value={bairro}
          onChangeText={setBairro}
        />

        <TextInput
          style={styles.input}
          placeholder="Cidade"
          value={cidade}
          onChangeText={setCidade}
        />

        <Pressable onPress={salvarDados}>
          <Image
            source={require("../../../assets/plus.png")}
            style={styles.iconMais}
          />
          <Text style={styles.btnHome}>Próximo</Text>
        </Pressable>
      </View>

      <ModalPadrao
        visible={modal}
        onClose={() => setModal(false)}
        modalMessage={modalMessage}
      />
    </View>
  );
}
