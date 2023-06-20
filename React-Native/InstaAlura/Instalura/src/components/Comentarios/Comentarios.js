import React, { Fragment, useState } from 'react';
import { FlatList, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import estilo from './estilo'

const Comentarios = ({ comentarios }) => {
    
    const [estadoComentarios, setComentario] = useState(comentarios);

    const adicionarComentario = () => {
        compoInput.clear();
        const novoComentario = {
            date: Date.now(),
            text: conteudoCampoInput,
            userName: "Wagner Leme"
        }

        setComentario([...estadoComentarios, novoComentario])
    }

    let compoInput;
    let conteudoCampoInput = '';

    return (
        <Fragment>
            <FlatList
                data={estadoComentarios}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) =>
                <View style={estilo.comentario}>
                    <Text style={estilo.user}>{item.userName}: </Text>
                    <Text>{item.text}</Text>
                </View>
                }
            />
            <View style={estilo.comentario}>
                <TextInput
                    ref={TextInput => compoInput = TextInput}
                    onChangeText={texto => conteudoCampoInput = texto}
                    placeholder={"Deixe o seu comentário..."}
                    style={{ flex: 1 }}
                />
                <TouchableOpacity onPress={adicionarComentario}>
                    <Image style={estilo.imagem} source={require("../../../resource/img/send.png")} />
                </TouchableOpacity>
            </View>
        </Fragment>
    );
}

export default Comentarios;