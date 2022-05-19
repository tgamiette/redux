import Cookies from "universal-cookie";
import {UserInterface} from "../Interface/User";
import API from "./axios";
import axios from "axios";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;

export default function useRegister(): Function {


    return (username: string, password: string): Promise<any> => {
        const params = new URLSearchParams({'username': username, 'password': password});
        return API.post('user', params)
            .then(response => {
                    return true
                }
            ).catch(error => {
                console.log(error)
                return false
            });

    }
}