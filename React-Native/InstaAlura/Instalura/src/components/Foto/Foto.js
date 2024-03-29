import React, { Fragment, useState } from 'react';
import { Image, Text, TouchableOpacity, View } from "react-native";
import estilo from './estilo';
import { curtirFoto, imgLike } from '../api/curtidas'


const Foto = ({ urlFoto, descricao, quantidadeLike }) => {
    const [curtiu, setCurtiu] = useState(false);
    const [likes, setLikes] = useState(quantidadeLike);

    const clicouCurtir = () => {
        const [novoEstadoCurtiu, novaQnt] = curtirFoto(curtiu, likes)
        setLikes(novaQnt)
        setCurtiu(novoEstadoCurtiu)
    }
   
    return (
        <Fragment>
            <Image
                source={{ uri: urlFoto }}
                style={estilo.imagem}
            />
            <Text style={estilo.texto}>{descricao}</Text>
            <View
                style={estilo.viewLike}>

                <TouchableOpacity onPress={clicouCurtir}>
                    <Image source={imgLike(curtiu)}
                        style={estilo.like}
                    />
                </TouchableOpacity>
                <Text style={estilo.texto}>Curtidas {likes}</Text>
            </View>

        </Fragment>
    )
}




export default Foto;