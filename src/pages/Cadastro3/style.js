import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  scrollContainer: {
    flexGrow: 1,
    alignItems: "center",
  },

  header: {
    height: 80,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#b82132",
    padding: 5,
  },

  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },

  containerTitulo: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginVertical: 20,
    position: 'relative',
  },

  btnVoltar: {
    position: "absolute",
    top: 0,
    left: 15,
    zIndex: 2,
  },

  voltar: {
    width: 30,
    height: 30,
  },

  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#b82132",
    padding: 5,
    textTransform: "uppercase",
    marginTop: 10,
  },

  imgPerfil: {
    width: 120,
    height: 120,
    marginTop: 10,
  },

  containerInput: {
    backgroundColor: "#b82132",
    borderTopRightRadius: 80,
    borderTopLeftRadius: 80,
    width: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 22,
    paddingTop: 50,
    paddingBottom: 30,
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
  },

  btnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    position: 'relative',
  },

  btnHome: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#b82132",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 15,
    textTransform: "uppercase",
    width: 250,
    textAlign: "center",
    paddingLeft: 40,
  },

  iconMais: {
    width: 30,
    height: 30,
    position: "absolute",
    left: 15,
    zIndex: 1,
  },

  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },

  modalContent: {
    backgroundColor: "white",
    padding: 30,
    borderRadius: 15,
    width: "80%",
    alignItems: "center",
  },

  modalText: {
    fontSize: 18,
    marginBottom: 25,
    textAlign: "center",
    fontWeight: "bold",
    color: "#b82132",
  },

  modalButton: {
    backgroundColor: "#b82132",
    padding: 15,
    borderRadius: 10,
    width: 100,
    alignItems: "center",
  },

  modalButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});