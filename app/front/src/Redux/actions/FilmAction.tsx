import {FilmInterface} from "../../Interface/FilmInterfaces";
import * as FilmReducer from '../Reducers/FilmReducer';
import {SetStateAction} from "react";

export function addFilm(film: FilmInterface) {
    return {
        type: FilmReducer.ADD,
        payload: film

    }
}
export function deleteFilm(film: FilmInterface) {
    return {
        type: FilmReducer.ADD,
        payload: film

    }
}
export function updateFilm(film: FilmInterface) {
    return {
        type: FilmReducer.ADD,
        payload: film

    }
}

export function addAllFilm(films: SetStateAction<FilmInterface[]>) {
    return {
        type: FilmReducer.REMPLACE,
        payload: films

    }

}
