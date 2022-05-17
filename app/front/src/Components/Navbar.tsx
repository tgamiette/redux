import React from 'react';
import {NavLink} from "react-router-dom";

export default function Navbar() {

    return (
        <header>
            <nav>
                <NavLink to="post">posts</NavLink>
                <NavLink to={'getPost'}>écrire un post</NavLink>
                <NavLink to={'postPost'}>Lire les post</NavLink>
                <NavLink to="logout">Logout</NavLink>
                <NavLink to="login">Login</NavLink>
            </nav>
        </header>
    )
}
