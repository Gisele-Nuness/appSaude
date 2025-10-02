import { StyleSheet } from "react-native";

const Colors = {
  Background: "#FFFFFF",   
  TextDark: "#222222",   
  TextGray: "#555555",  
  TextRed: "#b82132"
};

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Background,
  },

  btnVoltar: {
    top: 20,
    left: 15,   
  },

  voltar: {
    width: 30,
    height: 30,
  },

  topo: {
    alignItems: "center",
    marginTop: 0,
    marginBottom: 30,
    paddingHorizontal: 20,
  },

  telefoneHeaderIcon:{
    width: 60,
    height: 60,
    resizeMode: "contain",
    marginBottom: 10,
  },

  titulo: {
    fontSize: 28,
    fontWeight: "900",
    color: Colors.TextRed,
    letterSpacing: 1,
    marginBottom: 5,
  },
  
  subtitulo: {
    fontSize: 14,
    color: Colors.TextGray,
    fontWeight: "400",
  },

  telefoneIcon: {
    width: 40,
    height: 40,
    resizeMode: "contain",
    marginRight: 15,
  },

  scrollContent: {
    paddingBottom: 40,
  },

  listaContainer: {
    paddingHorizontal: 15,
  },

  item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between", 
    backgroundColor: "#fff",
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  
  iconeContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
  },

  icone: {
    width: 40,
    height: 40,
    resizeMode: "contain",
    marginRight: 15,
  },
  
  
  textoContainer: {
    flex: 1,
  },

  textoNome: {
    fontSize: 16,
    color: Colors.TextDark,
    fontWeight: "500",
  },
  
  textoNumero: {
    fontSize: 20,
    color: Colors.TextDark,
    fontWeight: "800",
    marginTop: 2,
    letterSpacing: 1,
  },

  telefoneContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  
  callIcon: {
    width: 25,
    height: 25,
    resizeMode: "contain",
  },
  
});
