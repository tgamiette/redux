import "bootstrap/dist/css/bootstrap.css"
import {useReducer} from "react";
import {FilmInterface} from "../../Interface/FilmInterfaces";

const [localAvis, dispatchAvis] = useReducer()

export default function FilmReducer(state: any, action: {
    film: FilmInterface;
    type: any; payload: any;
}) {

    switch (action.type) {
        case 'ADD_FILM':
            return [...state, {
                ...action.film,
                completed: false
            }];
        default:
            return state;
    }


}

