import React, {CSSProperties} from 'react';
import {Link, NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import * as ThemeAction from "../Redux/actions/ThemeAction";
import {SelectSigning, SelectTheme} from "../Redux/Selector";
import * as SigningAction from "../Redux/actions/SigningAction";

export default function Navbar() {
    const dispatch = useDispatch()
    const theme = useSelector(SelectTheme)
    const userLogged = useSelector(SelectSigning)


    let activeStyle: CSSProperties = {
        textDecoration: "underline",
    };

    let activeClassName = "underline";

    console.log(userLogged)
    const handleDisconnect = () => {
        dispatch(SigningAction.logout())
    }


    const changeTheme = () => {
        dispatch(ThemeAction.changeTheme())
        // theme === 'light' ? setTheme("dark") : setTheme("light");
    }

    // @ts-ignore
    return (
        <header>
            <nav className={`navbar navbar-expand-lg navbar-light bg-${theme}`}>
                <img src={""} alt="" width="80px"/>

                <div className="collapse navbar-collapse" id="">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <NavLink to="/" className="nav-link">Films</NavLink>
                        </li>
                    </ul>

                    <ul className="navbar-nav">
                        <li className="nav-item switch_input">
                            <label className="switch">
                                {/*<input type="checkbox" data-toggle="switchbutton" checked data-size="xs">*/}
                                <input type="checkbox" onChange={() => changeTheme()}/>
                                <span className="slider round"></span>
                            </label>
                        </li>
                        {
                            !userLogged.isLogged ?
                                <li className="nav-item">
                                    <NavLink className={"nav-link"} to="/login"
                                        //          style={({isActive}) =>
                                        //     isActive ? activeStyle : undefined
                                        // }
                                    >Login</NavLink>
                                </li>
                                :
                                <li className="nav-item">
                                    <NavLink to="/" className="nav-link"
                                             onClick={() => handleDisconnect()}>Logout</NavLink>
                                </li>
                        }
                    </ul>
                </div>
            </nav>
        </header>
    )
}
