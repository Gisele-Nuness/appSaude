import { View, Modal, Text, Button } from "react-native";
import styles from "./style";

export default function ModalPadrao({ visible, onClose, modalMessage }) {
    if (!visible) return null;
  return (
    <View style={styles.container}>
      <Modal
        visible={visible}
        animationType="fade"
        transparent
        onRequestClose={onClose}
      >
        <View style={styles.modal}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalText}>{modalMessage}</Text>
            <Button title="Fechar" color="#b82132" onPress={onClose} />
          </View>
        </View>
      </Modal>
    </View>
  );
}
