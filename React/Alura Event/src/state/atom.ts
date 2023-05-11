import { atom } from "recoil";
import { IEvento } from "../interfaces/IEvento";
import { IFiltroDeEventos } from "../interfaces/IFiltroDeEventos";
import { eventosAsync } from "./seletores";

export const listaDeEventoState = atom<IEvento[]>({
  key: 'listaDeEventosState',
  default: eventosAsync
})

export const filtroDeEventos = atom<IFiltroDeEventos>({
  key: 'filtroDeEventos',
  default: {}
})