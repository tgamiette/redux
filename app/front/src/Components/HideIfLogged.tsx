import {LoginResponseInterface} from "../Interface/ResponseInterfaces";
import {useSelector} from "react-redux";
import {SelectSigning} from "../Redux/Selector";

export default function HideIfLogged({children}: any) {

    const loggedUser = useSelector(SelectSigning)
    if (loggedUser.token) {
        return <></>
    }
    return children
}