import {useSelector, useStore} from "react-redux";
import {useEffect} from "react";
import {SelectFilms} from "../Redux/Selector";
import {FilmInterface} from "../Interface/FilmInterfaces";
import useGetFilms from "../Hook/useGetFilms";

export default function FilmList() {

    const films = useSelector(SelectFilms)
    return (
        <div className='p-5'>
            <h1 className='text-center mb-5'>Tous les films</h1>
            {films.map((film: FilmInterface) => (
                <div>
                    <image path={film.image}></image>
                    <h4>Titre : {film.title}</h4>
                    <h4>Description : {film.content}</h4>
                    <h4>sortie le : {film.createdAt}</h4>
                    <h4>Par : {film.author}</h4>
                    <h4>avec : {film.actor}</h4>
                    {/*<Review ></Review>*/}
                    <input type={"text"}/>
                </div>
                // <Blog blog={blog} key={blog.id}/>
            ))}
        </div>
    )
}