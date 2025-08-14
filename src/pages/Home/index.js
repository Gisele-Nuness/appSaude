import { useState } from "react";
import { Image, Pressable, Text, View, Modal } from "react-native";
import styles from "./style";
import { useNavigation } from "@react-navigation/native";
import { FlatList } from "react-native-web";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Home() {
  const navigation = useNavigation();

  const cards = [
    { id: 1, nome: "Sangue", imagem: require("../../../assets/favicon.png") },
    { id: 2, nome: "Agua", imagem: require("../../../assets/favicon.png") },
    { id: 3, nome: "Medicamentos", imagem: require("../../../assets/favicon.png")},
    { id: 4, nome: "Alergia", imagem: require("../../../assets/favicon.png") },
    { id: 5, nome: "Vacinas", imagem: require("../../../assets/favicon.png") },
    { id: 6, nome: "Fruta", imagem: require("../../../assets/favicon.png") },
    { id: 7, nome: "Dica", imagem: require("../../../assets/favicon.png") },
    { id: 8, nome: "Meditação", imagem: require("../../../assets/favicon.png")},
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
      <View style={styles.header}>
        <Image
          source={require("../../../assets/favicon.png")}
          style={styles.logo}
        />

        <Image
          source={require("../../../assets/favicon.png")}
          style={styles.logo}
        />
      </View>

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
          numColumns={2}
        />
      </View>

      <Pressable style={styles.sairButton} onPress={sair}>
        <Text style={styles.sairButtonText}>Sair</Text>
      </Pressable>
    </View>
  );
}
