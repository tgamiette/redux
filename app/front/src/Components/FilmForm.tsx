import React, {useState} from "react";
import {LocalBlogPost} from "../Interface/LocalBlogPost";
import usePostBlog from "../Hook/usePostBlog";
import {BlogInterface, LoginResponseInterface} from "../Interface/ResponseInterfaces";
import {FilmInterface} from "../Interface/FilmInterfaces";
import {useDispatch} from "react-redux";
import {AddFilm} from "../Actions/FilmAction";

interface BlogFormPropsInterface {
    loggedUser: LoginResponseInterface,
    setNeedsUpdate: React.Dispatch<boolean>
}

export default function FilmForm() {
    const [film, setFilm] = useState<FilmInterface>({
        id: 0,
        actor: "", content: "", created_at: "", from: "", title: "", url: "", image: ""
    })
    const dispatch = useDispatch();

    const handleChange = ({target}: any) => {
        setFilm(prev => ({
            ...prev,
            [target.name]: target.value
        }))
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (loggedUser.token != null) {
            dispatch(AddFilm(film))


        }
    }

    return (
        <form className='mx-auto' style={{maxWidth: '350px'}} onSubmit={handleSubmit}>
            <h2 className='mb-3 text-center'>Ajouter un film</h2>
            <div className="form-floating mb-3">
                <input type="text" className="form-control" id="floatingInput" placeholder="title"
                       name='title' onChange={handleChange} value={film.title}/>
                <label htmlFor="floatingInput">Title</label>
            </div>
            <div className="mb-3 form-floating">
                <textarea className="form-control" placeholder="Write here" id="floatingTextarea" name='content'
                          style={{height: '100px'}} onChange={handleChange} value={film.content}/>
                <label htmlFor="floatingTextarea">Content</label>
            </div>
            <div className="mb-3 form-floating">
                <textarea className="form-control" placeholder="Write here" id="floatingTextarea" name='content'
                          style={{height: '100px'}} onChange={handleChange} value={film.content}/>
                <label htmlFor="floatingTextarea">Par</label>
            </div>
            <div className="mb-3 form-floating">
                <textarea className="form-control" placeholder="Write here" id="floatingTextarea" name='content'
                          style={{height: '100px'}} onChange={handleChange} value={film.content}/>
                <label htmlFor="floatingTextarea">sortie le </label>
            </div>
            <div className="mb-3 form-floating">
                <textarea className="form-control" placeholder="Write here" id="floatingTextarea" name='content'
                          style={{height: '100px'}} onChange={handleChange} value={film.content}/>
                <label htmlFor="floatingTextarea">avec</label>
            </div>
            <div className="mb-3 form-floating">
                <textarea className="form-control" placeholder="Write here" id="floatingTextarea" name='content'
                          style={{height: '100px'}} onChange={handleChange} value={film.content}/>
                <label htmlFor="floatingTextarea">Par</label>
            </div>
            <div className="mb-3 form-floating">
                <textarea className="form-control" placeholder="Write here" id="floatingTextarea" name='content'
                          style={{height: '100px'}} onChange={handleChange} value={film.content}/>
                <label htmlFor="floatingTextarea">Par</label>
            </div>
            <div className="mb-3 form-floating">
                <textarea className="form-control" placeholder="Write here" id="floatingTextarea" name='content'
                          style={{height: '100px'}} onChange={handleChange} value={film.content}/>
                <label htmlFor="floatingTextarea">Par</label>
            </div>
            <button type='submit' className='btn btn-primary w-100'>Send</button>
        </form>
    )
}