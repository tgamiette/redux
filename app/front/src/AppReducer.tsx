import "bootstrap/dist/css/bootstrap.css"
import React, {useReducer} from "react";
import {BlogInterface} from "./Interface/ResponseInterfaces";
import Blog from "./Components/Blog";
import {createStore} from "redux";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import App from "./App";




export default function AppReducer() {
    const [localFilm, dispatchFilm] = useReducer(FilmReducer, films)




    return (
        <div className='p-5'>
            <button onClick={handleAddFilm}>Ajouter un element</button>
            <h1 className='text-center mb-5'>Tous les blogs</h1>
            {localFilm.map((film) => (
                <div>
                    <h3>{film.nom}</h3>
                    <h3>{film.description}</h3>
                    <h3>{film.link}</h3>
                    <h3>{film.de}</h3>
                    <h3>{film.par}</h3>
                </div>
            ))}
        </div>
    );

}

