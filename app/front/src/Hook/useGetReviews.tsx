import Cookies from "universal-cookie";
import axios from "axios";
import API from './axios';

export default function useGetReviews(idFilm?: number): Function {


    return (): Promise<any> => {
        console.log(`review/${idFilm}`)
        return API.get(`review/${idFilm}`)
            .then(response => {
                console.log("response")
                console.log(response)
                return response.data.value}
            );
    }

}