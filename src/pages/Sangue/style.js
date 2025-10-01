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

  main: {
    flex: 1,
    width: "100%",
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

  titulo:{
    fontSize: 30,
    fontWeight: "bold",
    color: '#b82132',
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

  containerText:{
    backgroundColor: '#fcb8c1ff',
    borderTopRightRadius: 80,
    borderTopLeftRadius: 80,
    width: "100%",
    height: 400,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30
  },

  text:{
    fontSize: 20,
    fontWeight: "bold",
    color: '#b82132',
    padding: 5,
    gap: 100,
    alignSelf: "center",
  },

  textSangue:{
    fontSize: 100,
    fontWeight: "bold",
    color: '#b82132',
    padding: 5,
    gap: 100,
    alignSelf: "center",
  }

});
