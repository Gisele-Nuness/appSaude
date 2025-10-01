import Header from "../../Components/Header";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  Image,
  Pressable,
  ScrollView
} from "react-native";
import styles from "./style";

export default function Emergencia() {
  const navigation = useNavigation();

  const contatos = [
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
      nome: "Polícia Rodoviária Federal",
      numero: "191",
      icone: require("../../../assets/rodoviariafederal.png"),
    },
    {
      nome: "Polícia Rodoviária Estadual",
      numero: "198",
      icone: require("../../../assets/rodoviariaestadual.png"),
    },
    {
      nome: "Defesa Civil",
      numero: "199",
      icone: require("../../../assets/defesacivil.png"),
    },
    {
      nome: "SAMU",
      numero: "192",
      icone: require("../../../assets/samu.png"),
    },
  ];

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
        <Text style={styles.titulo}>EMERGÊNCIA</Text>
        <Image
          source={require("../../../assets/telefone.png")}
          style={styles.telefoneIcon}
        />
      </View>

      <View style={styles.listaContainer}>
        <View>
          {contatos.map((contato, index) => (
            <View key={index} style={styles.item}>
              <Image source={contato.icone} style={styles.icone} />
              <Text style={styles.texto}>
                {contato.nome} - {contato.numero}
              </Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}
