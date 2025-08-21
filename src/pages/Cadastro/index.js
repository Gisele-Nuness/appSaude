import { Text, View, Pressable, TextInput, Image, Button } from "react-native";
import styles from "./style";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Modal } from "react-native";
import { Picker } from "@react-native-picker/picker";

export default function Cadastro() {
  const navigation = useNavigation();

  const [nome, setNome] = useState("");
  const [dataNasc, setDataNasc] = useState("");
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [tipoSangue, setTipoSangue] = useState("");
  const [modal, setModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const maskDateBR = (value) => {
    const v = value.replace(/\D/g, "").slice(0, 8);
    const dia = v.slice(0, 2);
    const mes = v.slice(2, 4);
    const ano = v.slice(4, 8);
    return [dia, mes, ano].filter(Boolean).join("/");
  };

  const isValidDateBR = (s) => {
    if (!/^\d{2}\/\d{2}\/\d{4}$/.test(s)) return false;
    const [dd, mm, yyyy] = s.split("/").map(Number);
    const d = new Date(yyyy, mm - 1, dd);

    if (
      d.getFullYear() !== yyyy ||
      d.getMonth() !== mm - 1 ||
      d.getDate() !== dd
    )
      return false;

    const hoje = new Date();
    if (d > hoje) return false;
    const limite = new Date(
      hoje.getFullYear() - 120,
      hoje.getMonth(),
      hoje.getDate()
    );
    if (d < limite) return false;

    return true;
  };

  const salvarDados = async () => {
    if (!nome || !dataNasc || !peso || !altura || !tipoSangue) {
      setModalMessage("Por favor, preencha todos os campos.");
      setModal(true);
      return;
    }

    if (!isValidDateBR(dataNasc)) {
      setModalMessage("Data inválida. Use o formato DD/MM/AAAA e uma data válida.");
      setModal(true);
      return;
    }

    const dadosIniciais = { nome, dataNasc, peso, altura, tipoSangue };
    navigation.navigate("Cadastro2", { dadosIniciais });
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
          onChangeText={(text) => setDataNasc(maskDateBR(text))}
        />

        <TextInput
          style={styles.input}
          placeholder="Peso"
          keyboardType="numeric"
          value={peso}
          onChangeText={(text) => setPeso(text)}
        />

        <TextInput
          style={styles.input}
          placeholder="Altura"
          keyboardType="numeric"
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
            <Button title="Fechar" color="#b82132" onPress={() => setModal(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
}
