import {BlogInterface} from "../Interface/ResponseInterfaces";
import Blog from "./Blog";
import {useSelector} from "react-redux";
import {FilmInterface} from "../Interface/FilmInterfaces";

export default function FilmList() {
    const films = useSelector(state => state.films)
    return (
        <div className='p-5'>
            <h1 className='text-center mb-5'>Tous les films</h1>
            {films.map((film: FilmInterface) => (
                <div>
                    <h4>Nom : {film.nom}</h4>
                    <h4>Description{film.description}</h4>
                    <h4>sortie le {film.sortie}</h4>
                    <h4>Par:{film.par}</h4>
                    <h4>aVec:{film.avec}</h4>
                </div>
                // <Blog blog={blog} key={blog.id}/>
            ))}
        </div>
    )
}