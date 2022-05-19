import {LoginResponseInterface} from "../Interface/ResponseInterfaces";
import React from "react";
import {useSelector} from "react-redux";
import {SelectSigning} from "../Redux/Selector";

export default function HideIfNotLogged({children}:any) {
    const loggedUser = useSelector(SelectSigning)

    if (!loggedUser.token) {
        return <></>
    }
    return children
}