import { StyleSheet } from "react-native";

const HIGH_SEVERITY = "#FF4C4C";
const MEDIUM_SEVERITY = "#FFA500";
const LOW_SEVERITY = "#4CAF50";

export default StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
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
    backgroundColor: "#b8213351",
    borderRadius: 30,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 14,
    marginBottom: 16,
    marginTop: 10,
  },
  buscar: {
    flex: 1,
    height: 50,
    fontSize: 16,
  },
  iconBuscar: {
    width: 40,
    height: 40,
    marginRight: 8,
    tintColor: "#b82132",
  },
  severityIndicator: {
    width: 8,
    height: "100%",
    borderRadius: 4,
  },
  severityHigh: {
    backgroundColor: HIGH_SEVERITY,
  },
  severityMedium: {
    backgroundColor: MEDIUM_SEVERITY,
  },
  severityLow: {
    backgroundColor: LOW_SEVERITY,
  },
  cards: {
    flex: 1,
    width: "100%",
    marginBottom: 16,
  },
  historico: {
    width: "100%",
    flexDirection: "row",
    gap: 12,
    alignItems: "center",
    backgroundColor: "#f6f6f6",
    borderRadius: 18,
    paddingHorizontal: 14,
    paddingVertical: 12,
    minHeight: 70,
    borderWidth: 1,
    borderColor: "#E5E5E5",
  },
  textos: {
    gap: 4,
  },
  titleText: {
    color: "#b82132",
    fontWeight: "700",
    letterSpacing: 0.2,
    fontSize: 20,
    left: 5,
    marginBottom: 10,
  },
  titleLegend: {
    color: "#000",
    fontWeight: "700",
    letterSpacing: 0.2,
    fontSize: 16,
  },
  legendText: {
    color: "#666666",
    fontSize: 13,
  },

  
  footerContainer: {
    width: "100%",
    padding: 16,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#e0e0e0",
  },
  botaoAdicionar: {
    backgroundColor: "#b82132",
    paddingVertical: 14,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  botaoAdicionarTexto: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },

  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContainer: {
    width: "90%",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#000",
  },
  inputModal: {
    width: "100%",
    backgroundColor: "#f0f0f0",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    marginBottom: 15,
  },
  modalButtonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: '100%',
    marginTop: 10,
  },
  modalButton: {
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    elevation: 2,
    flex: 1,
  },
  cancelButton: {
    backgroundColor: "#aaa",
    marginRight: 10,
  },
  confirmButton: {
    backgroundColor: "#b82132",
  },
  confirmButtonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },

    pickerButton: {
    width: "100%",
    backgroundColor: "#f0f0f0",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 14,
    marginBottom: 15,
    justifyContent: 'center',
  },
  pickerButtonText: {
    fontSize: 16,
    color: '#333',
  },
  placeholderText: {
    fontSize: 16,
    color: '#888',
  },
  pickerOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  pickerContent: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 16,
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