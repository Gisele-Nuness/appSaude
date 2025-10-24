import { Image, Pressable, View, Modal, Text, Button, ScrollView } from "react-native";
import styles from "./style";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { excluirPerfil } from "../../Controllers/Usuario";
import { useNotifications } from "../../Context/NotificationContext";

export default function Header() {
  const [menuVisible, setMenuVisible] = useState(false);
  const navigation = useNavigation();
  const [modal, setModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalFinal, setModalFinal] = useState(false);
  const [modalNotificacoes, setModalNotificacoes] = useState(false);
  const [modalConfirmacao, setModalConfirmacao] = useState(false);
  const [notificacaoSelecionada, setNotificacaoSelecionada] = useState(null);

  const { notificacoes, removerNotificacao } = useNotifications();

  const sair = async () => {
    try {
      await AsyncStorage.clear();
      console.log("Dados limpos com sucesso!");
      navigation.navigate("Splash");
    } catch (error) {
      console.error("Erro ao limpar os dados:", error);
    }
  };

  const deletarConta = async () => {
    try {
      const res = await excluirPerfil();
      setModal(false);
      setModalMessage(res.message);
      setModalFinal(true);
    } catch (err) {
      setModal(false);
      setModalMessage(err.message);
      setModalFinal(true);
    }
  };

  const onFecharModalFinal = () => {
    setModalFinal(false);
    navigation.reset({ index: 0, routes: [{ name: "Splash" }] });
  };

  return (
    <View style={styles.header}>
      <Image source={require("../../../assets/logo.png")} style={styles.logo} />

      <Pressable onPress={() => setModalNotificacoes(true)}>
        <Image
          source={require("../../../assets/notificacao.png")}
          style={styles.iconNotificacao}
        />
        {notificacoes.length > 0 && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{notificacoes.length}</Text>
          </View>
        )}
      </Pressable>
      <Pressable onPress={() => setMenuVisible(true)}>
        <Image
          source={require("../../../assets/menu.png")}
          style={styles.menu}
        />
      </Pressable>

      <Modal visible={menuVisible} transparent={true} animationType="fade">
        <Pressable
          style={styles.menuOverlay}
          onPress={() => setMenuVisible(false)}
        >
          <Pressable style={styles.menuContainer}>
            <Pressable
              style={({ pressed }) => [
                styles.menuOptionPressable,
                pressed && styles.menuOptionPressableHover,
              ]}
              onPress={() => {
                setMenuVisible(false);
                navigation.navigate("Home");
              }}
            >
              <View style={styles.menuIcons}>
                <Image
                  source={require("../../../assets/home.png")}
                  style={styles.icons}
                />
                <Text style={styles.menuOption}>Home</Text>
              </View>
            </Pressable>

            <Pressable
              style={({ pressed }) => [
                styles.menuOptionPressable,
                pressed && styles.menuOptionPressableHover,
              ]}
              onPress={() => {
                setMenuVisible(false);
                navigation.navigate("Perfil");
              }}
            >
              <View style={styles.menuIcons}>
                <Image
                  source={require("../../../assets/perfil-edit.png")}
                  style={styles.icons}
                />
                <Text style={styles.menuOption}>Perfil</Text>
              </View>
            </Pressable>

            <Pressable
              style={({ pressed }) => [
                styles.menuOptionPressable,
                pressed && styles.menuOptionPressableHover,
              ]}
              onPress={() => {
                setMenuVisible(false);
                setModal(true);
              }}
            >
              <View style={styles.menuIcons}>
                <Image
                  source={require("../../../assets/excluir.png")}
                  style={styles.icons}
                />
                <Text style={styles.menuOptionLogout}>Excluir conta</Text>
              </View>
            </Pressable>

            <Pressable
              style={({ pressed }) => [
                styles.menuOptionPressable,
                pressed && styles.menuOptionPressableHover,
              ]}
              onPress={() => {
                setMenuVisible(false);
                sair();
              }}
            >
              <View style={styles.menuIcons}>
                <Image
                  source={require("../../../assets/sair.png")}
                  style={styles.icons}
                />
                <Text style={styles.menuOptionLogout}>Sair</Text>
              </View>
            </Pressable>
          </Pressable>
        </Pressable>
      </Modal>

      <Modal visible={modal} transparent={true} animationType="fade">
        <View style={styles.modal}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalText}>
              Tem certeza que deseja excluir sua conta?
            </Text>
            <View style={{ gap: 10, width: "100%" }}>
              <Button
                title="Excluir"
                color="#b82132"
                onPress={() => deletarConta()}
              />
              <Button
                title="Cancelar"
                color="#888"
                onPress={() => setModal(false)}
              />
            </View>
          </View>
        </View>
      </Modal>

      <Modal visible={modalFinal} transparent={true} animationType="fade">
        <View style={styles.modal}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalText}>{modalMessage}</Text>
            <View style={{ gap: 10, width: "100%" }}>
              <Button
                title="OK"
                color="#b82132"
                style={{ width: "80px" }}
                onPress={onFecharModalFinal}
              />
            </View>
          </View>
        </View>
      </Modal>

       <Modal
        visible={modalNotificacoes}
        transparent
        animationType="slide"
        onRequestClose={() => setModalNotificacoes(false)}
      >
        <View style={styles.modalFundo}>
          <View style={styles.modalConteudo}>
            <Text style={styles.modalTitulo}>Lembretes de Medicamentos</Text>
            <ScrollView style={{ maxHeight: 300 }}>
              {notificacoes.length === 0 ? (
                <Text style={{ textAlign: "center", color: "#555" }}>
                  Nenhum lembrete agendado
                </Text>
              ) : (
                notificacoes.map((n) => (
                  <View key={n.id} style={styles.notificacaoItem}>
                    <View>
                      <Image
                        source={require("../../../assets/comprimido.png")}
                        style={styles.comprimidoIcon}
                      />
                    </View>
                    <View>
                      <Text style={{ fontWeight: "bold" }}>{n.nome}</Text>
                      <Text>{n.horario}</Text>
                    </View>
                    <View style={{ marginLeft: "auto" }}>
                      <Pressable
                        onPress={() => {
                          setModalNotificacoes(false);
                          setNotificacaoSelecionada(n.id);
                          setModalConfirmacao(true);
                        }}
                      >
                        <Image
                          source={require("../../../assets/lixeira.png")}
                          style={styles.comprimidoIcon}
                        />
                      </Pressable>
                    </View>
                  </View>
                ))
              )}
            </ScrollView>
            <Pressable
              style={styles.btnFechar}
              onPress={() => setModalNotificacoes(false)}
            >
              <Text style={styles.btnFecharTexto}>Fechar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <Modal
        visible={modalConfirmacao}
        animationType="fade"
        transparent
        onRequestClose={() => {
          setModalConfirmacao(false);
          setNotificacaoSelecionada(null);
        }}
      >
        <View style={styles.modal}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalText}>Deseja excluir esse lembrete?</Text>
            <Pressable
              style={styles.btnExcluir}
              onPress={() => {
                removerNotificacao(notificacaoSelecionada);
                setModalConfirmacao(false);
                setModalNotificacoes(true);
                setNotificacaoSelecionada(null);
              }}
            >
              <Text style={styles.btnFecharTexto}>Excluir</Text>
            </Pressable>

            <Pressable
              style={styles.btnFechar}
              onPress={() => {
                setModalConfirmacao(false);
                setNotificacaoSelecionada(null);
              }}
            >
              <Text style={styles.btnFecharTexto}>Cancelar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}
