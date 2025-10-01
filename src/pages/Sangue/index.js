import Header from "../../Components/Header";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { useState, useCallback } from "react";
import { Image, Pressable, View, Text } from "react-native";
import styles from "./style";
import { buscarPerfil } from "../../Controllers/Usuario";

export default function Sangue() {
  const navigation = useNavigation();
  const [sangue, setSangue] = useState("");
  const [modalMsg, setModalMsg] = useState({ visivel: false, texto: "" });

    useFocusEffect(
      useCallback(() => {
        async function carregar() {
          try {
            const dados = await buscarPerfil();
            setSangue(dados.tipoSangue);
          } catch (e) {
            setModalMsg({ visivel: true, texto: e.message });
          }
        }
      }
      carregar();
    }, [])
  );

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

        <View style={styles.containerBg}>
          <Text style={styles.titulo}>Sangue</Text>
          <Image
            source={require("../../../assets/bolsaSangue.png")}
            style={styles.sangueIcon}
          />
        </View>

        <View style={styles.containerText}>
          <Text style={styles.text}>O seu tipo de sangue é:</Text>

        <Text style={styles.textSangue}>
          {sangue}
        </Text>
          

        </View>
      </View>
    </View>
  );
}
