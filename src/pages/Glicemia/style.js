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

  btnVoltar: {
    position: "absolute",
    top: 130,
    left: 30,
  },

  voltar: {
    width: 30,
    height: 30,
  },

  main: {
    flex: 1,
    width: "100%",
    alignItems: "stretch",
  },

  titulo: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#b82132",
    padding: 5,
    textTransform: "uppercase",
    alignSelf: "center",
  },

  containerGlicemia: {
    marginTop: 30,
    alignItems: "center",
  },

  inputGlicemia: {
    borderWidth: 1,
    borderColor: "#b82132",
    width: "80%",
    height: 40,
    marginBottom: 10,
    paddingLeft: 10,
    borderRadius: 5,
    fontSize: 16,
  },

  textObs:{
    fontSize: 20,
    fontWeight: 600,
    color: "#b82132"
  },

  containerObservacao: {
    alignItems: "center",
    marginTop: 20,
  },

  inputObservacao: {
    borderWidth: 1,
    borderColor: "#b82132",
    width: "80%",
    height: 40,
    marginBottom: 10,
    paddingLeft: 10,
    borderRadius: 5,
    fontSize: 16,
  },

  btnAdicionar: {
    backgroundColor: "#b82132",
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
    width: "80%",
    alignItems: "center",
    alignSelf: "center"
  },

  btnText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },

  historicoContainer: {
    width: "100%",
    padding: 20,
    marginTop: 20,
    marginBottom: 50,
  },

  historicoTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#b82132",
    marginBottom: 10,
    textAlign: "center",
  },

  historicoItem: {
    backgroundColor: "#fcb8c1ff",
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
  },

  historicoText: {
    fontSize: 16,
    color: "#b82132",
  },
});
