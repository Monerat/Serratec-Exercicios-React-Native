import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    background: {
        width: '100%',
        height: '100%'
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        paddingTop: 60,
        justifyContent: "flex-start"
    },

    label: {
        fontSize: 18,
        color: "white",
        textAlign: 'left',
        marginLeft: '11%',
        marginTop: '2%',
        marginBottom: '3%',
        fontWeight: 'bold',
        letterSpacing: 0.25
    },

    titulo: {
        height: 40,
        width: '80%',
        borderRadius: 8,
        alignSelf: 'center',
        padding: '2%',
        backgroundColor: '#051937',
        borderBottomWidth: 5,
        borderColor: '#5C5EB3'
    },

    descricao: {
        height: 120,
        width: '80%',
        padding: '2%',
        borderRadius: 8,
        alignSelf: 'center',
        backgroundColor: '#051937',
        textAlignVertical: 'top',
        borderBottomWidth: 5,
        borderColor: '#5C5EB3'

    },

    botao: {
        height: 50,
        width: '50%',
        backgroundColor: '#DF8EEB',
        borderRadius: 20,
        elevation: 1,
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: "10%",
        marginBottom: "10%",
    },

    buttonLabel: {
        fontSize: 16,
        color: "white",
        textAlign: 'center',
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
    },
    cardSonho: {
        height: 150,
        width: '80%',
        padding: '2%',
        margin: '2%',
        borderRadius: 18,
        alignSelf: "center",
        flexDirection: 'column',
        backgroundColor: '#5D5FB2',
    },
    starCard: {
        tintColor: '#DF8EEB',
        height: 40,
        width: 40,

    },
    cardSonhoTop: {
        flexDirection: 'row',
        alignItems: "flex-start",
        justifyContent: "space-between",

    },
    cardTitulo: {
        fontSize: 18,
        color: "white",
        padding: "3%",
        fontWeight: 'bold',
        letterSpacing: 0.25
    },
    cardDescricao: {
        fontSize: 14,
        color: "white",
        marginLeft: "6%",
        letterSpacing: 0.25
    }
});