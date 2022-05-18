import Cookies from "universal-cookie";
import axios from "axios";
import API from './axios';

export default function useGetFilms(): Function {


    return (): Promise<any> => {
        return API.get('film')
            .then(response => {
                    return response.data.value
                }
            );

    }

}