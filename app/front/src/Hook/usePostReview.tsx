import Cookies from "universal-cookie";
import {LocalBlogPost} from "../Interface/LocalBlogPost";
import API from "./axios"
import * as jose from 'jose'
import {FilmInterface} from "../Interface/FilmInterfaces";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;
import * as FilmAction from "../Redux/actions/FilmAction";
import {useDispatch} from "react-redux";


export default function usePostFilm(): Function {

    const myHeaders = new Headers()
    const cookies = new Cookies()
    const dispatch = useDispatch()
    return (film: FilmInterface) => {
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
        params.append('filmId', film.title);
        params.append('content', film.content);
        params.append('createdAt', film.createdAt);
        return API.post('review', params)
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
