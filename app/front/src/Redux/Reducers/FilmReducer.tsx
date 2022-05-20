import "bootstrap/dist/css/bootstrap.css"
import {FilmInterface} from "../../Interface/FilmInterfaces";

export const ADD = 'film/add'
export const DELETE = 'film/delete'
export const REMPLACE = 'film/remplace'
export const ADD_REVIEW = 'film/update'

const initialState: FilmInterface[] = []


export default function filmReducer(state = initialState, action: {
    film: FilmInterface;
    type: any; payload: any;
}) {

    switch (action.type) {
        case ADD:
            return [...state, action.payload]
        case ADD_REVIEW:
            return state.map(film => {
                if (film.id == action.payload.filmId) {
                    film.review?.push(action.payload)
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

