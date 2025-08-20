import { Text, View, Pressable, TextInput, Image, Button } from "react-native";
import styles from "./style";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Modal } from "react-native-web";
import { Picker } from "@react-native-picker/picker";

export default function Cadastro() {
  const navigation = useNavigation();

  const [nome, setNome] = useState("");
  const [dataNasc, setDataNasc] = useState("");
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [tipoSangue, setTipoSangue] = useState("");
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
        <Text style={styles.titulo}>Cadastre-se</Text>
        <Image
          source={require("../../../assets/perfil.png")}
          style={styles.imgPerfil}
        />
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
          placeholder="DD/MM/AAAA"
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

        <Picker
          selectedValue={tipoSangue}
          placeholder="Tipo Sanguineo"
          style={styles.picker}
          onValueChange={(itemValue) => setTipoSangue(itemValue)}
        >
          <Picker.Item label="Selecione o tipo sanguíneo" value="" />
          <Picker.Item label="A+" value="A+" />
          <Picker.Item label="A-" value="A-" />
          <Picker.Item label="B+" value="B+" />
          <Picker.Item label="B-" value="B-" />
          <Picker.Item label="AB+" value="AB+" />
          <Picker.Item label="AB-" value="AB-" />
          <Picker.Item label="O+" value="O+" />
          <Picker.Item label="O-" value="O-" />
        </Picker>

        <Pressable onPress={salvarDados}>
          <Image
            source={require("../../../assets/plus.png")}
            style={styles.iconMais}
          />
          <Text style={styles.btnHome}>Próximo</Text>
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
