import React, { useState, useCallback } from "react";
import { Image, Pressable, Text, View, Modal } from "react-native";
import styles from "./style";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { FlatList } from "react-native";
import Header from "../../Components/Header";
import { buscarPerfil } from "../../Controllers/Usuario";

export default function Home() {
  const navigation = useNavigation();
  const [modalMsg, setModalMsg] = useState({ visivel: false, texto: "" });
  const [nome, setNome] = useState("");
  const [imagem, setImagem] = useState(null);

  const cards = [
    { id: 1, nome: "Sangue", imagem: require("../../../assets/sangue.png") },
    { id: 2, nome: "Agua", imagem: require("../../../assets/agua.png") },
    {
      id: 3,
      nome: "Remedios",
      imagem: require("../../../assets/remedio.png"),
    },
    {
      id: 4,
      nome: "Alergias",
      imagem: require("../../../assets/alergias.png"),
    },
    { id: 5, nome: "Glicemia", imagem: require("../../../assets/diabete.png") },
    { id: 6, nome: "Pressão", imagem: require("../../../assets/pressao.png") },
    { id: 7, nome: "Imc", imagem: require("../../../assets/imc.png") },
    { id: 8, nome: "Vacinas", imagem: require("../../../assets/vacina.png") },
    {
      id: 9,
      nome: "Meditação",
      imagem: require("../../../assets/medicamento.png"),
    },
    { id: 10, nome: "Frutas", imagem: require("../../../assets/fruta.png") },
    { id: 11, nome: "Dica", imagem: require("../../../assets/dica.png") },
    {
      id: 12,
      nome: "Emergencia",
      imagem: require("../../../assets/emergencia.png"),
    },
  ];

  useFocusEffect(
    useCallback(() => {
      async function carregar() {
        try {
          const dados = await buscarPerfil();
          setNome(dados.nome);
          setImagem(dados.imagem);
        } catch (e) {
          setModalMsg({ visivel: true, texto: e.message });
        }
      }
      carregar();
    }, [])
  );

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.main}>
        {imagem ? (
          <Image source={{ uri: imagem }} style={styles.fotoPerfil} />
        ) : (
          <Image
            source={require("../../../assets/perfil.png")}
            style={styles.fotoPerfil}
          />
        )}
        <Text style={styles.nomePerfil}>Olá, {nome.charAt(0).toUpperCase() + nome.slice(1)}!</Text>
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
          numColumns={3}
        />
      </View>
    </View>
  );
}
