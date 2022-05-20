import {useSelector, useStore} from "react-redux";
import {SelectFilms} from "../Redux/Selector";
import {FilmInterface, ReviewInterface} from "../Interface/FilmInterfaces";
import Film from "./Film";
import React from "react";

export default function Review(reviews: ReviewInterface) {
    const review =(reviews.review[0])
    return (
        <div className='p-5'>
            <p>
                <small>
                    review: {<review className="review"></review>}
                    <br/>
                    Note: {review.note}/5
                    <br/>
                    par : {review.authorId}
                </small>
            </p>
        </div>
    )
}