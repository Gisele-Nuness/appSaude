import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "column",
    overflow: "hidden",
  },

  main: {
    flex: 1,
    width: "100%",
    paddingTop: 20,
    alignItems: "stretch",
  },

  mapa: {
    flex: 1,
    width: "100%",
  },

  marcador: {
    width: 35,
    height: 35,
  },

  btnVoltar: {
    position: "absolute",
    top: 130,
    left: 20,
    backgroundColor: "rgba(255,255,255,0.9)",
    borderRadius: 30,
    padding: 10,
    elevation: 5,
  },
  voltar: {
    width: 25,
    height: 25,
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.6)",
    justifyContent: "center",
  },
  modalContainer: {
    alignSelf: "center",
    width: "90%",
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 20,
  },
  modalImagem: {
    width: "100%",
    height: 180,
    borderRadius: 10,
    marginBottom: 15,
  },
  modalNome: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 15,
  },
  modalDescricao: {
    fontSize: 16,
    color: "#555",
    marginBottom: 15,
  },
  modalInfoBox: {
    gap: 10,
    justifyContent: "space-between",
    marginBottom: 25,
  },
  modalHorario: {
    fontSize: 15,
    color: "#333",
  },
  btnFechar: {
    backgroundColor: "#b82132",
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: "center",
  },
  btnFecharTexto: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
