import {useSelector, useStore} from "react-redux";
import {useEffect} from "react";
import {SelectFilms} from "../Redux/Selector";
import {FilmInterface} from "../Interface/FilmInterfaces";
import useGetFilms from "../Hook/useGetFilms";

export default function Film(film) {
    return (
        <div className='col-sm bg-light'>
            {/*<img src="" width=""/>*/}
            <h4>{film.film.title}</h4>
            <p>
                <small>
                    Par : {film.film.author}
                    <br/>
                    Sortie le : {film.film.createdAt}
                    <br/>
                    Avec : {film.film.actor}
                </small>
            </p>

            <a>Voir plus</a>
        </div>
    )
}