import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-start',

    },

    cardsContainer: {
      width: '100%',
      padding: 20,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 40,

    },  

    card: {
        width: 110,
        height: 110,
        borderRadius: 100,
        borderWidth: 3,
        borderColor: "#b82132",
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        marginLeft: 4,
        marginRight: 4,
        marginBottom: 40
    },

    nome: {
        fontSize: 12,
        fontWeight: 'bold',
        color: "#b82132",
        textAlign: 'center',
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
      alignItems: 'center',
      justifyContent: 'center',
    },

    sairButtonText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
    },
});