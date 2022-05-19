import "bootstrap/dist/css/bootstrap.css"
import {FilmInterface} from "../../Interface/FilmInterfaces";
import {SelectFilms} from "../Selector";
import {Store} from "redux";
import useGetFilms from "../../Hook/useGetFilms";
import {SetStateAction, useEffect} from "react";
import * as FilmAction from "../actions/FilmAction";
import {useDispatch} from "react-redux";

// const [localAvis, dispatchAvis] = useReducer()

export const ADD = 'film/add'
export const DELETE = 'film/delete'
export const REMPLACE = 'film/remplace'
export const ADD_REVIEW = 'film/update'
const getFilmList = useGetFilms();

const initialState: FilmInterface[] = []


export default function filmReducer(state = initialState, action: {
    film: FilmInterface;
    type: any; payload: any;
}) {

    switch (action.type) {
        case ADD:
            return [...state, action.payload]
        case ADD_REVIEW:
            return state.map(date => {
                if (date.id == action.payload.id) {
                    date.review?.push(action.payload.review)
                }
            })

        case REMPLACE: {
            return action.payload
        }
        case DELETE: {
            return state.filter(data => data.id != action.payload.id)
        }
        default:
            return state;
    }


}

