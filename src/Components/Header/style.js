import { StyleSheet } from "react-native";

export default StyleSheet.create({
  header: {
    width: "100%",
    height: 80,
    backgroundColor: "#b82132",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingTop: 80,
    paddingBottom: 40,
    paddingHorizontal: 20,
  },

  logo: {
    width: 150,
    height: 150,
    alignItems: "center",
    justifyContent: "center",
  },

  menu: {
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },

  menuOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "flex-start",
    paddingTop: 50,
    paddingLeft: 100,
  },

  menuContainer: {
    backgroundColor: "white",
    borderRadius: 12,
    paddingVertical: 20,
    paddingHorizontal: 25,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  menuOption: {
    fontSize: 18,
    color: "#333",
    fontWeight: "500",
  },

  menuOptionLogout: {
    fontSize: 18,
    color: "#E63946",
    fontWeight: "600",
  },

  menuOptionPressable: {
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 8,
  },

  menuOptionPressableHover: {
    backgroundColor: "#f0f0f0",
  },

  menuIcons: {
    flexDirection: "row",
    alignItems: "center",
    textAlign: "center",
    marginBottom: 15,
       
  },

  icons: {
    width: 26,
    height: 26,
    marginRight: 10,
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
