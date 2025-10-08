import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },

  main: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
    paddingHorizontal: 16,
    paddingTop: 30,
    alignItems: "center",
    gap: 10,
  },

  fotoPerfil: {
    width: 68,
    height: 68,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#fff",
    borderRadius: 50,
  },

  nomePerfil: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#b82132",
  },

  cardsContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 40,
  },

  card: {
    width: 110,
    height: 110,
    borderRadius: 100,
    borderWidth: 3,
    borderColor: "#b82132",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    marginLeft: 4,
    marginRight: 4,
    marginBottom: 40,
  },

  nome: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#b82132",
    textAlign: "center",
  },

  imagem: {
    width: 50,
    height: 50,
    marginTop: 10,
  },

  sairButton: {
    backgroundColor: "#b82132",
    padding: 10,
    borderRadius: 10,
    width: 80,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },

  sairButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
