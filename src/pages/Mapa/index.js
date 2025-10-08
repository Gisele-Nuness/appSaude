import Header from "../../Components/Header";
import { Image, Pressable, View, Text} from "react-native";
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
        <MapView
          style={styles.mapa}
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
          <Pressable
            onPress={() => navigation.navigate("Home")}
            style={styles.btnVoltar}
          >
            <Image
              source={require("../../../assets/voltar.png")}
              style={styles.voltar}
            />
          </Pressable>
        </MapView>
      ) : (
        <Text style={styles.loadingText}>Carregando localização...</Text>
      )}

      <ModalPadrao
        visible={modal}
        onClose={() => setModal(false)}
        modalMessage={message}       
      />

    </View>
    
  );
}
