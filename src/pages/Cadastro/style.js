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

    btnVoltar: {
    position: "absolute",
    top: 10,
    left: -100,
  },

  voltar: {
    width: 30,
    height: 30,
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

  imagem: {
    width: 120,
    height: 120,
    borderRadius: 100
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
    color: "#b82132",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 15,
    textTransform: "uppercase",
    width: 180,
    textAlign: "center",
    paddingLeft: 40,
  },

  iconMais: {
    width: 30,
    height: 30,
    position: "absolute",
    left: 15,
    top: 10,
    zIndex: 1,
  },



});
