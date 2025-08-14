import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },

    header: {
      width: '100%',
      height: 100,
      backgroundColor: '#b80202ff',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
      paddingVertical: 0,
      paddingHorizontal: 20,
      
    },

    logo: {
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',    
    },

    cardsContainer: {
      width: '100%',
      padding: 20,
      backgroundColor: '#f0f0f0',
      alignItems: 'center',
      justifyContent: 'center',

    },  

    card: {
        width: 130,
        height: 130,
        backgroundColor: '#e91212ff',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'column',
        margin: 10,
  
    },

    nome: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
    },

    imagem: {
        width: 50,
        height: 50,
        marginTop: 10,
    },

    sairButton: {
      backgroundColor: '#b80202ff',
      padding: 10,
      borderWidth: 1,
      borderRadius: 5,
      width: 80,
      height: 50,
      alignItems: 'center',
    },

    sairButtonText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
    },
});