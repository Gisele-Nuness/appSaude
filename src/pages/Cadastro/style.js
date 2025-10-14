import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  header: {
    height: 80,
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    textAlign: "center",
    backgroundColor: "#b82132",
  },

  logo: {
    width: 150,
    height: 150,
  },

  btnVoltar: {
    position: "absolute",
    top: 10,
    left: -100,
  },

  voltar: {
    width: 30,
    height: 30,
  },

  containerTitulo: {
    alignItems: "center",
    justifyContent: "center",
  },

  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#b82132",
    padding: 5,
    textTransform: "uppercase",
  },

  imgPerfil: {
    width: 120,
    height: 120,
  },

  imagem: {
    width: 120,
    height: 120,
    borderRadius: 100,
  },

  containerInput: {
    backgroundColor: "#b82132",
    borderTopRightRadius: 80,
    borderTopLeftRadius: 80,
    width: "100%",
    height: 600,
    alignItems: "center",
    justifyContent: "center",
    gap: 22,
    marginTop: 30,
  },

  input: {
    backgroundColor: "#FFFFFF",
    color: "#b82132",
    borderRadius: 20,
    fontWeight: "bold",
    borderWidth: 1,
    borderColor: "#FFFFFF",
    width: "88%",
    height: 50,
    paddingHorizontal: 20,
    textTransform: "uppercase",
    justifyContent: "center"
  },

  picker: {
    width: "100%",
    height: 200,
    backgroundColor: "#fff",
    borderBottomWidth: 2,
    borderColor: "#fff",
    color: "#b82132",
    fontWeight: "bold",
    fontSize: 16,
  },

  btnHome: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#b82132",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 15,
    textTransform: "uppercase",
    width: 180,
    textAlign: "center",
    paddingLeft: 40,
  },

  iconMais: {
    width: 30,
    height: 30,
    position: "absolute",
    left: 15,
    top: 10,
    zIndex: 1,
  },

  pickerText: {
    fontSize: 16,
    color: "#cccc",
    fontWeight: "bold",
  },

  overlay: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  pickerContent: {
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },

  webPickerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 15,
    textAlign: "center",
  },
  webPickerOption: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 10,
    backgroundColor: "#f0f0f0",
  },
  webPickerOptionSelected: {
    color: "#000",
  },
  webPickerOptionText: {
    fontSize: 16,
    color: "#000",
    textAlign: "center",
  },
});
