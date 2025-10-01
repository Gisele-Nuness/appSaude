import Header from "../../Components/Header";
import { Image, Pressable, View, Text, Modal, Button } from "react-native";
import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import styles from "./style";
import * as Location from "expo-location";
import MapView, { Marker } from "react-native-maps";

export default function Mapa() {
  const navigation = useNavigation();

  const [location, setLocation] = useState(null);
  const [msg, setMsg] = useState("");
  const [modal, setModal] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setModal(true);
        setMsg("Permissão para acessar a localização foi negada");
        return;
      }

      const currentLocation = await Location.getCurrentPositionAsync({});
      setLocation(currentLocation);
    })();
  }, []);

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

        {location ? (
          <MapView
            style={styles.map}
            region={{
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
          </MapView>
        ) : (
          <Text style={styles.loadingText}>Carregando localização...</Text>
        )}
      </View>

      <Modal
        visible={modal}
        animationType="fade"
        transparent={true}
        onRequestClose={() => setModal(false)}
      >
        <View style={styles.modal}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalText}>{msg}</Text>
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
