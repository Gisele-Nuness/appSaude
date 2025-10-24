import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "flex-start",
    flexDirection: "column",
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

  containerTitulo: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 10,
    marginTop: 20
  },

  titulo: {
    fontSize: 22,
    color: "#b82132",
    fontWeight: "bold",
  },

  iconRemedio: {
    width: 35,
    height: 35,
    tintColor: "#b82132",
  },

  historico: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#f6f6f6",
    borderRadius: 18,
    paddingHorizontal: 14,
    paddingVertical: 12,
    minHeight: 70,
    borderWidth: 1,
    borderColor: "#E5E5E5",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 7 },
    elevation: 2,
  },

  containerRemedios: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    justifyContent: "space-between",
  },

  textos: {
    gap: 4,
  },

  titleText: {
    color: "#b82132",
    fontWeight: "700",
    letterSpacing: 0.2,
    fontSize: 18,
    left: 5,
  },

  titleLegend: {
    color: "#b82132",
    fontWeight: "700",
    letterSpacing: 0.2,
    fontSize: 16,
  },

  legendText: {
    color: "#000",
    fontSize: 15,
    opacity: 1,
    maxWidth: 300,
    marginTop: 5,
  },

  iconAlarme: {
    width: 30,
    height: 30,
    tintColor: "#b82132",
  },

  excluirContainer: {
    justifyContent: "center",
    alignItems: "flex-end",
    backgroundColor: "#b82132",
    borderRadius: 10,
    marginVertical: 5,
  },

  botaoExcluir: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingVertical: 15,
  },

  iconExcluir: {
    width: 24,
    height: 24,
    marginRight: 8,
    tintColor: "#fff",
  },

  txtExcluir: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },

  emptyContainer: {
    marginTop: 100,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  emptyImage: {
    width: 300,
    height: 300,
    opacity: 0.5,
  },
  emptyText: {
    marginTop: 20,
    fontSize: 16,
    textAlign: "center",
    color: "#444",
  },

  containerModal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000000aa",
  },

  modalCard: {
    width: "85%",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },

  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  containerHoras: {
    width: "100%",
    marginVertical: 10,
    padding: 10,
    alignItems: "center",
  },

  modalHoras: {
    fontSize: 16,
    marginVertical: 4,
    alignItems: "center",
    justifyContent: "center",
  },

  modalHoraPicker: {
    marginTop: 10,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },

  txtModal: {
    fontSize: 16,
    marginBottom: 6,
  },

  botaoAdicionar: {
    backgroundColor: "#15A117",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 10,
    marginBottom: 10,
  },

  txtbotao: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },

  inputDias: {
    width: 100,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 8,
    marginVertical: 5,
    textAlign: "center",
  },

  botaoSalvar: {
    backgroundColor: "#1600a4ff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 10,
    marginBottom: 10,
    width: 200,
    alignItems: "center",
  },

  botaoCancelar: {
    backgroundColor: "#E02416",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 10,
    marginBottom: 10,
    width: 200,
    alignItems: "center",
  },

  inputModal: {
    width: 250,
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    marginBottom: 10,
    padding: 5,
  },

  containerBotoes: {
    flexDirection: "row",
    gap: 10,
  },

  botaoSalvarModal: {
    backgroundColor: "#00a419ff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 10,
    marginBottom: 10,
    width: 100,
    alignItems: "center",
  },

  botaoCancelarModal: {
    backgroundColor: "#E02416",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 10,
    marginBottom: 10,
    width: 110,
    alignItems: "center",
  },

  botaoNovo: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: "#b82132",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 3 },
    elevation: 4,
  },
  txtNovo: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
