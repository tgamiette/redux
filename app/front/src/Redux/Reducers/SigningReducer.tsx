import "bootstrap/dist/css/bootstrap.css"
import {useReducer} from "react";

const [localAvis, dispatchAvis] = useReducer()


export default function SigningReducer(state: any, action: { type: any; }) {

    switch (action.type) {
        case 'signingLogin':
            return true;
        case 'signingLogout':
            return false;
        default:
            return state;
    }


}

