import Header from "../../Components/Header";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  Pressable,
  Image,
  ScrollView,
} from "react-native";
import styles from "./style";

export default function Vacinas() {
  const navigation = useNavigation();

  const grupos = [
    {
      titulo: "Criança / Adolescente até 19",
      vacinas: [
        "BCG (ao nascer)",
        "Hepatite B",
        "Rotavírus humano (VORH)",
        "Pentavalente (DTP + Hib + Hep. B)",
        "VIP/VOP (poliomielite)",
        "Pneumocócica 10-valente",
        "Meningocócica C",
        "Febre Amarela",
        "Tríplice Viral (sarampo, caxumba, rubéola)",
        "DTP (reforço)",
        "Varicela",
        "Hepatite A",
        "HPV (a partir dos 9 anos)",
        "dTpa (adolescente grávida)",
      ],
    },
    {
      titulo: "Adulto",
      vacinas: [
        "Hepatite B (3 doses se nunca tomou)",
        "Febre Amarela (1 dose + reforço)",
        "Dupla Adulto (dT - difteria e tétano)",
        "Tríplice Viral (2 doses até 29 anos, 1 dose até 59)",
        "COVID-19 (atualizada, anual ou semestral)",
        "HPV (caso não tenha tomado até os 19)",
      ],
    },
    {
      titulo: "Idoso",
      vacinas: [
        "Influenza (anual)",
        "Hepatite B",
        "Dupla Adulto (dT)",
        "COVID-19 (reforço atualizado)",
        "Febre Amarela (se indicado)",
        "Pneumocócica 23-valente",
      ],
    },
    {
      titulo: "Gestante",
      vacinas: [
        "dTpa (preferencialmente entre 27 e 36 semanas)",
        "Hepatite B",
        "Influenza (anual)",
        "COVID-19 (reforço atualizado)",
      ],
    },
  ];
  

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.topo}>
        <Pressable
          onPress={() => navigation.goBack()}
          style={styles.btnVoltar}
        >
          <Image
            source={require("../../../assets/voltar.png")}
            style={styles.voltar}
          />
        </Pressable>

        <Text style={styles.titulo}>VACINAS</Text>
      </View>

      <View style={styles.cardsGrupo}>
         <View style={styles.cardGrupo}>
            <Image
              source={require("../../../assets/icon-bebe.png")}
              style={styles.cardImagem}
            />
            <Text style={styles.cardTexto}>Criança{"\n"}Adolescente até 19</Text>
          </View>

          <View style={styles.cardGrupo}>
            <Image
              source={require("../../../assets/icon-idoso.png")}
              style={styles.cardImagem}
            />
            <Text style={styles.cardTexto}>Adulto{"\n"}Idoso</Text>
          </View>

          <View style={styles.cardGrupo}>
            <Image
              source={require("../../../assets/icon-gestante.png")}
              style={styles.cardImagem}
            />
            <Text style={styles.cardTexto}>Gestante{"\n"}Período Gestacional</Text>
          </View>
    </View>

      <ScrollView contentContainerStyle={styles.scroll}>
        {grupos.map((grupo, index) => (
          <View key={index} style={styles.card}>
            <Text style={styles.cardTitulo}>{grupo.titulo}</Text>
            {grupo.vacinas.map((vacina, idx) => (
              <Text key={idx} style={styles.itemVacina}>• {vacina}</Text>
            ))}
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
