import React, {SetStateAction, useEffect, useState} from 'react'
import ReactDOM from 'react-dom'
import Nav from './Components/Navbar'
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import './index.css'
import App from './App'
import LoginForm from "./Components/LoginForm";
import RouteBlogList from "./Route/RouteBlogList";
import {Provider} from "react-redux";
import {createStore} from "redux";


export const films = {
    films: [{
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
}
let id = 0

export function FilmReducer(state = [], action: {
    par: any;
    avec: any;
    sortie: any;
    de: any;
    link: any;
    description: any;
    nom: any;
    type: any; payload: any;
}) {

    switch (action.type) {
        case 'todo/addFilm':
            return [...state, {
                id? : id++,
                nom: action.nom,
                description: action.description,
                link: action.link,
                de: action.de,
                par: action.par,
                sortie: action.sortie,
                avec: action.avec,
                completed: false
            }];
        case 'todo/toggleFilm':
            return state.map(film => {
                if (film.id !== action.index){
                    return film;
                }
                return {}
            })
        default:
            return state;
    }


}

export const store = createStore(FilmReducer, films)

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>
    , document.getElementById('root'));

