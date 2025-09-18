import * as ImagePicker from "expo-image-picker";
import { Alert, Button, Modal, Text, View, StyleSheet } from "react-native";


const solicitarPermissoes = async () => {
  const camera = await ImagePicker.requestCameraPermissionsAsync();
  const galeria = await ImagePicker.requestMediaLibraryPermissionsAsync();

  if (camera.status !== "granted" || galeria.status !== "granted") {
    Alert.alert(
      "Permissão negada",
      "é necessário permitir acesso á camera e galeria."
    );
    return false;
  }

  return true;
};

const tirarFoto = async (setImagem, setAbrirEscolhaFoto) => {
  const permissoes = await solicitarPermissoes();
  if (!permissoes) return;

  const resultado = await ImagePicker.launchCameraAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    allowsEditing: true,
    quality: 1,
    base64: false,
  });

  if (!resultado.canceled) {
    setImagem(resultado.assets[0].uri);
    setAbrirEscolhaFoto(false);
  }
};

const escolherDaGaleria = async (setImagem, setAbrirEscolhaFoto) => {
  const permissoes = await solicitarPermissoes();
  if (!permissoes) return;

  const resultado = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    allowsEditing: true,
    quality: 1,
    aspect: [4, 3],
    base64: false,
  });

  if (!resultado.canceled) {
    setImagem(resultado.assets[0].uri);
    setAbrirEscolhaFoto(false);
  }
};

export function ModalEscolhaFoto({
  visivel,
  aoFechar,
  setImagem,
  setAbrirEscolhaFoto,
}) {
  return (
    <Modal
      visible={visivel}
      transparent
      animationType="fade"
      onRequestClose={aoFechar}
    >
      <View style={styles.modal}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>Alterar foto do perfil</Text>
          <View style={{ gap: 10, width: "100%" }}>
            <Button
              title="Tirar foto"
              color="#b82132"
              onPress={() => tirarFoto(setImagem, setAbrirEscolhaFoto)}
            />
            <Button
              title="Escolher da galeria"
              color="#b82132"
              onPress={() => escolherDaGaleria(setImagem, setAbrirEscolhaFoto)}
            />
            <Button title="Cancelar" color="#888" onPress={aoFechar} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default {
  solicitarPermissoes,
  tirarFoto,
  escolherDaGaleria,
};

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContainer: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    width: "80%",
    alignItems: "center",
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: "center",
  },
});
