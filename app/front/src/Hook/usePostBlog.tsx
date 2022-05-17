import Cookies from "universal-cookie";
import {LocalBlogPost} from "../Interface/LocalBlogPost";
import API from "./axios"
import * as jose from 'jose'
import {FilmInterface} from "../Interface/FilmInterfaces";


export default function usePostBlogFrom(): Function {

    const myHeaders = new Headers();
    const cookies = new Cookies();

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

        var params = new URLSearchParams();
        params.append('title', film.title);
        params.append('from', film.from);
        params.append('content', film.content);
        params.append('actor', film.actor);
        params.append('image', film.image);
        params.append('url', film.url);
        params.append('created_at', film.created_at);

        return API.post('post', params)
            .then(response => {
                    // console.log(response)
                }
            );
    }

}