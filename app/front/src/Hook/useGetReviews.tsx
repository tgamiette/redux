import Cookies from "universal-cookie";
import axios from "axios";
import API from './axios';

export default function useGetReviews(idFilm?: number): Function {


    return (): Promise<any> => {
        return API.get(`review/${idFilm}`)
            .then(response => {
                console.log("esponse.data.value")
                console.log(response.data.value)
                return response.data.value}
            );
    }

}