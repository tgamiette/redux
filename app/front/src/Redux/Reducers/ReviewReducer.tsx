import "bootstrap/dist/css/bootstrap.css"
import {FilmInterface, ReviewInterface} from "../../Interface/FilmInterfaces";


export const ADD = 'review/add'
export const ADDS = 'review/adds'
export const DELETE = 'review/delete'
export const REMPLACE = 'review/remplace'

const initialState: ReviewInterface[] = []

export default function ReviewReducer(state = initialState, action: {
    review: ReviewInterface;
    type: any;
    payload: any;
}) {

    switch (action.type) {
        case ADD:
            return [...state, action.payload]
        // case ADDS:
        //     return [...state, action.payload]
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

