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
    paddingHorizontal: 16,
    paddingTop: 20,
    alignItems: "stretch",
  },

  btnVoltar: {
    top: 0,
    left: 15,   
  },

  voltar: {
    width: 30,
    height: 30,
  },

  searchWrapper: {
    width: "100%",
    height: 50,
    backgroundColor: "#b8213379",
    borderRadius: 30,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 14,
    marginBottom: 16,
    marginTop: 15,
  },

  buscar: {
    flex: 1,
    height: 50,
    color: "#2A2A2A",
    fontSize: 16,
  },

  iconBuscar: {
    width: 40,
    height: 40,
    marginRight: 8,
  },

  containerBg: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  frutaBg: {
    width: 300,
    height: 300,
    opacity: 0.5,
  },

  modal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.84)",
  },
  modalContainer: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    width: "80%",
    height: 500,
    alignItems: "center",
  },
  modalTitulo: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },

  modalText: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: "center",
  },
  frutaModal: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
});
