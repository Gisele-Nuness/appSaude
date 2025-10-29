import Header from "../../Components/Header";
import { Image, Pressable, Text, View, ImageBackground } from "react-native";
import ModalPadrao from "../../Components/Modal";
import styles from "./style";
import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation();
  const [message, setMessage] = useState("");
  const [modal, setModal] = useState(false);

  async function gerarDica() {
    try {
      const resAdvice = await fetch("https://api.adviceslip.com/advice");
      const dataAdvice = await resAdvice.json();
      const advice = dataAdvice.slip.advice;

      const resTrad = await fetch(
        `https://api.mymemory.translated.net/get?q=${encodeURIComponent(
          advice
        )}&langpair=en|pt`
      );
      const dataTrad = await resTrad.json();
      const traducao = dataTrad.responseData.translatedText;

      setMessage(advice);
      setModal(true);
    } catch (error) {
      console.error("Erro ao gerar dica:", error);
      setMessage("Não foi possível gerar uma dica agora.");
      setModal(true);
    }
  }

  return (
    <View style={styles.container}>
      <Header />
      <ImageBackground
        source={require("../../../assets/background-dicas.jpg")}
        
        style={styles.main}
        resizeMode="cover"
      >
        <Pressable
          onPress={() => navigation.navigate("Home")}
          style={styles.btnVoltar}
        >
          <Image
            source={require("../../../assets/voltar.png")}
            style={styles.voltar}
          />
        </Pressable>
        <Pressable style={styles.btnDica} onPress={gerarDica}>
          <Text style={styles.txtBtn}>Gerar dica</Text>
        </Pressable>
      </ImageBackground>
      <ModalPadrao
        visible={modal}
        onClose={() => setModal(false)}
        modalMessage={message}
      />
    </View>
  );
}
