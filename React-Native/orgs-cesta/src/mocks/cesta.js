import logo from '../../assets/logo.png';
import tomate from '../../assets/frutas/Tomate.png'
import abobora from '../../assets/frutas/Abóbora.png'
import batata from '../../assets/frutas/Batata.png'
import brocolis from '../../assets/frutas/Brócolis.png'
import pepino from '../../assets/frutas/Pepino.png'

const cesta = {
    topo: {
        titulo: "Detalhes da cesta",
    },
    detalhes: {
        nome: "Cesta de Verduras",
        logoFazenda: logo,
        nomeFazenda: "Jenny Jack Farm",
        descricao: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha...",
        preco: "R$ 50,00",
        botao: "Comprar"
    },
    itens: {
        titulo: "Itens da Cesta",
        lista: [
            {
                nome: "Tomate",
                imagem: tomate,
            },
            {
                nome: "Abobora",
                imagem: abobora,
            },
            {
                nome: "Batata",
                imagem: batata,
            },
            {
                nome: "Brocolis",
                imagem: brocolis,
            },
            {
                nome: "Pepino",
                imagem: pepino,
            },
        ]
    }
}

export default cesta;