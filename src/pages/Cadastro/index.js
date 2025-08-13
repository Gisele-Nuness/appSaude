import { Text, View, Pressable, TextInput, Image, Button } from "react-native";
import styles from "./style";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Modal } from "react-native-web";

export default function Cadastro() {
  const navigation = useNavigation();

  const [nome, setNome] = useState("");
  const [dataNasc, setDataNasc] = useState("");
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [tipoSangue, setTipoSangue] = useState("");
  const [fatorSangue, setFatorSangue] = useState("");
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const salvarDados = async () => {
    if (!nome || !dataNasc || !peso || !altura || !tipoSangue || !fatorSangue) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    const dadosUsuario = {
      nome,
      dataNasc,
      peso,
      altura,
      tipoSangue,
      fatorSangue,
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
      <View style={styles.containerTitulo}>
        <Text style={styles.text}>Bem-Vindo(a)!</Text>
        <Text style={styles.text2}>Cadastre-se</Text>
      </View>

      <View style={styles.containerInput}>
        <TextInput
          style={styles.input}
          placeholder="Nome"
          value={nome}
          onChangeText={(text) => setNome(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="00/00/0000"
          value={dataNasc}
          onChangeText={(text) => setDataNasc(text)}
        />

        <TextInput
          style={styles.input}
          placeholder="Peso"
          value={peso}
          onChangeText={(text) => setPeso(text)}
        />

        <TextInput
          style={styles.input}
          placeholder="Altura"
          value={altura}
          onChangeText={(text) => setAltura(text)}
        />

        <TextInput
          style={styles.input}
          placeholder="Tipo Sanguineo"
          value={tipoSangue}
          onChangeText={(text) => setTipoSangue(text)}
        />

        <TextInput
          style={styles.input}
          placeholder="Fator Sanguineo"
          value={fatorSangue}
          onChangeText={(text) => setFatorSangue(text)}
        />
      </View>

      <Pressable onPress={salvarDados}>
        <Animatable.Text animation="rubberBand" style={styles.btnHome}>
          Cadastrar
        </Animatable.Text>
      </Pressable>
      <StatusBar style="auto" />

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
