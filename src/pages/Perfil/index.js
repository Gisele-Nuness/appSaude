import React, { useEffect, useState, useCallback } from "react";
import {
  View,
  Text,
  TextInput,
  Modal,
  Image,
  ScrollView,
  Pressable,
  Button,
  Alert,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { api } from "../../services/api";
import styles from "./style";
import Foto from "../../Controller/Foto";
import { ModalEscolhaFoto } from "../../Controller/Foto";

const getPublicBaseURL = () => {
  const base = api?.defaults?.baseURL || "";
  if (!base) return "";
  try {
    const u = new URL(base);
    return u.origin;
  } catch (e) {
    return base.replace(/\/api\/?$/, "").replace(/\/$/, "");
  }
};

export default function Perfil() {
  const navigation = useNavigation();

  const [imagem, setImagem] = useState("");
  const [abrirEscolhaFoto, setAbrirEscolhaFoto] = useState(false);

  const [carregando, setCarregando] = useState(true);
  const [modalMsg, setModalMsg] = useState({ visivel: false, texto: "" });

  const [dados, setDados] = useState({
    nome: "",
    dataNasc: "",
    peso: "",
    altura: "",
    tipoSangue: "",
    cep: "",
    logradouro: "",
    numero: "",
    bairro: "",
    cidade: "",
    email: "",
  });

  const [senha, setSenha] = useState({
    novaSenha: "",
    confirmaSenha: "",
  });

  const formatarDataBR = (s) => {
    if (!s) return "";
    const onlyDate = s.includes("T") ? s.split("T")[0] : s;
    if (/^\d{4}-\d{2}-\d{2}$/.test(onlyDate)) {
      const [yyyy, mm, dd] = onlyDate.split("-");
      return `${dd}/${mm}/${yyyy}`;
    }
    return s;
  };

  const normalizarDataBR = (s) => {
    if (!s) return "";
    if (s.includes("T")) return s.split("T")[0];
    if (/^\d{2}\/\d{2}\/\d{4}$/.test(s)) {
      const [dd, mm, yyyy] = s.split("/");
      return `${yyyy}-${mm}-${dd}`;
    }
    return s;
  };

  const maskDateBR = (value) => {
    const v = (value || "").replace(/\D/g, "").slice(0, 8);
    const dia = v.slice(0, 2);
    const mes = v.slice(2, 4);
    const ano = v.slice(4, 8);
    return [dia, mes, ano].filter(Boolean).join("/");
  };

  const isValidDateBR = (s) => {
    if (!/^\d{2}\/\d{2}\/\d{4}$/.test(s)) return false;
    const [dd, mm, yyyy] = s.split("/").map(Number);
    const d = new Date(yyyy, mm - 1, dd);
    if (
      d.getFullYear() !== yyyy ||
      d.getMonth() !== mm - 1 ||
      d.getDate() !== dd
    )
      return false;
    const hoje = new Date();
    if (d > hoje) return false;
    const limite = new Date(
      hoje.getFullYear() - 120,
      hoje.getMonth(),
      hoje.getDate()
    );
    if (d < limite) return false;
    return true;
  };

  const carregarPerfil = useCallback(async () => {
    try {
      const userId = await AsyncStorage.getItem("@userId");
      if (!userId) {
        setModalMsg({
          visivel: true,
          texto: "Sessão expirada. Faça login novamente.",
        });
        return;
      }

      const { data } = await api.get(`/users/${userId}`);

      setDados({
        nome: data?.nome || "",
        dataNasc: formatarDataBR(data?.data_nasc || ""),
        peso: data?.peso || "",
        altura: data?.altura || "",
        tipoSangue: data?.tipo_sangue || "",
        cep: data?.cep || "",
        logradouro: data?.logradouro || "",
        numero: data?.numero || "",
        bairro: data?.bairro || "",
        cidade: data?.cidade || "",
        email: data?.email || "",
      });

      const foto = data?.caminho_foto_url || data?.caminho_foto || "";
      if (foto) {
        const isHttp = /^https?:\/\//i.test(foto);
        const publicBase = getPublicBaseURL();
        const url = isHttp ? foto : `${publicBase}/storage/${foto}`;
        setImagem(url);
      } else {
        setImagem("");
      }
    } catch (e) {
      const msg =
        e?.response?.data?.message ||
        e?.response?.data?.error ||
        "Não foi possível carregar seu perfil.";
      setModalMsg({ visivel: true, texto: msg });
    } finally {
      setCarregando(false);
    }
  }, []);

  useEffect(() => {
    carregarPerfil();
  }, [carregarPerfil]);

  const buscarEndereco = async () => {
    const cepLimpo = (dados.cep || "").replace(/\D/g, "");
    if (cepLimpo.length !== 8) return;

    try {
      const url = `https://viacep.com.br/ws/${cepLimpo}/json/`;
      const response = await axios.get(url);
      if (response.data?.erro) {
        setModalMsg({ visivel: true, texto: "CEP não encontrado." });
        return;
      }
      setDados((prev) => ({
        ...prev,
        logradouro: response.data.logradouro || "",
        bairro: response.data.bairro || "",
        cidade: response.data.localidade || "",
      }));
    } catch (error) {
      setModalMsg({ visivel: true, texto: "Erro ao buscar dados do CEP." });
    }
  };

  const salvarAlteracoes = async () => {
    if (!/\S+@\S+\.\S+/.test(dados.email)) {
      setModalMsg({ visivel: true, texto: "Digite um email válido." });
      return;
    }
    if (dados.dataNasc && !isValidDateBR(dados.dataNasc)) {
      setModalMsg({ visivel: true, texto: "Data de nascimento inválida." });
      return;
    }
    if (senha.novaSenha) {
      if (senha.novaSenha.length < 6) {
        setModalMsg({
          visivel: true,
          texto: "A nova senha deve ter pelo menos 6 caracteres.",
        });
        return;
      }
      if (senha.novaSenha !== senha.confirmaSenha) {
        setModalMsg({ visivel: true, texto: "As senhas não coincidem." });
        return;
      }
    }

    const payload = new FormData();

    if (imagem) {
      try {
        if (Platform.OS === "web" && imagem.startsWith("blob:")) {
          const resp = await fetch(imagem);
          const blob = await resp.blob();
          const ext = (blob.type && blob.type.split("/")[1]) || "jpg";
          const file = new File([blob], `foto.${ext}`, {
            type: blob.type || "image/jpeg",
          });
          payload.append("caminho_foto", file);
        } else if (Platform.OS !== "web" && !/^https?:\/\//i.test(imagem)) {
          const uri =
            Platform.OS === "ios" ? imagem.replace("file://", "") : imagem;
          payload.append("caminho_foto", {
            uri,
            type: "image/jpeg",
            name: "foto.jpg",
          });
        }
      } catch (err) {
        console.warn("Falha ao preparar a imagem:", err);
      }
    }

    payload.append("nome", dados.nome);
    payload.append("data_nasc", normalizarDataBR(dados.dataNasc || ""));
    payload.append("peso", dados.peso ? String(dados.peso) : "");
    payload.append("altura", dados.altura ? String(dados.altura) : "");
    payload.append("tipo_sangue", dados.tipoSangue || "");
    payload.append("cep", dados.cep || "");
    payload.append("logradouro", dados.logradouro || "");
    payload.append("numero", dados.numero || "");
    payload.append("bairro", dados.bairro || "");
    payload.append("cidade", dados.cidade || "");
    payload.append("email", dados.email);

    if (senha.novaSenha) {
      payload.append("senha", senha.novaSenha);
    }

    payload.append("_method", "PUT");

    try {
      const userId = await AsyncStorage.getItem("@userId");
      if (!userId) {
        setModalMsg({
          visivel: true,
          texto: "Sessão expirada. Faça login novamente.",
        });
        return;
      }

      const cfg =
        Platform.OS === "web"
          ? { headers: {} } // NÃO force Content-Type no web
          : { headers: { "Content-Type": "multipart/form-data" } };

      await api.post(`/users/${userId}`, payload, cfg);

      setModalMsg({ visivel: true, texto: "Perfil atualizado com sucesso!" });
    } catch (e) {
      const msg =
        e?.response?.data?.message ||
        e?.response?.data?.error ||
        "Não foi possível atualizar seu perfil.";
      setModalMsg({ visivel: true, texto: msg });
    }
  };

  if (carregando) {
    return (
      <View
        style={[
          styles.container,
          { alignItems: "center", justifyContent: "center" },
        ]}
      >
        <Text style={{ color: "#b82132", fontWeight: "bold" }}>
          Carregando...
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <Image
          source={require("../../../assets/logo.png")}
          style={styles.logo}
        />

        <Pressable onPress={() => setAbrirEscolhaFoto(true)}>
          {imagem ? (
            <Image
              source={{ uri: imagem }}
              style={styles.imagem}
              onError={() =>
                setModalMsg({
                  visivel: true,
                  texto:
                    "Falha ao carregar imagem do perfil. Verifique a URL da foto.",
                })
              }
            />
          ) : (
            <Image
              source={require("../../../assets/perfil.png")}
              style={styles.perfil}
            />
          )}
        </Pressable>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.containerTitulo}>
          <Pressable
            onPress={() => navigation.goBack()}
            style={styles.btnVoltar}
          >
            <Image
              source={require("../../../assets/voltar.png")}
              style={styles.voltar}
            />
          </Pressable>
          <Text style={styles.titulo}>Editar Perfil</Text>
        </View>

        <View style={styles.containerInput}>
          <TextInput
            style={styles.input}
            value={dados.nome}
            onChangeText={(txt) => setDados((p) => ({ ...p, nome: txt }))}
            placeholder="Nome completo"
            placeholderTextColor="#b82132"
          />

          <TextInput
            style={styles.input}
            value={dados.dataNasc}
            onChangeText={(txt) =>
              setDados((p) => ({ ...p, dataNasc: maskDateBR(txt) }))
            }
            placeholder="Data de nascimento (DD/MM/AAAA)"
            keyboardType="numbers-and-punctuation"
            placeholderTextColor="#b82132"
          />

          <View style={styles.row}>
            <TextInput
              style={[styles.input, styles.inputHalf]}
              value={String(dados.peso || "")}
              onChangeText={(txt) => setDados((p) => ({ ...p, peso: txt }))}
              placeholder="Peso (kg)"
              keyboardType="decimal-pad"
              placeholderTextColor="#b82132"
            />
            <TextInput
              style={[styles.input, styles.inputHalf]}
              value={String(dados.altura || "")}
              onChangeText={(txt) => setDados((p) => ({ ...p, altura: txt }))}
              placeholder="Altura (cm)"
              keyboardType="number-pad"
              placeholderTextColor="#b82132"
            />
          </View>

          <TextInput
            style={styles.input}
            value={dados.tipoSangue || ""}
            onChangeText={(txt) =>
              setDados((p) => ({ ...p, tipoSangue: txt.toUpperCase() }))
            }
            placeholder="Tipo sanguíneo (ex: O+)"
            autoCapitalize="characters"
            placeholderTextColor="#b82132"
          />

          <TextInput
            style={styles.input}
            value={dados.email}
            onChangeText={(txt) => setDados((p) => ({ ...p, email: txt }))}
            placeholder="Email"
            autoCapitalize="none"
            keyboardType="email-address"
            placeholderTextColor="#b82132"
          />

          <View style={styles.divisor}>
            <Text style={styles.divisorText}>Alterar Endereço</Text>
          </View>

          <TextInput
            style={styles.input}
            value={dados.cep || ""}
            onChangeText={(txt) => setDados((p) => ({ ...p, cep: txt }))}
            onBlur={buscarEndereco}
            placeholder="CEP"
            keyboardType="numeric"
          />

          <TextInput
            style={styles.input}
            value={dados.logradouro || ""}
            onChangeText={(txt) => setDados((p) => ({ ...p, logradouro: txt }))}
            placeholder="Logradouro"
            placeholderTextColor="#b82132"
          />

          <View style={styles.row}>
            <TextInput
              style={[styles.input, styles.inputHalf]}
              value={dados.numero || ""}
              onChangeText={(txt) => setDados((p) => ({ ...p, numero: txt }))}
              placeholder="Número"
              keyboardType="number-pad"
              placeholderTextColor="#b82132"
            />
            <TextInput
              style={[styles.input, styles.inputHalf]}
              value={dados.bairro || ""}
              onChangeText={(txt) => setDados((p) => ({ ...p, bairro: txt }))}
              placeholder="Bairro"
              placeholderTextColor="#b82132"
            />
          </View>

          <TextInput
            style={styles.input}
            value={dados.cidade || ""}
            onChangeText={(txt) => setDados((p) => ({ ...p, cidade: txt }))}
            placeholder="Cidade"
            placeholderTextColor="#b82132"
          />

          <View style={styles.divisor}>
            <Text style={styles.divisorText}>Alterar senha</Text>
          </View>

          <TextInput
            style={styles.input}
            value={senha.novaSenha}
            onChangeText={(txt) => setSenha((p) => ({ ...p, novaSenha: txt }))}
            placeholder="Nova senha"
            secureTextEntry
            placeholderTextColor="#b82132"
          />
          <TextInput
            style={styles.input}
            value={senha.confirmaSenha}
            onChangeText={(txt) =>
              setSenha((p) => ({ ...p, confirmaSenha: txt }))
            }
            placeholder="Confirmar nova senha"
            secureTextEntry
            placeholderTextColor="#b82132"
          />

          <Pressable onPress={salvarAlteracoes} style={styles.btnContainer}>
            <Image
              source={require("../../../assets/plus.png")}
              style={styles.iconMais}
            />
            <Text style={styles.btnHome}>Salvar</Text>
          </Pressable>
        </View>
      </ScrollView>

      <Modal
        visible={modalMsg.visivel}
        animationType="fade"
        transparent
        onRequestClose={() => setModalMsg({ visivel: false, texto: "" })}
      >
        <View style={styles.modal}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalText}>{modalMsg.texto}</Text>
            <Button
              title="Fechar"
              color="#b82132"
              onPress={() => {
                const fechar = () => setModalMsg({ visivel: false, texto: "" });
                if (modalMsg.texto.toLowerCase().includes("sucesso")) {
                  fechar();
                  navigation.goBack();
                } else {
                  fechar();
                }
              }}
            />
          </View>
        </View>
      </Modal>
      <ModalEscolhaFoto
        visivel={abrirEscolhaFoto}
        aoFechar={() => setAbrirEscolhaFoto(false)}
        setImagem={setImagem}
        setAbrirEscolhaFoto={setAbrirEscolhaFoto}
      />
    </View>
  );
}
