import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import {FilmInterface, ReviewInterface} from "../Interface/FilmInterfaces";
import HideIfLogged from "./HideIfLogged";
import HideIfNotLogged from "./HideIfNotLogged";
import {SelectFilms, SelectReview, SelectSigning} from "../Redux/Selector";
import Review from "./Review";
import useGetReviews from "../Hook/useGetReviews";
import {addReview} from "../Redux/actions/ReviewAction";
import ReviewList from "./ReviewList";
import ReviewForm from "./ReviewForm";

export default function FilmDetails() {
    const params = useParams();
    const film: FilmInterface = useSelector(SelectFilms).filter((film: FilmInterface) => film.id == params.filmId)
    const reviewList = useSelector(SelectReview).filter((review: any) => review[0].filmId == params.filmId)
    const getReviews = useGetReviews(params.filmId)
    const dispatch = useDispatch()
    console.log("reviewList")
    console.log(reviewList)
    useEffect(() => {
        getReviews()
            .then((reviews: ReviewInterface[]) => {
                console.log("reviews")
                console.log(reviews)
                dispatch(getReviews(reviews))
            })
    }, [])

    return (
        <div className='col-sm bg-light'>
            <img src="" width=""/>
            <h4>{film[0].title}</h4>
            <p>
                <small>
                    Par : {film[0].author}
                    <br/>
                    Sortie le : {film[0].createdAt}
                    <br/>
                    Avec : {film[0].actors}
                </small>
            </p>

            <div className="">
                <ReviewList reviews={reviewList}/>
                <HideIfLogged>
                    <div className={""}><Link to='/login'>Pour poster connectez-vous </Link>"</div>
                </HideIfLogged>
                <HideIfNotLogged>
                    {/*<ReviewForm/>*/}
                </HideIfNotLogged>
                {/*{*/}
                {/*    loggedUser.token !== "" ?*/}
                {/*        <ReviewForm loggedUser={loggedUser} setNeedsUpdate={setNeedsUpdate} id={id}/> :*/}
                {/*        <div className="not-logged"><Link to='/login'>Connectez-vous</Link> pour donner votre avis !!"*/}
                {/*        </div>*/}
                {/*}*/}
            </div>
        </div>
    )
}