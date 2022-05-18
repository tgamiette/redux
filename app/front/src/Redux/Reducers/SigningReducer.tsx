import "bootstrap/dist/css/bootstrap.css"
import {Store} from "redux";
import {selectSigning} from "../Selector";
import useLogin from "../../Hook/useLogin";
import cookies from "universal-cookie";
import Cookies from "universal-cookie";

const LOGIN = 'sign/login'
const LOGOUT = 'sign/logout'

const userFetching = () => ({type: FETCHING})
const userLogin = (data: Store) => ({type: LOGIN, payload: data})
const userLogout = () => ({type: LOGOUT})
const userError = (error: any) => ({type: REJECTED, payload: error})
const postLogin = useLogin()

const initialState = {
    isLogged: false,
}





export default function SigningReducer(state = initialState, action: {
    payload: any;
    type: any;
}) {

    switch (action.type) {
        case LOGIN:
            return true
        case LOGOUT:
            return false
        default:
            return state;
    }


}

