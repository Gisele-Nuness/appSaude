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
    zIndex: 10,
  },

  voltar: {
    width: 30,
    height: 30,
  },

  main: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 20,
  },

  titulo: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#b82132",
    textAlign: "center",
    marginTop: 20,
    marginBottom: 10,
  },

  subtitulo: {
    fontSize: 18,
    fontWeight: "600",
    color: "#b82132",
    textAlign: "center",
    marginBottom: 20,
    letterSpacing: 1,
  },

  controleDiarioContainer: {
    alignItems: "center",
    width: "100%",
  },

  visualizacaoContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    width: "100%",
  },

  barrasColoridas: {
    marginRight: 30,
    gap: 10,
  },

  barra: {
    width: 70,
    height: 35,
    borderRadius: 8,
  },

  garrafaContainer: {
    alignItems: "center",
  },

  gargalo: {
    width: 35,
    height: 25,
    backgroundColor: "#4A90E2",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderWidth: 2,
    borderColor: "#357ABD",
    borderBottomWidth: 0,
  },

  corpo: {
    width: 110,
    height: 160,
    backgroundColor: "#87CEEB",
    borderRadius: 20,
    borderWidth: 3,
    borderColor: "#357ABD",
    overflow: "hidden",
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.8,
  },

  nivel: {
    width: "100%",
    backgroundColor: "#1E88E5",
    position: "absolute",
    bottom: 0,
    opacity: 0.7,
  },

  garrafaTexto: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    textShadowColor: "rgba(0, 0, 0, 0.5)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
    zIndex: 10,
  },

  infoContainer: {
    width: "100%",
    alignItems: "center",
    marginBottom: 25,
    marginTop: 10,
  },

  infoText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#b82132",
    marginVertical: 5,
  },

  botoesContainer: {
    width: "100%",
    alignItems: "center",
  },

  adicionarLabel: {
    fontSize: 16,
    color: "#333",
    marginBottom: 15,
    fontWeight: "500",
  },

  botoesRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginBottom: 20,
    gap: 10,
  },

  btnAdicionar: {
    backgroundColor: "#b82132",
    paddingVertical: 25,
    paddingHorizontal: 18,
    borderRadius: 60,
    minWidth: 105,
    minHeight: 105,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  btnAdicionarText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
    lineHeight: 18,
  },

  btnZerar: {
    backgroundColor: "transparent",
    padding: 10,
    marginTop: 10,
  },

  btnZerarText: {
    color: "#b82132",
    fontSize: 16,
    textDecorationLine: "underline",
    fontWeight: "500",
  },

  historicoContainer: {
    width: "100%",
    marginTop: 20,
    marginBottom: 50,
    paddingHorizontal: 5,
  },

  historicoTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#b82132",
    marginBottom: 15,
    textAlign: "center",
  },

  historicoItem: {
    backgroundColor: "#fcb8c1ff",
    marginBottom: 10,
    padding: 15,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },

  historicoText: {
    fontSize: 16,
    color: "#b82132",
    fontWeight: "500",
  },

  historicoEmpty: {
    fontSize: 16,
    color: "#999",
    textAlign: "center",
    marginTop: 10,
    fontStyle: "italic",
  },

  editarObjetivoContainer: {
    alignItems: "center",
    width: "100%",
  },

  inputObjetivoContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },

  inputObjetivo: {
    borderWidth: 2,
    borderColor: "#b82132",
    width: 120,
    height: 45,
    paddingHorizontal: 15,
    borderRadius: 8,
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
  },

  mlText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#b82132",
    marginLeft: 8,
  },

  botoesEdicaoContainer: {
    flexDirection: "row",
    gap: 15,
    marginTop: 10,
  },

  btnSalvarObjetivo: {
    backgroundColor: "#b82132",
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 8,
  },

  btnSalvarText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },

  btnCancelarObjetivo: {
    backgroundColor: "#ccc",
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 8,
  },

  btnCancelarText: {
    color: "#333",
    fontSize: 16,
    fontWeight: "bold",
  },
});