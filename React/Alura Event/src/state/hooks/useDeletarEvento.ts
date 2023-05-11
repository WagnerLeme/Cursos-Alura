import { useSetRecoilState } from "recoil";
import { IEvento } from "../../interfaces/IEvento";
import { listaDeEventoState } from "../atom";

const useDeletarEvento = () => {
    const setListaEventos = useSetRecoilState<IEvento[]>(listaDeEventoState);
    return (evento: IEvento) => {

        setListaEventos((listaAntiga) => [
            ...listaAntiga.filter(evt => evento.id !== evt.id)
        ])
    }
}

export default useDeletarEvento