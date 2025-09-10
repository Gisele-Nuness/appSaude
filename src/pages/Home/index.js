import { useState } from "react";
import { Image, Pressable, Text, View, Modal } from "react-native";
import styles from "./style";
import { useNavigation } from "@react-navigation/native";
import { FlatList } from "react-native-web";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Header from "../Header";

export default function Home() {
  const navigation = useNavigation();

  const cards = [
    { id: 1, nome: "Sangue", imagem: require("../../../assets/sangue.png") },
    { id: 2, nome: "Agua", imagem: require("../../../assets/agua.png") },
    {
      id: 3,
      nome: "Remedios",
      imagem: require("../../../assets/remedio.png"),
    },
    { id: 4, nome: "Alergias", imagem: require("../../../assets/alergias.png") },
    { id: 5, nome: "Glicemia", imagem: require("../../../assets/diabete.png") },
    { id: 6, nome: "Pressão", imagem: require("../../../assets/pressao.png") },
    { id: 7, nome: "Imc", imagem: require("../../../assets/imc.png") },
    {id: 8, nome: "Vacinas", imagem: require("../../../assets/vacina.png") },
    {id: 9, nome: "Meditação", imagem: require("../../../assets/medicamento.png") },
    {id: 10, nome: "Frutas", imagem: require("../../../assets/fruta.png") },
    {id: 11, nome: "Dica", imagem: require("../../../assets/dica.png") },
    {id: 12, nome: "Emergencia", imagem: require("../../../assets/emergencia.png") },
  ];

  const sair = async () => {
    try {
      await AsyncStorage.clear();
      console.log("Dados limpos com sucesso!");
      navigation.navigate("Splash");
    } catch (error) {
      console.error("Erro ao limpar os dados:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.cardsContainer}>
        <FlatList
          data={cards}
          renderItem={({ item }) => (
            <Pressable
              style={styles.card}
              onPress={() => navigation.navigate(item.nome)}
            >
              <Text style={styles.nome}>{item.nome}</Text>
              <Image source={item.imagem} style={styles.imagem} />
            </Pressable>
          )}
          keyExtractor={(item) => item.id.toString()}
          numColumns={3}
        />
      </View>

      <Pressable style={styles.sairButton} onPress={sair}>
        <Text style={styles.sairButtonText}>Sair</Text>
      </Pressable>
    </View>
  );
}
