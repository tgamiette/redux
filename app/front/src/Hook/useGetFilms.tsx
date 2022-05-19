import Cookies from "universal-cookie";
import axios from "axios";
import API from './axios';

export default function useGetFilms(id?: number): Function {


    return (): Promise<any> => {
        return API.get(`film/${id}`)
            .then(response => {
                console.log("response")
                console.log(response)
                return response.data.value}
            );
    }

}