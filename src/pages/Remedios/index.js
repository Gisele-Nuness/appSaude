import Header from "../../Components/Header";
import ModalPadrao from "../../Components/Modal";
import {
  View,
  Text,
  Pressable,
  Image,
  FlatList,
  Modal,
  TextInput,
  ScrollView,
  Platform,
} from "react-native";
import styles from "./style";
import React, { useState, useEffect } from "react";
import * as Notifications from "expo-notifications";
import AsyncStorage from "@react-native-async-storage/async-storage";
let DateTimePicker = null;

DateTimePicker = require("@react-native-community/datetimepicker").default;

import { useNotifications } from "../../Context/NotificationContext";
import { useNavigation } from "@react-navigation/native";
import { Swipeable } from "react-native-gesture-handler";
import * as Animatable from "react-native-animatable";

export default function Remedios() {
  const navigation = useNavigation();
  const [modalLembrete, setModalLembrete] = useState(false);
  const [horarios, setHorarios] = useState([]);
  const [novoHorario, setNovoHorario] = useState(new Date());
  const [dias, setDias] = useState("1");
  const [remedioSelecionado, setRemedioSelecionado] = useState(null);
  const [modal, setModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [listaRemedios, setListaRemedios] = useState([]);
  const [modalNovoRemedio, setModalNovoRemedio] = useState(false);
  const [novoRemedio, setNovoRemedio] = useState({
    nome: "",
    dosagem: "",
    frequencia: "",
    periodo: "",
  });

  const { notificacoes, adicionarNotificacao } = useNotifications();

  useEffect(() => {
    carregarRemediosStorage();
  }, []);

  useEffect(() => {
    Notifications.requestPermissionsAsync();
    Notifications.setNotificationHandler({
      handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: false,
      }),
    });
  }, []);

  const salvarRemediosStorage = async (dados) => {
    try {
      await AsyncStorage.setItem("@meus_remedios", JSON.stringify(dados));
    } catch (error) {
      console.log("Erro ao salvar:", error);
    }
  };

  const carregarRemediosStorage = async () => {
    try {
      const json = await AsyncStorage.getItem("@meus_remedios");
      if (json) {
        setListaRemedios(JSON.parse(json));
      }
    } catch (error) {
      console.log("Erro ao carregar:", error);
    }
  };

  const removerRemedioStorage = async (id) => {
    try {
      const atualizados = listaRemedios.filter((r) => r.id !== id);
      setListaRemedios(atualizados);
      await salvarRemediosStorage(atualizados);
    } catch (error) {
      console.log("Erro ao remover:", error);
    }
  };

  const abrirModalLembrete = (remedio) => {
    setRemedioSelecionado(remedio);
    setHorarios([]);
    setDias("1");
    setModalLembrete(true);
  };

  const adicionarHorario = () => {
    setHorarios([...horarios, novoHorario]);
  };

  const salvarLembrete = async () => {
    if (!remedioSelecionado || horarios.length === 0) return;

    const totalDias = parseInt(dias);

    for (let i = 0; i < totalDias; i++) {
      horarios.forEach(async (hora) => {
        const horarioNotificacao = new Date();
        horarioNotificacao.setDate(horarioNotificacao.getDate() + i);
        horarioNotificacao.setHours(hora.getHours());
        horarioNotificacao.setMinutes(hora.getMinutes());
        horarioNotificacao.setSeconds(0);

        const horaFormatada = hora.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });

        adicionarNotificacao({
          nome: remedioSelecionado.nome,
          horario: horaFormatada,
        });

        await Notifications.scheduleNotificationAsync({
          content: {
            title: "💊 Hora do remédio!",
            body: `${remedioSelecionado.nome} às ${horaFormatada}`,
          },
          trigger: horarioNotificacao,
        });
      });
    }

    setModalLembrete(false);
    setModal(true);
    setModalMessage("Lembretes configurados com sucesso!");
  };

  const adicionarNovoRemedio = async () => {
    if (
      !novoRemedio.nome ||
      !novoRemedio.dosagem ||
      !novoRemedio.frequencia ||
      !novoRemedio.periodo
    ) {
      setModalMessage("Preencha todos os campos!");
      setModal(true);
      return;
    }

    const novo = {
      id: Date.now().toString(),
      ...novoRemedio,
    };

    const atualizados = [...listaRemedios, novo];
    setListaRemedios(atualizados);
    await salvarRemediosStorage(atualizados);

    setNovoRemedio({ nome: "", dosagem: "", frequencia: "", periodo: "" });
    setModalNovoRemedio(false);
    setModalMessage("Remédio adicionado com sucesso!");
    setModal(true);
  };

  const excluirRemedio = (id) => {
    removerRemedioStorage(id);
    setModalMessage("Remédio excluído com sucesso!");
    setModal(true);
  };

  const CardRemedio = ({ remedio }) => {
    const renderRightActions = () => (
      <View style={styles.excluirContainer}>
        <Pressable
          style={styles.botaoExcluir}
          onPress={() => excluirRemedio(remedio.id)}
        >
          <Image
            source={require("../../../assets/lixeira.png")}
            style={styles.iconExcluir}
          />
          <Text style={styles.txtExcluir}>Excluir</Text>
        </Pressable>
      </View>
    );

    return (
      <Swipeable renderRightActions={renderRightActions}>
        <Animatable.View
          animation="fadeInUp"
          duration={600}
          easing="ease-out"
          style={styles.historico}
        >
          <View style={styles.containerRemedios}>
            <View style={styles.textos}>
              <Text style={styles.titleLegend}>{remedio.nome}</Text>
              <Text style={styles.legendText}>Dosagem: {remedio.dosagem}</Text>
              <Text style={styles.legendText}>
                Frequência: {remedio.frequencia}
              </Text>
              <Text style={styles.legendText}>Período: {remedio.periodo}</Text>
            </View>
            <Pressable onPress={() => abrirModalLembrete(remedio)}>
              <Image
                source={require("../../../assets/alarme.png")}
                style={styles.iconAlarme}
              />
            </Pressable>
          </View>
        </Animatable.View>
      </Swipeable>
    );
  };

  return (
    <View style={styles.container}>
      <Header notificacoes={notificacoes} />
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

        <View style={styles.containerTitulo}>
          <Text style={styles.titulo}>Meus Medicamentos</Text>
          <Image
            source={require("../../../assets/medicamento.png")}
            style={styles.iconRemedio}
          />
        </View>

        {listaRemedios.length === 0 ? (
         
          <View style={styles.emptyContainer}>
            <Image
              source={require("../../../assets/box-remedios.jpg")}
              style={styles.emptyImage}
              resizeMode="contain"
            />
            <Text style={styles.emptyText}>
              Você ainda não tem remédios cadastrados
            </Text>
          </View>
        ) : (
          
          <FlatList
            style={{ top: 20 }}
            data={listaRemedios}
            keyExtractor={(remedio) => remedio.id}
            renderItem={({ item }) => <CardRemedio remedio={item} />}
            ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 100 }}
          />
        )}
      </View>

      <Pressable
        style={styles.botaoNovo}
        onPress={() => setModalNovoRemedio(true)}
      >
        <Text style={styles.txtNovo}>+ Novo Remédio</Text>
      </Pressable>

      <Modal visible={modalNovoRemedio} transparent animationType="slide">
        <View style={styles.containerModal}>
          <View style={styles.modalCard}>
            <Text style={styles.modalTitle}>Cadastrar novo remédio</Text>

            <TextInput
              placeholder="Nome do remédio"
              placeholderTextColor={"#00000098"}
              style={styles.inputModal}
              value={novoRemedio.nome}
              onChangeText={(t) => setNovoRemedio({ ...novoRemedio, nome: t })}
            />
            <TextInput
              placeholder="Dosagem (gramas/ml)"
              placeholderTextColor={"#00000098"}
              style={styles.inputModal}
              value={novoRemedio.dosagem}
              onChangeText={(t) =>
                setNovoRemedio({ ...novoRemedio, dosagem: t })
              }
            />
            <TextInput
              placeholder="Frequência (vezes ao dia)"
              placeholderTextColor={"#00000098"}
              style={styles.inputModal}
              value={novoRemedio.frequencia}
              onChangeText={(t) =>
                setNovoRemedio({ ...novoRemedio, frequencia: t })
              }
            />
            <TextInput
              placeholder="Período (dias)"
              placeholderTextColor={"#00000098"}
              style={styles.inputModal}
              value={novoRemedio.periodo}
              onChangeText={(t) =>
                setNovoRemedio({ ...novoRemedio, periodo: t })
              }
            />

            <View style={styles.containerBotoes}>
              <Pressable
                style={styles.botaoSalvarModal}
                onPress={adicionarNovoRemedio}
              >
                <Text style={styles.txtbotao}>Salvar</Text>
              </Pressable>
              <Pressable
                style={styles.botaoCancelarModal}
                onPress={() => setModalNovoRemedio(false)}
              >
                <Text style={styles.txtbotao}>Cancelar</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>

      <ModalPadrao
        visible={modal}
        onClose={() => setModal(false)}
        modalMessage={modalMessage}
      />

      <Modal visible={modalLembrete} transparent animationType="slide">
        <View style={styles.containerModal}>
          <View style={styles.modalCard}>
            <Text style={styles.modalTitle}>
              Lembrete para {remedioSelecionado?.nome}
            </Text>

            <ScrollView contentContainerStyle={styles.containerHoras}>
              {horarios.map((h, idx) => (
                <Text style={styles.modalHoras} key={idx}>
                  ⏰{" "}
                  {h.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </Text>
              ))}

              <View style={styles.modalHoraPicker}>
                <Text style={styles.txtModal}>Selecione o horário</Text>
                {Platform.OS !== "web" && (
                  <DateTimePicker
                    style={styles.modalHoras}
                    value={novoHorario}
                    mode="time"
                    onChange={(e, date) => setNovoHorario(date)}
                  />
                )}
              </View>

              <Pressable
                style={styles.botaoAdicionar}
                onPress={adicionarHorario}
              >
                <Text style={styles.txtbotao}>+ Adicionar Horário</Text>
              </Pressable>

              <Text style={styles.txtModal}>Por quantos dias?</Text>
              <TextInput
                value={dias}
                onChangeText={setDias}
                keyboardType="numeric"
                style={styles.inputDias}
              />

              <View style={styles.containerBotoes}>
                <Pressable
                  style={styles.botaoSalvarModal}
                  onPress={salvarLembrete}
                >
                  <Text style={styles.txtbotao}>Salvar</Text>
                </Pressable>

                <Pressable
                  style={styles.botaoCancelarModal}
                  onPress={() => setModalLembrete(false)}
                >
                  <Text style={styles.txtbotao}>Cancelar</Text>
                </Pressable>
              </View>
            </ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  );
}
