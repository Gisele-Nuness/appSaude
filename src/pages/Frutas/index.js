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

export default function Frutas() {
  const navigation = useNavigation();
  const [textoPesquisa, setTextoPesquisa] = useState("");
  const [modal, setModal] = useState(false);

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
          <Pressable onPress={() => setModal(true)}>
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
        visible={modal}
        animationType="fade"
        transparent={true}
        onRequestClose={() => setModal(false)}
      >
        <View style={styles.modal}>
          <View style={styles.modalContainer}>
            <Image
              source={require("../../../assets/frutas.png")}
              style={styles.frutaModal}
            />
            <Text style={styles.modalTitulo}>Nome fruta</Text>
            <Text style={styles.modalText}>Calorias fruta</Text>
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
