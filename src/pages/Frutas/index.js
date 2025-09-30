import Header from "../../Components/Header";
import { useState } from "react";
import {
  Image,
  Pressable,
  TextInput,
  View,
  Modal,
  Button,
  Text,
} from "react-native";
import styles from "./style";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { fruitApi } from "../../services/api";

export default function Frutas() {
  const navigation = useNavigation();
  const [textoPesquisa, setTextoPesquisa] = useState("");
  const [modal, setModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalFruta, setModalFruta] = useState(false);
  const [fruta, setFruta] = useState("");
  const [calorias, setCalorias] = useState("");
  const [carboidratos, setCarboidratos] = useState("");
  const [proteinas, setProteinas] = useState("");
  const [gorduras, setGorduras] = useState("");

  const buscarFruta = async () => {
    const fruta = textoPesquisa.trim().toLowerCase();
    if (fruta === "") {
      setModalMessage("Por favor, insira o nome de uma fruta.");
      setModal(true);
      return;
    }

    try {
     const { data } = await fruitApi.get(`/fruit/${encodeURIComponent(fruta)}`);
      if (!data?.name) {
        setModalMessage("Fruta não encontrada.");
        setModal(true);
        return;
      }

      setFruta(data.name);
      setCalorias(data.nutritions?.calories ?? "");
      setCarboidratos(data.nutritions?.carbohydrates ?? "");
      setProteinas(data.nutritions?.protein ?? "");
      setGorduras(data.nutritions?.fat ?? "");
      setModalFruta(true);
    } catch (error) {
      setModalMessage("Erro ao buscar dados da fruta.");
      setModal(true);
    }
  };
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.main}>
        <Pressable
          onPress={() => navigation.navigate("Home")}
          style={styles.btnVoltar}
        >
          <Image
            source={require("../../../assets/voltar.png")}
            style={styles.voltar}
          />
        </Pressable>
        <View style={styles.searchWrapper}>
          <Image
            source={require("../../../assets/pesquisa.png")}
            style={styles.iconBuscar}
          />
          <TextInput
            style={styles.buscar}
            placeholder="Pesquisar fruta"
            placeholderTextColor="#2A2A2A99"
            value={textoPesquisa}
            onChangeText={setTextoPesquisa}
            returnKeyType="search"
          />
          <Pressable onPress={() => buscarFruta()}>
            <Image
              source={require("../../../assets/frutas.png")}
              style={styles.iconBuscar}
            />
          </Pressable>
        </View>

        <View style={styles.containerBg}>
          <Image
            style={styles.frutaBg}
            source={require("../../../assets/frutas-bg.png")}
          />
        </View>
      </View>

      <Modal
        visible={modalFruta}
        animationType="fade"
        transparent={true}
        onRequestClose={() => setModalFruta(false)}
      >
        <View style={styles.modal}>
          <View style={styles.modalContainer}>
            <Image
              source={require("../../../assets/frutas.png")}
              style={styles.frutaModal}
            />
            <Text style={styles.modalTitulo}>{fruta}</Text>
            <Text style={styles.modalText}>Calorias: {calorias}kc</Text>
            <Text style={styles.modalText}>Carboidratos: {carboidratos}g</Text>
            <Text style={styles.modalText}>Proteínas: {proteinas}g</Text>
            <Text style={styles.modalText}>Gorduras: {gorduras}g</Text>
            <Button
              title="Fechar"
              color="#b82132"
              onPress={() => setModalFruta(false)}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}
