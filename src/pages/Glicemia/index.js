import Header from "../../Components/Header";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { useState, useCallback } from "react";
import { Image, Pressable, View, Text, TextInput, ScrollView } from "react-native";
import styles from "./style";
import { buscarGlicemias, cadastrarGlicemia } from "../../Controllers/Glicemia";
import ModalPadrao from "../../Components/Modal/index.js";

export default function Glicemia() {
  const navigation = useNavigation();
  const [glicemia, setGlicemia] = useState("");
  const [observacao, setObservacao] = useState("Em Jejum");
  const [historico, setHistorico] = useState([]);
  const [modal, setModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("oi tudo bem?");
  const [carregando, setCarregando] = useState(false);

  useFocusEffect(
    useCallback(() => {
      async function carregar() {
        try {
          setCarregando(true);
          const dados = await buscarGlicemias();
          
          const adaptados = dados.map((item) => ({
            id: item.id,
            glicemia: item.valor,
            observacao: item.observacao || "",
            data: item.data_glicemia,
          }));
          
          setHistorico(adaptados);
        } catch (e) {
          setModal(true);
          setModalMessage("Erro ao carregar histórico de glicemia.");
        } finally {
          setCarregando(false);
        }
      }
      
      carregar();
    }, [])
  );

  const adicionarGlicemia = async () => {
    if (!glicemia || glicemia.trim() === "") {
      setModalMessage("Por favor, digite um valor de glicemia.");
      setModal(true);
      return;
    }

    const valorNumerico = parseFloat(glicemia);
    if (isNaN(valorNumerico) || valorNumerico < 0 || valorNumerico > 999.99) {
      setModalMessage("Digite um valor válido entre 0 e 999.99");
      setModal(true);
      return;
    }

    try {
      setCarregando(true);
      
      const novoCadastro = await cadastrarGlicemia({
        valor: valorNumerico,
        observacao: observacao || null,
      });

      const novoItem = {
        id: novoCadastro.id,
        glicemia: novoCadastro.valor,
        observacao: novoCadastro.observacao || "",
        data: novoCadastro.data_glicemia,
      };

      setHistorico((historicoAnterior) => [novoItem, ...historicoAnterior]);
      
      setGlicemia("");
      setObservacao("Em Jejum");
      
      setModal(true);
      setModalMessage("Glicemia cadastrada com sucesso!");
    } catch (e) {
      console.error("Erro ao adicionar:", e);
      setModal(true);
      setModalMessage("Não foi possível cadastrar a glicemia.");
    } finally {
      setCarregando(false);
    }
  };


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
        <View style={styles.containerGlicemia}>
          <Text style={styles.titulo}>Glicemia</Text>
          <TextInput
            style={styles.inputGlicemia}
            value={glicemia}
            onChangeText={setGlicemia}
            keyboardType="numeric"
            placeholder="Digite seu valor de glicemia"
            editable={!carregando}
          />
        </View>

        <View style={styles.containerObservacao}>
          <Text style={styles.textObs}>Observação</Text>
          <TextInput
            style={styles.inputObservacao}
            value={observacao}
            onChangeText={setObservacao}
            placeholder="Ex: Em jejum"
            editable={!carregando}
          />
        </View>

        <Pressable 
          style={[styles.btnAdicionar, carregando && { opacity: 0.5 }]} 
          onPress={adicionarGlicemia}
          disabled={carregando}
        >
          <Text style={styles.btnText}>
            {carregando ? "Salvando..." : "Adicionar"}
          </Text>
        </Pressable>

        <ScrollView style={styles.historicoContainer}>
          <Text style={styles.historicoTitle}>Histórico</Text>
          {historico.length === 0 ? (
            <Text style={styles.historicoEmpty}>
              Nenhum registro encontrado
            </Text>
          ) : (
            historico.map((item) => (
              <View key={item.id} style={styles.historicoItem}>
                <View style={{ flex: 1 }}>
                  <Text style={styles.historicoText}>
                    {`Glicemia: ${item.glicemia} mg/dL`}
                  </Text>
                  <Text style={styles.historicoText}>
                    {`Observação: ${item.observacao}`}
                  </Text>
                </View>
          
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