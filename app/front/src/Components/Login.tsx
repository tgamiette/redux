import React, {Dispatch, useEffect, useState} from "react";
import {UserLoginInterface} from "../Interface/User";
import Cookies from 'universal-cookie';
import {useCookies} from "react-cookie";
import useGetLoginFrom from "../Hook/useGetLoginFrom";
import {useSelector, useStore} from "react-redux";
import {selectSigning} from "../Redux/Selector";

export default function Login({setConnected}: { setConnected: Dispatch<boolean> }) {
    const cookies = new Cookies();
    const login = useSelector(selectSigning)

    // @ts-ignore
    const handleSubmit = (e) => {
        e.preventDefault()
        const myHeaders = new Headers()
        const store = useStore()
    }

    return (
        <div className="form-body">
            <form onSubmit={handleSubmit}>
                <div className="form-outline mb-4">
                    <input type="text" name="name"
                           className="form-control form-control-lg" value={login.payload.username}/>
                    <label className="form-label" htmlFor="form3Example1cg">Your
                        Name</label>
                </div>

                <div className="form-outline mb-4">
                    <input type="text" name="password"
                           className="form-control form-control-lg" value={login.payload.password}/>
                    <label className="form-label" htmlFor="form3Example3cg">Your
                        password</label>
                </div>

                <div className="d-flex justify-content-center">
                    <button type="submit"
                            className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Se connecter
                    </button>
                </div>
            </form>
        </div>
    )
}