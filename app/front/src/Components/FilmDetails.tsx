import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import {FilmInterface} from "../Interface/FilmInterfaces";
import HideIfLogged from "./HideIfLogged";
import HideIfNotLogged from "./HideIfNotLogged";
import {SelectFilms, SelectSigning} from "../Redux/Selector";

export default function FilmDetails() {
    const params = useParams();
    const film: FilmInterface = useSelector(SelectFilms).filter((film: FilmInterface) => film.id == params.id)
    const loggedUser = useSelector(SelectSigning)

    return (
        <div className='col-sm bg-light'>
            <img src="" width=""/>
            <h4>{film.title}</h4>
            <p>
                <small>
                    Par : {film.author}
                    <br/>
                    Sortie le : {film.createdAt}
                    <br/>
                    Avec : {film.actors}
                </small>
            </p>

            <div className="">
                <ReviewList reviewList={reviewList} id={id}/>
                <HideIfLogged>
                    <div className={""}><Link to='/login'>Pour poster connectez-vous </Link>"</div>
                </HideIfLogged>
                <HideIfNotLogged>
                    <ReviewForm/>
                    {/*<BlogForm loggedUser={loggedUser} setNeedsUpdate={setNeedsUpdate}/>*/}
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