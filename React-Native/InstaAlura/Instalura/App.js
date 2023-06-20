/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { Fragment, useEffect, useState } from 'react';
import { ScrollView, FlatList } from "react-native";
import { Cabecalho } from './src/components/Cabecalho';
import { Foto } from './src/components/Foto';
import lerFotos from './src/components/api/feed';
import { Comentarios } from './src/components/Comentarios';


const App = () => {

  const [fotos, setFotos] = useState([]);

  useEffect(() => {
    lerFotos(setFotos);
  }, [])
  return (
    <ScrollView>
      <FlatList
        data={fotos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) =>
          <Fragment>
            <Cabecalho nomeUsuario={item.userName}
              urlImage={item.userURL} />
            <Foto
              urlFoto={item.url}
              descricao={item.description} 
              quantidadeLike={item.likes}
            />
            <Comentarios comentarios={item.comentarios}/>
          </Fragment>
        }
      />
    </ScrollView>
  )
};

export default App;


