import {
  Text,
  View,
  Pressable,
  TextInput,
  Image,
  Button,
  Platform,
} from "react-native";
import styles from "./style";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Modal } from "react-native";
import { Picker } from "@react-native-picker/picker";
import * as ImagePicker from "expo-image-picker";
import { ModalEscolhaFoto } from "../../Controllers/Foto";
import Data from "../../Controllers/Data";
import ModalPadrao from "../../Components/Modal/index.js";

export default function Cadastro() {
  const navigation = useNavigation();

  const [nome, setNome] = useState("");
  const [dataNasc, setDataNasc] = useState("");
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [tipoSangue, setTipoSangue] = useState("");
  const [modal, setModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [imagem, setImagem] = useState(null);
  const [abrirEscolhaFoto, setAbrirEscolhaFoto] = useState(false);
  const [sangueModalVisivel, setSangueModalVisivel] = useState(false);

  const salvarDados = async () => {
    if (!nome || !dataNasc || !peso || !altura || !tipoSangue) {
      setModalMessage("Por favor, preencha todos os campos.");
      setModal(true);
      return;
    }

    if (!Data.isValidDateBR(dataNasc)) {
      setModalMessage(
        "Data inválida. Use o formato DD/MM/AAAA e uma data válida."
      );
      setModal(true);
      return;
    }

    const alturaRegex = /^\d\.\d{2}$/;
    if (!alturaRegex.test(altura)) {
      setModalMessage(
        "Altura inválida. Use o formato 1.72 (metros com ponto)."
      );
      setModal(true);
      return;
    }

    const dadosIniciais = { nome, dataNasc, peso, altura, tipoSangue, imagem };
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
        <Pressable
          onPress={() => navigation.navigate("Login")}
          style={styles.btnVoltar}
        >
          <Image
            source={require("../../../assets/voltar.png")}
            style={styles.voltar}
          />
        </Pressable>
        <Text style={styles.titulo}>Cadastre-se</Text>
        <Pressable onPress={() => setAbrirEscolhaFoto(true)}>
          {imagem ? (
            <Image source={{ uri: imagem }} style={styles.imagem} />
          ) : (
            <Image
              source={require("../../../assets/perfil.png")}
              style={styles.imgPerfil}
            />
          )}
        </Pressable>
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
          onChangeText={(text) => setDataNasc(Data.maskDateBR(text))}
        />

        <TextInput
          style={styles.input}
          placeholder="Peso  (ex: 70.5)"
          keyboardType="numeric"
          value={peso}
          onChangeText={(text) => setPeso(text)}
        />

        <TextInput
          style={styles.input}
          placeholder="Altura (ex: 1.75)"
          value={altura}
          onChangeText={(text) => setAltura(text)}
        />

        <Pressable
          style={styles.input}
          onPress={() => setSangueModalVisivel(true)}
        >
          <Text style={styles.pickerText}>
            {tipoSangue || "Selecione o tipo sanguineo"}
          </Text>
        </Pressable>

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

      <ModalEscolhaFoto
        visivel={abrirEscolhaFoto}
        aoFechar={() => setAbrirEscolhaFoto(false)}
        setImagem={setImagem}
        setAbrirEscolhaFoto={setAbrirEscolhaFoto}
      />

      <Modal
        transparent={true}
        visible={sangueModalVisivel}
        animationType="slide"
        onRequestClose={() => setSangueModalVisivel(false)}
      >
        <Pressable
          style={styles.overlay}
          onPress={() => setSangueModalVisivel(false)}
        >
          <View style={styles.pickerContent}>
            {Platform.OS === "web" ? (
              <View>
                <Text style={styles.webPickerTitle}>
                  Selecione o tipo sanguineo
                </Text>
                {["A+", "A-", "B+", "B-", "AB+", "AB-", "0+", "O-"].map(
                  (item) => (
                    <Pressable
                      key={item}
                      style={[
                        styles.webPickerOption,
                        tipoSangue === item && styles.webPickerOptionSelected,
                      ]}
                      onPress={() => {
                        setTipoSangue(item);
                        setSangueModalVisivel(false);
                      }}
                    >
                      <Text style={styles.webPickerOptionText}>{item}</Text>
                    </Pressable>
                  )
                )}
              </View>
            ) : (
              <>
                <Picker
                  selectedValue={tipoSangue}
                  placeholder="Tipo Sanguineo"
                  style={styles.picker}
                  onValueChange={(itemValue) => setTipoSangue(itemValue)}
                >
                  <Picker.Item
                    label="Selecione o tipo sanguíneo"
                    value=""
                    color="#000000"
                  />
                  <Picker.Item label="A+" value="A+" color="#000000" />
                  <Picker.Item label="A-" value="A-" color="#000000" />
                  <Picker.Item label="B+" value="B+" color="#000000" />
                  <Picker.Item label="B-" value="B-" color="#000000" />
                  <Picker.Item label="B-" value="B-" color="#000000" />
                  <Picker.Item label="B-" value="B-" color="#000000" />
                  <Picker.Item label="AB+" value="AB+" color="#000000" />
                  <Picker.Item label="AB-" value="AB-" color="#000000" />
                  <Picker.Item label="O+" value="O+" color="#000000" />
                  <Picker.Item label="O-" value="O-" color="#000000" />
                </Picker>
              </>
            )}
          </View>
        </Pressable>
      </Modal>
    </View>
  );
}
