const { StyleSheet,Dimensions } = require("react-native");

const largura = Dimensions.get("screen").width;

const estilo = StyleSheet.create({
    imagem: {
        width: largura,
        height: largura
    },
    like: {
        width: 30,
        height: 30, 
        margin: 5
    },
    viewLike: {
        flexDirection: "row",
        alignItems: "center"
    },
    texto: {
        color: 'black',
    }
});

export default estilo;