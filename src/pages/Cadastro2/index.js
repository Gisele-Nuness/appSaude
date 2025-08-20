import { Text, View, Pressable, TextInput, Image, Button } from "react-native";
import styles from "./style";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Modal } from "react-native-web";
import { Picker } from "@react-native-picker/picker";

export default function Cadastro() {
  const navigation = useNavigation();

  const [cep, setCep] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [numero, setNumero] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const salvarDados = async () => {
    if (!nome || !dataNasc || !peso || !altura || !tipoSangue) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    const dadosUsuario = {
      nome,
      dataNasc,
      peso,
      altura,
      tipoSangue,
    };

    try {
      await AsyncStorage.setItem("dadosUsuario", JSON.stringify(dadosUsuario));
      setLoading(false);
      setModalMessage("Cadastro realizado com sucesso!!!");
      setModal(true);
      navigation.navigate("Home");
    } catch (e) {
      setModalMessage("Erro ao salvar os dados no AsyncStorage");
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
        <Image
          source={require("../../../assets/voltar.png")}
          style={styles.voltar}
        />
        <Text style={styles.titulo}>Cadastre-se</Text>
        <Image
          source={require("../../../assets/perfil.png")}
          style={styles.imgPerfil}
        />
      </View>

      <View style={styles.containerInput}>
        <TextInput
          style={styles.input}
          placeholder="CEP"
          value={cep}
          onChangeText={(text) => setCep(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Logradouro"
          value={logradouro}
          onChangeText={(text) => setLogradouro(text)}
        />

        <TextInput
          style={styles.input}
          placeholder="Número"
          value={numero}
          onChangeText={(text) => setNumero(text)}
        />

        <TextInput
          style={styles.input}
          placeholder="Bairro"
          value={bairro}
          onChangeText={(text) => setBairro(text)}
        />

        <TextInput
          style={styles.input}
          placeholder="Cidade"
          value={cidade}
          onChangeText={(text) => setCidade(text)}
        />

        <Pressable onPress={salvarDados}>
          <Image
            source={require("../../../assets/plus.png")}
            style={styles.iconMais}
          />
          <Text style={styles.btnHome}>Cadastrar</Text>
        </Pressable>
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
            <Button title="Fechar" onPress={() => setModal(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
}
