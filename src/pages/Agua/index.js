import Header from "../../Components/Header";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { useState, useCallback } from "react";
import { Image, Pressable, View, Text, ScrollView, TextInput } from "react-native";
import styles from "./style";
import ModalPadrao from "../../Components/Modal/index.js";

export default function Agua() {
  const navigation = useNavigation();
  const [objetivo, setObjetivo] = useState(2000);
  const [objetivoInput, setObjetivoInput] = useState("2000");
  const [editandoObjetivo, setEditandoObjetivo] = useState(false);
  const [consumido, setConsumo] = useState(0);
  const [historico, setHistorico] = useState([]);
  const [modal, setModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const getNivelGarrafa = () => {
    const porcentagem = (consumido / objetivo) * 100;
    if (porcentagem >= 100) return '#4CAF50';
    if (porcentagem >= 75) return '#8BC34A';
    if (porcentagem >= 50) return '#FFEB3B';
    if (porcentagem >= 25) return '#FFA726';
    return '#F44336';
  };

  const adicionarConsumo = (quantidade) => {
    const novoConsumo = consumido + quantidade;
    setConsumo(novoConsumo);
    
    const agora = new Date();
    const registro = {
      id: Date.now(),
      quantidade: quantidade,
      hora: agora.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
      data: agora.toLocaleDateString('pt-BR')
    };
    
    setHistorico([registro, ...historico]);

    if (novoConsumo >= objetivo) {
      setModalMessage("Parabéns! Você atingiu seu objetivo diário! 🎉");
      setModal(true);
    }
  };

  const zerarContagem = () => {
    setConsumo(0);
    setHistorico([]);
    setModalMessage("Contagem zerada com sucesso!");
    setModal(true);
  };

  const falta = Math.max(0, objetivo - consumido);

  return (
    <View style={styles.container}>
      <Header />
      
      <Pressable
        onPress={() => navigation.navigate("Home")}
        style={styles.btnVoltar}
      >
        <Image
          source={require("../../../assets/voltar.png")}
          style={styles.voltar}
        />
      </Pressable>

      <View style={styles.main}>
        <Text style={styles.titulo}>ÁGUA</Text>

        <View style={styles.controleDiarioContainer}>
          <Text style={styles.subtitulo}>CONTROLE DIÁRIO</Text>
          
          <View style={styles.visualizacaoContainer}>
            <View style={styles.barrasColoridas}>
              <View style={[styles.barra, { backgroundColor: '#4CAF50' }]} />
              <View style={[styles.barra, { backgroundColor: '#8BC34A' }]} />
              <View style={[styles.barra, { backgroundColor: '#FFEB3B' }]} />
              <View style={[styles.barra, { backgroundColor: '#FFA726' }]} />
              <View style={[styles.barra, { backgroundColor: '#F44336' }]} />
            </View>

            <View style={styles.garrafaContainer}>
              <View style={styles.gargalo} />
              <View style={[styles.corpo, { backgroundColor: getNivelGarrafa() }]}>
                <View style={[styles.nivel, { height: `${Math.min(100, (consumido / objetivo) * 100)}%` }]} />
                <Text style={styles.garrafaTexto}>{consumido}ml</Text>
              </View>
            </View>
          </View>

          <View style={styles.infoContainer}>
            <Text style={styles.infoText}>OBJETIVO: {objetivo}ml</Text>
            <Text style={styles.infoText}>FALTA: {falta}ml</Text>
          </View>

          <View style={styles.botoesContainer}>
            <Text style={styles.adicionarLabel}>Adicionar a contagem:</Text>
            <View style={styles.botoesRow}>
              <Pressable 
                style={styles.btnAdicionar}
                onPress={() => adicionarConsumo(350)}
              >
                <Text style={styles.btnAdicionarText}>Copo{'\n'}(350 ml)</Text>
              </Pressable>
              
              <Pressable 
                style={styles.btnAdicionar}
                onPress={() => adicionarConsumo(500)}
              >
                <Text style={styles.btnAdicionarText}>Copo{'\n'}(500 ml)</Text>
              </Pressable>
              
              <Pressable 
                style={styles.btnAdicionar}
                onPress={() => adicionarConsumo(1000)}
              >
                <Text style={styles.btnAdicionarText}>Garrafa{'\n'}(1 litro)</Text>
              </Pressable>
            </View>

            <Pressable 
              style={styles.btnZerar}
              onPress={zerarContagem}
            >
              <Text style={styles.btnZerarText}>Zerar contagem</Text>
            </Pressable>
          </View>
        </View>

        <ScrollView style={styles.historicoContainer}>
          <Text style={styles.historicoTitle}>Histórico de Hoje</Text>
          {historico.length === 0 ? (
            <Text style={styles.historicoEmpty}>Nenhum registro hoje</Text>
          ) : (
            historico.map((item) => (
              <View key={item.id} style={styles.historicoItem}>
                <Text style={styles.historicoText}>
                  {item.hora} - {item.quantidade}ml adicionados
                </Text>
              </View>
            ))
          )}
        </ScrollView>
      </View>

      <ModalPadrao
        visible={modal}
        modalMessage={modalMessage} 
        onClose={() => setModal(false)}
      />
    </View>
  );
}