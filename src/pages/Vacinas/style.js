import { StyleSheet } from "react-native";

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

  // --- Mudanças nessa seção ---
  cardsGrupo: {
    flexDirection: "row",
    // Usa "space-between" ou "space-evenly" para melhor espaçamento com flex: 1, ou mantenha "space-around"
    justifyContent: "space-between",
    alignItems: "center",
    // Aumentei um pouco a margem horizontal para dar respiro aos cards
    marginHorizontal: 15,
    marginBottom: 20,
  },

  cardGrupo: {
    backgroundColor: "#7e001d", // Vinho escuro
    borderRadius: 15,
    padding: 10,
    // Remove a largura fixa (width: 100)
    // Adiciona flex: 1 para que ocupe 1/3 do espaço disponível
    flex: 1,
    // Adiciona margem lateral para separar os cards
    marginHorizontal: 5,
    alignItems: "center",
    // Adiciona minHeight para garantir que mesmo com pouco texto o tamanho seja igual
    minHeight: 120, // Ajuste este valor conforme o necessário
    justifyContent: 'center', // Centraliza o conteúdo verticalmente
  },
  // --- Fim das mudanças ---
  
  cardImagem: {
    width: 50,
    height: 50,
    resizeMode: "contain",
    marginBottom: 5,
  },
  
  cardTexto: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 12,
    textAlign: "center",
  },
  

  scroll: {
    padding: 20,
    paddingBottom: 40,
  },

  card: {
    backgroundColor: "#ffe9ec",
    borderRadius: 20,
    padding: 15,
    marginBottom: 20,
  },

  cardTitulo: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#b82132",
    marginBottom: 10,
    textAlign: "center",
  },

  itemVacina: {
    fontSize: 16,
    color: "#333",
    marginLeft: 10,
    marginVertical: 2,
  },
});