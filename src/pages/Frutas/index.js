import Header from "../../Components/Header/index.js";
import { useState } from "react";
import {
  Image,
  Pressable,
  TextInput,
  View,
  Modal,
  Button,
  Text,
  Platform
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
      const { data } =
        Platform.OS === "web"
          ? // WEB -> usa seu proxy local: /proxy/api + "/fruit/{nome}"
            await fruitApi.get(`/fruit/${encodeURIComponent(fruta)}`)
          : // ANDROID/iOS -> chama direto a API pública (sem proxy, sem CORS)
            await axios.get(`https://www.fruityvice.com/api/fruit/${fruta}`, {
              timeout: 10000,
              headers: { Accept: "application/json" },
            });

      setFruta(data.name);
      setCalorias(data.nutritions?.calories ?? "");
      setCarboidratos(data.nutritions?.carbohydrates ?? "");
      setProteinas(data.nutritions?.protein ?? "");
      setGorduras(data.nutritions?.fat ?? "");
      setModalFruta(true);
      setTextoPesquisa("");
    } catch (error) {
      setModalMessage("Fruta não encontrada.");
      setModal(true);
    }
  };

  const imagensFrutas = {
    apple: require("../../../assets/apple.png"),
    avocado: require("../../../assets/avocado.png"),
    banana: require("../../../assets/banana.png"),
    blackberry: require("../../../assets/blackberry.png"),
    grape: require("../../../assets/grape.png"),
    guava: require("../../../assets/guava.png"),
    jackfruit: require("../../../assets/jackfruit.png"),
    kiwi: require("../../../assets/kiwi.png"),
    lemon: require("../../../assets/lemon.png"),
    mango: require("../../../assets/mango.png"),
    melon: require("../../../assets/melon.png"),
    orange: require("../../../assets/orange.png"),
    papaya: require("../../../assets/papaya.png"),
    peach: require("../../../assets/peach.png"),
    pear: require("../../../assets/pear.png"),
    pineapple: require("../../../assets/pineapple.png"),
    dragonfruit: require("../../../assets/dragonfruit.png"),
    pomegranate: require("../../../assets/pomegranate.png"),
    strawberry: require("../../../assets/strawberry.png"),
    watermelon: require("../../../assets/watermelon.png"),
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
            placeholder="Pesquisar fruta (em inglês)"
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
          <View style={styles.modalContainerFrutas}>
            <Image
              source={
                imagensFrutas[fruta.toLowerCase()] ||
                require("../../../assets/frutas.png")
              }
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
