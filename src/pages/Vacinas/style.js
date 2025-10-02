import { StyleSheet } from "react-native";

const Colors = {
  Primary: "#b82132",
  PrimaryDark: "#7e001d",
  Background: "#f5f5f5",
  CardLight: "#ffffff",
  TextDark: "#333333",
  TextLight: "#ffffff",
};

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  topo: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 20,
    paddingBottom: 10,
    position: "relative",
  },

  btnVoltar: {
    position: "absolute",
    left: 20,
  },

  voltar: {
    width: 30,
    height: 30,
  },

  titulo: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#b82132",
  },

  cardsGrupo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 15,
    marginTop: 10,
    marginBottom: 20,
  },

  cardGrupo: {
    backgroundColor: Colors.PrimaryDark,
    borderRadius: 15,
    padding: 10,
    flex: 1,
    marginHorizontal: 5,
    alignItems: "center",
    minHeight: 120,
    justifyContent: 'center',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 8,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  
  cardGrupoAtivo: {
    backgroundColor: Colors.Primary,
    borderColor: Colors.TextLight,
    borderWidth: 3,
    shadowColor: Colors.Primary,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 15,
  },

  cardImagem: {
    width: 40,
    height: 40,
    resizeMode: "contain",
    marginBottom: 5,
    tintColor: Colors.TextLight,
  },
  
  cardTexto: {
    color: Colors.TextLight,
    fontWeight: "700",
    fontSize: 13,
    textAlign: "center",
    lineHeight: 18,
  },
  
  scroll: {
    paddingHorizontal: 15,
    paddingBottom: 40,
  },

  card: {
    backgroundColor: Colors.CardLight,
    borderRadius: 12,
    padding: 20,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },

  cardTitulo: {
    fontSize: 18,
    fontWeight: "700",
    color: Colors.Primary,
    marginBottom: 10,
    textAlign: "left",
    borderBottomWidth: 2,
    borderBottomColor: 'rgba(184, 33, 50, 0.1)',
    paddingBottom: 5,
  },

  itemVacina: {
    fontSize: 15,
    color: Colors.TextDark,
    marginLeft: 10,
    marginVertical: 4,
  },
});