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

  containerBg: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    
  },

  sangueIcon: {
    width: 300,
    height: 300,
  },

  containerText: {
    backgroundColor: "#fcb8c1ff",
    borderTopRightRadius: 80,
    borderTopLeftRadius: 80,
    width: "100%",
    height: 380,
    alignItems: "center",
    justifyContent: "center",  
  },

  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#b82132",
    padding: 5,
  },

  textSangue: {
    fontSize: 100,
    fontWeight: "bold",
    color: "#b82132",
    padding: 5,
  },
});
