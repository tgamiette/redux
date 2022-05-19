import axios from "axios";
import API from "./axios"
import Cookies from "universal-cookie";
import jose from "jose";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;

export default function useLogin(): Function {
    const cookies = new Cookies();

    return (username: string, password: string) => {
        var params = new URLSearchParams();
        params.append('username', username);
        params.append('password', password);

        return API.post('login', params)
            .then(response => {
                console.log(response)
                    cookies.set('token', response.data.token)
                    return true
                }
            ).catch(error => {
                console.log(error)
                return false
            });
    }
}