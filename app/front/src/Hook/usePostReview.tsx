import Cookies from "universal-cookie";
import {LocalBlogPost} from "../Interface/LocalBlogPost";
import API from "./axios"
import * as jose from 'jose'
import {FilmInterface, ReviewInterface} from "../Interface/FilmInterfaces";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;
import * as FilmAction from "../Redux/actions/FilmAction";
import {useDispatch} from "react-redux";


export default function usePostReview(idFilm: number): Function {

    const myHeaders = new Headers()
    const cookies = new Cookies()
    const dispatch = useDispatch()
    return (review: ReviewInterface) => {
        // API.interceptors.request.use(request => {
        //     const jwt = cookies.get('token')
        //     const expirationAt = jose.decodeJwt(jwt).exp
        //     // @ts-ignore
        //     if (expirationAt < (Math.trunc(new Date().getTime() / 1000))) {
        //         console.log('t perimé')
        //         API.post('refreshToken', new URLSearchParams({"token": jwt}))
        //             .then((response)=>{
        //                 cookies.set('token',response.data.token
        //                 )
        //             })
        //
        //     }
        //     return request
        // })

        const params = new URLSearchParams();
        params.append('filmId', idFilm.toString());
        params.append('content', review.comment);
        params.append('note', review.note.toString());
        return API.post(`review`, params)
            .then(response => {
                    console.log(response)
                    dispatch(FilmAction.addFilm(film))
                }
            ).catch(error => {
                console.log(error)
                return error
            });
    }
}
