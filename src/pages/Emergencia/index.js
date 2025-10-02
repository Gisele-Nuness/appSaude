import Header from "../../Components/Header";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  Image,
  Pressable,
  ScrollView,
  Linking,
  Alert,
  Platform,
} from "react-native";
import styles from "./style";

export default function Emergencia() {
  const navigation = useNavigation();

  const contatos = [
    {
      nome: "SAMU",
      numero: "192",
      icone: require("../../../assets/samu.png"),
    },
    {
      nome: "Corpo de Bombeiros",
      numero: "193",
      icone: require("../../../assets/corpodebombeiros.png"),
    },
    {
      nome: "Polícia Militar",
      numero: "190",
      icone: require("../../../assets/policiamilitar.png"),
    },
    {
      nome: "Defesa Civil",
      numero: "199",
      icone: require("../../../assets/defesacivil.png"),
    },
    {
      nome: "Polícia Rodoviária Federal",
      numero: "191",
      icone: require("../../../assets/rodoviariafederal.png"),

    },
    {
      nome: "Polícia Rodoviária Estadual",
      numero: "198",
      icone: require("../../../assets/rodoviariaestadual.png"),
    },
  ];


  const makeCall = (numero) => {
    let phoneNumber = `tel:${numero}`;

    if (Platform.OS === 'android') {
      phoneNumber = `tel:${numero}`;
    }

    Linking.canOpenURL(phoneNumber)
      .then((supported) => {
        if (!supported) {
          Alert.alert('Erro', 'O discador de chamadas não está disponível neste dispositivo.');
        } else {
          return Linking.openURL(phoneNumber);
        }
      })
      .catch((err) => console.error('An error occurred', err));
  };


  return (
    <View style={styles.container}>

      <Header />

      <Pressable onPress={() => navigation.navigate("Home")} style={styles.btnVoltar}>
        <Image
          source={require("../../../assets/voltar.png")}
          style={styles.voltar}
        />
      </Pressable>

      <View style={styles.topo}>
        <Image
          source={require("../../../assets/telefone.png")}
          style={styles.telefoneHeaderIcon}
        />
        <Text style={styles.titulo}>EMERGÊNCIA</Text>
        <Text style={styles.subtitulo}>Toque para Ligar Imediatamente</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.listaContainer}>
          {contatos.map((contato, index) => (
            <Pressable
              key={index}
              style={styles.item}
              onPress={() => makeCall(contato.numero)}
            >

              <Image
                source={contato.icone}
                style={styles.icone}
              />

              <View style={styles.textoContainer}>
                <Text style={styles.textoNome}>{contato.nome}</Text>
                <Text style={styles.textoNumero}>{contato.numero}</Text>
              </View>

              <Image
                source={require("../../../assets/telefone.png")}
                style={styles.callIcon}
              />
            </Pressable>
          ))}
        </View>
      </ScrollView>

    </View>
  );
}