import "bootstrap/dist/css/bootstrap.css"
import {FilmInterface} from "../../Interface/FilmInterfaces";
import {SelectFilms} from "../Selector";
import {Store} from "redux";
import useGetFilms from "../../Hook/useGetFilms";

// const [localAvis, dispatchAvis] = useReducer()

export const ADD = 'film/add'
export const DELETE = 'film/delete'
export const REMPLACE = 'film/remplace'

const initialState =
    [{
        id: 1,
        nom: "refugié",
        de: "test",
        description: "il etait une fois",
        link: "url",
        par: "essaie",
        sortie: "2022/01/01",
        avec: "TOTO"
    },
        {
            id: 2,
            nom: "refugié2",
            description: "il etait une fois",
            link: "url",
            de: "test",
            par: "essaie",
            sortie: "2022/01/01",
            avec: "TOTO"
        }]

//
// const addFilm = () => ({type: ADD})
// const deleteFilm = (data: any) => ({type: DELETE, payload: data})
// const fetchFilm = (datas: any) => ({type: REMPLACE, payload: datas})

// export function fetchOrUpdateFilms(store: Store) {
//     const status = SelectFilms(store.getState().FilmReducer.status)
//
//     store.dispatch(filmFetching());
//     getBlogList()
//         .then((data: any) => {
//             console.log(data)
//             store.dispatch(filmResolved(data));
//         })
//         .catch((error: any) => {
//             store.dispatch(filmError(error));
//         })
//     return;
// }


export default function filmReducer(state = initialState, action: {
    film: FilmInterface;
    type: any; payload: any;
}) {

    switch (action.type) {
        case ADD:
            return [...state, action.payload]

        case REMPLACE: {
            return action.payload
        }
        case DELETE: {
            state.filter(data => data.id != action.payload.id)
            return [...state,]
        }
        default:
            return state;
    }


}

