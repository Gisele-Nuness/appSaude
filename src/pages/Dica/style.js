import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  main: {
    flex: 1,
    flexDirection: "column",
    width: "100%",
    paddingTop: 30,
    alignItems: "center",
    gap: 10,
  },

  btnVoltar: {
    position: "absolute",
    top: 20,
    left: 15,
  },

  voltar: {
    width: 30,
    height: 30,
  },

  btnDica: {
    width: 200,
    height: 100,
    backgroundColor: "#b82132",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    top: 250,
    
  },

  txtBtn: {
    color: "#fff",
    fontSize: 22
  }
});
