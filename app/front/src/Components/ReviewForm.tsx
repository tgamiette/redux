import React, {useState} from "react";

import {FilmInterface} from "../Interface/FilmInterfaces";
import {useDispatch, useSelector} from "react-redux";
import {addFilm} from "../Redux/actions/FilmAction";
import {SelectSigning} from "../Redux/Selector";
import usePostFilm from "../Hook/usePostFilm";

export default function FilmForm() {
    const [film, setFilm] = useState<FilmInterface>({
        title: "",
        content: "",
        author: "",
        createdAt: "",
        actor: "",
        image: ""
    })
    const dispatch = useDispatch();
    const loggedUser = useSelector(SelectSigning)
    const postFilm= usePostFilm()
    const handleChange = ({target}: any) => {
        setFilm(prev => ({
            ...prev,
            [target.name]: target.value
        }))
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (loggedUser.token != null) {
            postFilm(film)
        }
    }

    return (
        <form className='mx-auto' style={{maxWidth: '350px'}} onSubmit={handleSubmit}>
            <h2 className='mb-3 text-center'>Ajouter un Commentaire</h2>
            <div className="mb-3">
                <label htmlFor="file">Choisir une affiche</label>

                <input type={"file"} className="" placeholder="aFFICHE" id="floatingTextarea" name='image'
                       style={{height: ''}} onChange={handleChange} value={film.image}></input>
            </div>
            <button type='submit' className='btn btn-primary w-100'>Send</button>
        </form>
    )
}