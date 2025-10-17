import Header from "../../Components/Header";
import {
  Image,
  Pressable,
  View,
  Text,
  Modal,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import styles from "./style";
import * as Location from "expo-location";
import MapView, { Marker } from "react-native-maps";
import ModalPadrao from "../../Components/Modal/index.js";

export default function Mapa() {
  const navigation = useNavigation();

  const [location, setLocation] = useState(null);
  const [message, setMessage] = useState("");
  const [modal, setModal] = useState(false);
  const [selectedPoint, setSelectedPoint] = useState(null);

  const [points, setPoints] = useState([
    {
      id: 1,
      latitude: -23.552435919673602,
      longitude: -46.405135438723526,
      nome: "Hospital Geral Guaianazes",
      descrição: "Hospital público com atendimento de urgência e emergência.",
      marcador: require("../../../assets/hospital.png"),
      imagem: require("../../../assets/hospital-geral.jpg"),
      horaAbertura: "Aberto 24 horas",
      horaFechamento: "Aberto 24 horas",
    },
    {
      id: 2,
      latitude: -23.553507937674947,
      longitude: -46.39864449316201,
      nome: "UBS e NIR Jardim Soares",
      descrição: "Unidade Básica de Saúde que oferece consultas e vacinação.",
      marcador: require("../../../assets/hospital.png"),
      imagem: require("../../../assets/postinho.png"),
      horaAbertura: "09:00",
      horaFechamento: "19:00",
    },
    {
      id: 3,
      latitude: -23.552762197797122,
      longitude: -46.39967167694926,
      nome: "Etec de Guaianazes",
      descrição: "Escola técnica estadual de Guaianazes.",
      marcador: require("../../../assets/educacao.png"),
      imagem: require("../../../assets/etec.jpg"),
      horaAbertura: "07:00",
      horaFechamento: "23:00",
    },

    {
      id: 4,
      latitude: -23.554270960674085,
      longitude: -46.4008965224863,
      nome: "Paróquia Nossa Senhora da Glória",
      descrição: "Igreja Católica.",
      marcador: require("../../../assets/igreja.png"),
      imagem: require("../../../assets/igreja-catolica.png"),
      horaAbertura: "09:00",
      horaFechamento: "18:00",
    },

    {
      id: 5,
      latitude: -23.552562377886066,
      longitude: -46.39955342452208,
      nome: "Padaria Bom Sabor",
      descrição: "Padaria",
      marcador: require("../../../assets/padaria.png"),
      imagem: require("../../../assets/padaria.jpg"),
      horaAbertura: "06:00",
      horaFechamento: "23:00",
    },

    {
      id: 6,
      latitude: -23.55372536838606,
      longitude: -46.401369279994015,
      nome: "Steve Pizza",
      descrição: "Pizzaria",
      marcador: require("../../../assets/pizzaria.png"),
      imagem: require("../../../assets/pizzaria.jpg"),
      horaAbertura: "18:00",
      horaFechamento: "00:00",
    },

    {
      id: 7,
      latitude: -23.553995495886078,
      longitude: -46.40282276441781,
      nome: "Espaço Focco Fit",
      descrição: "Academia",
      marcador: require("../../../assets/academia.png"),
      imagem: require("../../../assets/academia.jpg"),
      horaAbertura: "06:30",
      horaFechamento: "22:00",
    },

    {
      id: 8,
      latitude: -23.55603689390518,
      longitude: -46.40073772092207,
      nome: "Dia Supermercado",
      descrição: "Supermercado da rede Dia",
      marcador: require("../../../assets/carrinho.png"),
      imagem: require("../../../assets/mercado.jpg"),
      horaAbertura: "07:00",
      horaFechamento: "21:00",
    },

    {
      id: 9,
      latitude: -23.556548575941765,
      longitude: -46.40011094448442,
      nome: "Perfumaria Gold",
      descrição: "Loja de cosméticos",
      marcador: require("../../../assets/make.png"),
      imagem: require("../../../assets/perfumaria.jpg"),
      horaAbertura: "09:00",
      horaFechamento: "18:30",
    },

    {
      id: 10,
      latitude: -23.553367271386687, 
      longitude: -46.40486831448867,
      nome: "Drogaria Tieza",
      descrição: "Farmácia",
      marcador: require("../../../assets/saude.png"),
      imagem: require("../../../assets/farmacia.jpg"),
      horaAbertura: "08:00",
      horaFechamento: "23:00",
    },
  ]);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setModal(true);
        setMessage("Permissão para acessar a localização foi negada");
        return;
      }

      const currentLocation = await Location.getCurrentPositionAsync({});
      setLocation(currentLocation);
    })();
  }, []);

  return (
    <View style={styles.container}>
      <Header />

      {location ? (
        <>
          <MapView
            style={styles.mapa}
            initialRegion={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
              latitudeDelta: 0.01,
              longitudeDelta: 0.01,
            }}
          >
            <Marker
              coordinate={{
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
              }}
              title="Sua Localização"
              description="Aqui está sua localização atual"
            />

            {points.map((point) => (
              <Marker
                key={point.id}
                coordinate={{
                  latitude: point.latitude,
                  longitude: point.longitude,
                }}
                title={point.nome}
                description={point.descrição}
                onPress={() => setSelectedPoint(point)}
              >
                <Image
                  source={point.marcador}
                  style={{ width: 35, height: 35 }}
                  resizeMode="contain"
                />
              </Marker>
            ))}
          </MapView>

          <Pressable
            onPress={() => navigation.navigate("Home")}
            style={styles.btnVoltar}
          >
            <Image
              source={require("../../../assets/voltar.png")}
              style={styles.voltar}
            />
          </Pressable>
        </>
      ) : (
        <Text style={styles.loadingText}>Carregando localização...</Text>
      )}

      <ModalPadrao
        visible={modal}
        onClose={() => setModal(false)}
        modalMessage={message}
      />

      <Modal
        animationType="slide"
        transparent={true}
        visible={!!selectedPoint}
        onRequestClose={() => setSelectedPoint(null)}
      >
        <View style={styles.overlay}>
          <View style={styles.modalContainer}>
            <Image
              source={selectedPoint?.imagem}
              style={styles.modalImagem}
              resizeMode="cover"
            />
            <Text style={styles.modalNome}>{selectedPoint?.nome}</Text>
            <Text style={styles.modalDescricao}>
              {selectedPoint?.descrição}
            </Text>

            <View style={styles.modalInfoBox}>
              <Text style={styles.modalHorario}>
                🕒 Abre: {selectedPoint?.horaAbertura}
              </Text>
              <Text style={styles.modalHorario}>
                🕕 Fecha: {selectedPoint?.horaFechamento}
              </Text>
            </View>

            <Pressable
              style={styles.btnFechar}
              onPress={() => setSelectedPoint(null)}
            >
              <Text style={styles.btnFecharTexto}>Fechar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}
