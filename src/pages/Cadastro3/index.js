import React, { useState } from "react";
import styles from "./style";
import { 
  View, Text, TextInput, TouchableOpacity, Modal, Alert, StatusBar, Image, ScrollView, Pressable
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation, useRoute } from "@react-navigation/native";


export default function Cadastro3() {
  const navigation = useNavigation();
  const route = useRoute();
  const dadosAnteriores = route.params?.dadosAnteriores || {};

  const [form, setForm] = useState({ 
    email: "", 
    senha: "", 
    confirmaSenha: "" 
  });
  const [modalVisible, setModalVisible] = useState(false);

  const salvarDados = async () => {
    if (!form.email || !form.senha || !form.confirmaSenha) {
      Alert.alert("Erro", "Preencha todos os campos!");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(form.email)) {
      Alert.alert("Erro", "Digite um email válido!");
      return;
    }
    if (form.senha.length < 6) {
      Alert.alert("Erro", "A senha deve ter pelo menos 6 caracteres!");
      return;
    }
    if (form.senha !== form.confirmaSenha) {
      Alert.alert("Erro", "As senhas não coincidem!");
      return;
    }

    try {
      const usuarioCompleto = {
        ...dadosAnteriores,
        email: form.email,
        senha: form.senha
      };
      await AsyncStorage.setItem("usuario", JSON.stringify(usuarioCompleto));
      setModalVisible(true);
    } catch (e) {
      Alert.alert("Erro", "Não foi possível salvar os dados");
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <Image
            source={require("../../../assets/logo.png")}
            style={styles.logo}
          />
        </View>

        <View style={styles.containerTitulo}>
          <Pressable onPress={() => navigation.goBack()} style={styles.btnVoltar}>
            <Image
              source={require("../../../assets/voltar.png")}
              style={styles.voltar}
            />
          </Pressable>
          <Text style={styles.titulo}>Cadastre-se</Text>
          <Image
            source={require("../../../assets/perfil.png")}
            style={styles.imgPerfil}
          />
        </View>

        <View style={styles.containerInput}>
          <TextInput 
            style={styles.input} 
            value={form.email} 
            onChangeText={(txt) => setForm(prev => ({ ...prev, email: txt }))} 
            placeholder="Digite seu email" 
            keyboardType="email-address" 
            autoCapitalize="none" 
          />
          
          <TextInput 
            style={styles.input} 
            value={form.senha} 
            onChangeText={(txt) => setForm(prev => ({ ...prev, senha: txt }))} 
            placeholder="Digite sua senha" 
            secureTextEntry 
          />
          
          <TextInput 
            style={styles.input} 
            value={form.confirmaSenha} 
            onChangeText={(txt) => setForm(prev => ({ ...prev, confirmaSenha: txt }))} 
            placeholder="Confirme sua senha" 
            secureTextEntry 
          />

          <Pressable onPress={salvarDados} style={styles.btnContainer}>
            <Image
              source={require("../../../assets/plus.png")}
              style={styles.iconMais}
            />
            <Text style={styles.btnHome}>concluir Cadastro</Text>
          </Pressable>
        </View>
      </ScrollView>

      <Modal transparent visible={modalVisible} animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Cadastro concluído com sucesso!</Text>
            <TouchableOpacity 
              style={styles.modalButton} 
              onPress={() => {
                setModalVisible(false);
                setTimeout(() => navigation.replace("Login"), 200);
              }}
            >
              <Text style={styles.modalButtonText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <StatusBar style="auto" />
    </View>
  );
}