import {useSelector, useStore} from "react-redux";
import {JSXElementConstructor, ReactElement, ReactFragment, ReactPortal, useEffect} from "react";
import {SelectFilms} from "../Redux/Selector";
import {FilmInterface} from "../Interface/FilmInterfaces";
import useGetFilms from "../Hook/useGetFilms";
import {Link, NavLink} from "react-router-dom";

export default function Film(film: any) {
    return (


        <div className='col-sm'>
            <img src={`/src/assets/images/films/${film.film.image}`} height={"250px"} width="300px" alt={film.film.id}/>
            <h4>{film.film.title}</h4>
            <p>
                <small>
                    Par : {film.film.author}
                    <br/>
                    Sortie le : {film.film.createdAt}
                </small>
            </p>
            <NavLink to={`/film/${film.film.id}`} className="btn" >Voir plus</NavLink>

        </div>
    )
}