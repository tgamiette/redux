import {LoginResponseInterface} from "../Interface/ResponseInterfaces";
import {useSelector} from "react-redux";
import {selectSigning} from "../Redux/Selector";

export default function HideIfLogged({children}) {

    const loggedUser = useSelector(selectSigning)
    if (loggedUser.token) {
        return <></>
    }
    return children
}