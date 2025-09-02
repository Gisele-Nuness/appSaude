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
    backgroundColor: "#b82132",
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
    color: "#b82132",
    padding: 5,
    textTransform: "uppercase",
  },

  imgPerfil: {
    width: 120,
    height: 120,
  },

  containerInput: {
    backgroundColor: "#b82132",
    borderTopRightRadius: 80,
    borderTopLeftRadius: 80,
    width: "100%",
    height: 600,
    alignItems: "center",
    justifyContent: "center",
    gap: 22,
    marginTop: 30,
  },

  input: {
    borderColor: "#FFFFFF",
    backgroundColor: "#FFFFFF",
    color: "#b82132",
    borderRadius: 20,
    fontWeight: "bold",
    borderWidth: 1,
    width: "88%",
    height: 40,
    padding: 20,
    textTransform: "uppercase",
  },

  containerBtn: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
    marginTop: 60,
    marginBottom: 100,
  },

  btn: {
    width: 200,
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  txtBtn: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "#b82132",
    textTransform: "uppercase",
  },

  containerCadastro: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
    marginTop: 40,
    marginBottom: 10,
  },

  btnCadastro: {
    width: 200,
    alignItems: "center",
    justifyContent: "center",
  },

  txtBtnCadastro: {
    fontSize: 14,
    color: "#fff"

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
