import {FilmInterface} from "../../Interface/FilmInterfaces";
import * as FilmReducer from '../Reducers/FilmReducer';

export function addReview(film: FilmInterface) {
    return {
        type: FilmReducer.ADD,
        payload: film
    }
}

export function DeleteReview(film: FilmInterface) {
    return {
        type: FilmReducer.ADD,
        payload: film
    }
}

function getReview(reviews) {
    return {
        type: FilmReducer.REMPLACE,
        payload: reviews
    }

}
