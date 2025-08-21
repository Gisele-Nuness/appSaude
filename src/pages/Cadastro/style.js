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
    backgroundColor: '#b82132',
  },

  logo: {
    width: 150,
    height: 150,
  },

  containerTitulo: {
    alignItems: "center",
    justifyContent: "center",
  },

  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    color: '#b82132',
    padding: 5,
    textTransform: "uppercase",
  },

  imgPerfil: {
    width: 120,
    height: 120
  },

  containerInput: {
    backgroundColor: '#b82132',
    borderTopRightRadius: 80,
    borderTopLeftRadius: 80,
    width: "100%",
    height: 600,
    alignItems: "center",
    justifyContent: "center",
    gap: 22,
    marginTop: 30
  },

  input: {
    borderColor: "#FFFFFF",
    backgroundColor: "#FFFFFF",
    color: '#b82132',
    borderRadius: 20,
    fontWeight: "bold",
    borderWidth: 1,
    width: "88%",
    height: 40,
    padding: 20,
    textTransform: "uppercase",
  },

  picker: {
    width: "88%",
    height: 40,
    backgroundColor: "#fff",
    borderRadius: 20,
    borderColor: "#fff",
    borderWidth: 1,
    color: '#b82132',
    fontWeight: "bold",
    paddingLeft: 10,
  },

  btnHome: {
    fontSize: 18,
    fontWeight: "bold",
    color: '#b82132',
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 15,
    textTransform: "uppercase",
    marginTop: 50,
    width: 150,
    textAlign: 'end',
  },

  iconMais: {
    width: 30,
    height: 30,
    position: "absolute",
    zIndex: 1,
    top: 58,
    left: 15
  },

  modal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContainer: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    width: "80%",
    alignItems: "center",
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: "center",
  },
});
