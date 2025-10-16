import React, { useMemo, useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  Pressable,
  FlatList,
  Modal,
  Keyboard,
  Alert,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import styles from "./style";
import Header from "../../Components/Header";
import { useNavigation } from "@react-navigation/native";
import ModalPadrao from "../../Components/Modal/index.js";

import { buscarAlergias, cadastrarAlergia } from "../../Controllers/Alergia";

const DADOS_INICIAIS_ALERGIAS = [];

export default function Alergias() {
  const navigation = useNavigation();
  const [alergias, setAlergias] = useState(DADOS_INICIAIS_ALERGIAS);
  const [textoPesquisa, setTextoPesquisa] = useState("");
  const [modal, setModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const [modalAtivo, setModalAtivo] = useState(null);

  const [novoNome, setNovoNome] = useState("");
  const [novaSeveridade, setNovaSeveridade] = useState("");
  const [novoTipo, setNovoTipo] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const lista = await buscarAlergias();

        const adaptadas = lista.map((a) => ({
          id: String(a.id),
          name: a.nome || "",
          type: a.tipo || "",
          severity: a.severidade || "",
        }));
        setAlergias(adaptadas);
      } catch (e) {
        setModal(true);
        setModalMessage("Não foi possível carregar suas alergias.");
      }
    })();
  }, []);

  const handleAdicionarAlergia = async () => {
    if (!novoNome.trim() || !novaSeveridade || !novoTipo) {
      setModalAtivo(null)
      setModal(true);
      setModalMessage("Por favor, preencha todos os campos.");
      return;
    }

    try {
      const criada = await cadastrarAlergia({
        nome: novoNome,
        tipo: novoTipo,
        severidade: novaSeveridade,
      });

      const novaAlergia = {
        id: String(criada.id ?? Date.now()),
        name: criada.nome || novoNome,
        type: criada.tipo || novoTipo,
        severity: criada.severidade || novaSeveridade,
      };

      setAlergias((alergiasAnteriores) => [...alergiasAnteriores, novaAlergia]);

      setNovoNome("");
      setNovaSeveridade("");
      setNovoTipo("");
      setModalAtivo(null);
      Keyboard.dismiss();
      setModal(true);
      setModalMessage("Alergia cadastrada com sucesso!");
    } catch (e) {
      setModal(true);
      setModalMessage("Não foi possível cadastrar a alergia.");
    }
  };

  const fecharModalPrincipal = () => {
    setNovoNome("");
    setNovaSeveridade("");
    setNovoTipo("");
    setModalAtivo(null);
  };

  const alergiasFiltradas = useMemo(() => {
    const termoNormalizado = textoPesquisa.trim().toLowerCase();
    if (!termoNormalizado) return alergias;
    return alergias.filter(
      (alergia) =>
        alergia.name.toLowerCase().includes(termoNormalizado) ||
        alergia.type.toLowerCase().includes(termoNormalizado) ||
        alergia.severity.toLowerCase().includes(termoNormalizado)
    );
  }, [textoPesquisa, alergias]);

  const CartaoAlergia = ({ alergia }) => (
    <Pressable style={styles.historico}>
      <View
        style={[
          styles.severityIndicator,
          alergia.severity === "Alta" && styles.severityHigh,
          alergia.severity === "Média" && styles.severityMedium,
          alergia.severity === "Baixa" && styles.severityLow,
        ]}
      />
      <View style={styles.textos}>
        <Text style={styles.titleLegend}>{alergia.name}</Text>
        <Text style={styles.legendText}>
          Tipo: {alergia.type}, Severidade: {alergia.severity}
        </Text>
      </View>
    </Pressable>
  );

  const renderModalContent = () => {
    switch (modalAtivo) {
      case "form":
        return (
          <Pressable style={styles.modalOverlay} onPress={fecharModalPrincipal}>
            <Pressable
              style={styles.modalContainer}
              onPress={() => Keyboard.dismiss()}
            >
              <Text style={styles.modalTitle}>Cadastrar Nova Alergia</Text>
              <TextInput
                style={styles.inputModal}
                placeholder="Nome da Alergia"
                placeholderTextColor={"#00000098"}
                value={novoNome}
                onChangeText={setNovoNome}
              />
              <Pressable
                style={styles.pickerButton}
                onPress={() => setModalAtivo("severidadePicker")}
              >
                <Text
                  style={
                    novaSeveridade
                      ? styles.pickerButtonText
                      : styles.placeholderText
                  }
                >
                  {novaSeveridade || "Selecione a severidade..."}
                </Text>
              </Pressable>
              <Pressable
                style={styles.pickerButton}
                onPress={() => setModalAtivo("tipoPicker")}
              >
                <Text
                  style={
                    novoTipo ? styles.pickerButtonText : styles.placeholderText
                  }
                >
                  {novoTipo || "Selecione o tipo..."}
                </Text>
              </Pressable>
              <View style={styles.modalButtonRow}>
                <Pressable
                  style={[styles.modalButton, styles.cancelButton]}
                  onPress={fecharModalPrincipal}
                >
                  <Text style={styles.confirmButtonText}>Cancelar</Text>
                </Pressable>
                <Pressable
                  style={[styles.modalButton, styles.confirmButton]}
                  onPress={handleAdicionarAlergia}
                >
                  <Text style={styles.confirmButtonText}>Adicionar</Text>
                </Pressable>
              </View>
            </Pressable>
          </Pressable>
        );

      case "severidadePicker":
        return (
          <Pressable
            style={styles.pickerOverlay}
            onPress={() => setModalAtivo("form")}
          >
            <Pressable style={styles.pickerContent} onPress={() => {}}>
              <Picker
                selectedValue={novaSeveridade}
                onValueChange={(itemValue) => {
                  setNovaSeveridade(itemValue);
                  setModalAtivo("form");
                }}
              >
                <Picker.Item
                  label="Selecione a severidade..."
                  value=""
                  color="#000"
                />
                <Picker.Item label="Alta" value="Alta" color="#000" />
                <Picker.Item label="Média" value="Média" color="#000" />
                <Picker.Item label="Baixa" value="Baixa" color="#000" />
              </Picker>
            </Pressable>
          </Pressable>
        );

      case "tipoPicker":
        return (
          <Pressable
            style={styles.pickerOverlay}
            onPress={() => setModalAtivo("form")}
          >
            <Pressable style={styles.pickerContent} onPress={() => {}}>
              <Picker
                selectedValue={novoTipo}
                onValueChange={(itemValue) => {
                  setNovoTipo(itemValue);
                  setModalAtivo("form");
                }}
              >
                <Picker.Item
                  label="Selecione o tipo..."
                  value=""
                  color="#000"
                />
                <Picker.Item label="Alimentar" value="Alimentar" color="#000" />
                <Picker.Item
                  label="Respiratória"
                  value="Respiratória"
                  color="#000"
                />
                <Picker.Item
                  label="Medicamentosa"
                  value="Medicamentosa"
                  color="#000"
                />
                <Picker.Item label="Contato" value="Contato" color="#000" />
                <Picker.Item label="Outro" value="Outro" color="#000" />
              </Picker>
            </Pressable>
          </Pressable>
        );

      default:
        return null;
    }
  };

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
        <View style={styles.searchWrapper}>
          <Image
            source={require("../../../assets/pesquisar.png")}
            style={styles.iconBuscar}
          />
          <TextInput
            style={styles.buscar}
            placeholder="Buscar alergias"
            placeholderTextColor="#2A2A2A99"
            value={textoPesquisa}
            onChangeText={setTextoPesquisa}
            returnKeyType="search"
          />
        </View>
        <View style={styles.cards}>
          <Text style={styles.titleText}>Minhas Alergias</Text>
          <FlatList
            data={alergiasFiltradas}
            keyExtractor={(alergia) => alergia.id}
            renderItem={({ item }) => <CartaoAlergia alergia={item} />}
            ItemSeparatorComponent={() => (
              <View style={{ height: 10, marginTop: 10 }} />
            )}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
      <View style={styles.footerContainer}>
        <Pressable
          style={styles.botaoAdicionar}
          onPress={() => setModalAtivo("form")}
        >
          <Text style={styles.botaoAdicionarTexto}>Cadastrar Alergia</Text>
        </Pressable>
      </View>

      <Modal
        transparent={true}
        visible={modalAtivo !== null}
        animationType="slide"
        onRequestClose={() => setModalAtivo(null)}
      >
        {renderModalContent()}
      </Modal>

      <ModalPadrao
        visible={modal}
        onClose={() => setModal(false)}
        modalMessage={modalMessage}
      />
    </View>
  );
}
