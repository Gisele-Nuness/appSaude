import Header from "../../Components/Header";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { useState, useCallback } from "react";
import { Image, Pressable, View, Text } from "react-native";
import styles from "./style";
import { buscarPerfil } from "../../Controllers/Usuario";
import ModalPadrao from "../../Components/Modal/index.js";

export default function Sangue() {
  const navigation = useNavigation();
  const [sangue, setSangue] = useState("");
  const [modal, setModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  useFocusEffect(
    useCallback(() => {
      async function carregar() {
        try {
          const dados = await buscarPerfil();
          setSangue(dados.tipoSangue);
        } catch (e) {
          setModal(true);
          setModalMessage("Erro ao carregar dados do usuário.");
        }
      }
      carregar();
    }, [])
  );

  return (
    <View style={styles.container}>
      <Header />
      <Pressable
        onPress={() => navigation.navigate("Home")}
        style={styles.btnVoltar}
      >
        <Image
          source={require("../../../assets/voltar.png")}
          style={styles.voltar}
        />
      </Pressable>
      <View style={styles.main}>
        <View style={styles.containerBg}>
          <Text style={styles.titulo}>Sangue</Text>
          <Image
            source={require("../../../assets/bolsaSangue.png")}
            style={styles.sangueIcon}
          />
        </View>

        <View style={styles.containerText}>
          <Text style={styles.text}>O seu tipo de sangue é:</Text>

          <Text style={styles.textSangue}>{sangue}</Text>
        </View>
      </View>

      <ModalPadrao
        visible={modal}
        message={modalMessage}
        onClose={() => setModal(false)}
      />
    </View>
  );
}
