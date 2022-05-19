import {useSelector, useStore} from "react-redux";
import {SelectFilms} from "../Redux/Selector";
import {FilmInterface} from "../Interface/FilmInterfaces";
import Film from "./Film";

export default function FilmList() {

    const films = useSelector(SelectFilms)
    return (
        <div className='p-5'>
            <h1 className='text-center mb-5'>Tous les films</h1>
            <div className="row justify-content-between">
                {films.map((film: FilmInterface) =>
                    <Film film={film} key={film.id}/>
                    )}
            </div>
        </div>
    )
}