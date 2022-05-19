import {LoginResponseInterface} from "../Interface/ResponseInterfaces";
import React from "react";
import {useSelector} from "react-redux";
import {selectSigning} from "../Redux/Selector";

export default function HideIfNotLogged({children}:any) {
    const loggedUser = useSelector(selectSigning)

    if (!loggedUser.token) {
        return <></>
    }
    return children
}