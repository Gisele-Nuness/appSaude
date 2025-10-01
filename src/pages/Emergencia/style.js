import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  btnVoltar: {
    top: 15,
    left: 15,   
  },

  voltar: {
    width: 30,
    height: 30,
  },

  topo: {
    alignItems: "center",
    marginTop: 0,
    marginBottom: 50,
  },

  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#b82132",
    marginBottom: 20,
  },

  telefoneIcon: {
    width: 100,
    height: 100,
  },

  listaContainer: {
    flex: 1,
    backgroundColor: "#ffe9ec",
    borderTopLeftRadius: 80,
    borderTopRightRadius: 80,
    padding: 20,
  },

  item: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 15,
  },

  icone: {
    width: 50,
    height: 50,
    marginRight: 15,
    resizeMode: "contain",
  },

  texto: {
    fontSize: 18,
    color: "#b82132",
    fontWeight: "bold",
    flexShrink: 1,
  },
});
