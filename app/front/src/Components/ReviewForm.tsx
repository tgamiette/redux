import React, {useState} from "react";

import {FilmInterface, ReviewInterface} from "../Interface/FilmInterfaces";
import {useDispatch, useSelector} from "react-redux";
import {addFilm} from "../Redux/actions/FilmAction";
import {SelectSigning} from "../Redux/Selector";
import usePostFilm from "../Hook/usePostFilm";
import usePostReview from "../Hook/usePostReview";

class LocalReviewInterface {
    content: string
}

export default function ReviewForm() {
    const [review, setReview] = useState<LocalReviewInterface>({
        content: ""
    })
    const dispatch = useDispatch();
    const loggedUser = useSelector(SelectSigning)
    const postFilm = usePostReview()
    const handleChange = ({target}: any) => {
        setReview(prev => ({
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
            <h2 className='mb-3 text-center'>Ajouter une review</h2>
            <div className="mb-3">
                <label htmlFor="file">note sur 5   </label>
                <input type={"number"} className="form-control" placeholder="note" id="" name='note'
                       style={{height: ''}} onChange={handleChange}></input>
            </div>
            <div className="mb-3">
                <label htmlFor="file">review: </label>
                <input type={"text"} className="form-control" placeholder="Avis" id="floatingTextarea" name='content'
                       style={{height: ''}} onChange={handleChange}></input>
            </div>
            <button type='submit' className='btn btn-primary w-100'>Ajouter</button>
        </form>
    )
}