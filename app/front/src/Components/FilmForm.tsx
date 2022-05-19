import React, {useState} from "react";

import {FilmInterface} from "../Interface/FilmInterfaces";
import {useDispatch, useSelector} from "react-redux";
import {addFilm} from "../Redux/actions/FilmAction";
import {selectSigning} from "../Redux/Selector";
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
    const loggedUser = useSelector(selectSigning)
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
            <h2 className='mb-3 text-center'>Ajouter un film</h2>
            <div className="form-floating mb-3">
                <input type="text" className="form-control" id="title" placeholder="title"
                       name='title' onChange={handleChange} value={film.title}/>
                <label htmlFor="title">Title</label>
            </div>
            <div className="mb-3 form-floating">
                <textarea className="form-control" placeholder="Write here" id="floatingTextarea" name='content'
                          style={{}} onChange={handleChange} value={film.content}/>
                <label htmlFor="floatingTextarea">Description</label>
            </div>
            <div className="mb-1 form-floating">
                <textarea className="form-control" placeholder="Autheyr" id="author" name='author'
                          style={{height: ''}} onChange={handleChange} value={film.author}/>
                <label htmlFor="author">Par</label>
            </div>
            <div className="mb-3 form-floating">
                <input type={"date"} className="form-control" id="createdAt" name='createdAt'
                       style={{height: ''}} onChange={handleChange} value={film.createdAt}/>
                <label htmlFor="createdAt">sortie le </label>
            </div>
            <div className="mb-3 form-floating">
                <input type={"text"} className="form-control" placeholder="Write here" id="floatingTextarea"
                       name='actor'
                       style={{height: ''}} onChange={handleChange} value={film.actor}/>
                <label htmlFor="floatingTextarea">avec ( séparé par une virgule)</label>
            </div>
            <div className="mb-3">
                <label htmlFor="file">Choisir une affiche</label>

                <input type={"file"} className="" placeholder="aFFICHE" id="floatingTextarea" name='image'
                       style={{height: ''}} onChange={handleChange} value={film.image}></input>
            </div>
            <button type='submit' className='btn btn-primary w-100'>Send</button>
        </form>
    )
}