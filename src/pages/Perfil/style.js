import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  header: {
    width: "100%",
    height: 100,
    backgroundColor: "#b82132",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingTop: 80,
    paddingBottom: 40,
    paddingHorizontal: 20,
  },

  logo: {
    width: 152,
    height: 152,
    alignItems: "center",
    justifyContent: "center",
  },

  perfil: {
    width: 68,
    height: 68,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#fff",
    borderRadius: 50,
  },
  imagem: {
    width: 68,
    height: 68,
    borderWidth: 2,
    borderColor: "#fff",
    borderRadius: 50,
  },

  scrollContainer: {
    flexGrow: 1,
    alignItems: "center",
  },

  containerTitulo: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginVertical: 20,
    position: "relative",
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

  containerInput: {
    backgroundColor: "#b82132",
    borderTopRightRadius: 80,
    borderTopLeftRadius: 80,
    width: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 16,
    paddingTop: 30,
    paddingBottom: 40,
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

  row: {
    width: "88%",
    flexDirection: "row",
    gap: 12,
  },
  inputHalf: {
    flex: 1,
  },

  divisor: {
    width: "88%",
    marginTop: 8,
    marginBottom: 0,
    borderTopWidth: 1,
    borderTopColor: "#ffffff66",
    paddingTop: 10,
  },
  divisorText: {
    color: "#fff",
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },

  btnContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 22,
    position: "relative",
  },

  btnHome: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#b82132",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 15,
    textTransform: "uppercase",
    width: 160,
    textAlign: "center",
    paddingLeft: 40,
  },

  iconMais: {
    width: 30,
    height: 30,
    position: "absolute",
    left: 25,
    zIndex: 1,
  },

  modal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    paddingHorizontal: 20,
  },
  modalContainer: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    width: "100%",
    maxWidth: 420,
    alignItems: "center",
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: "center",
  },
});
