import React from 'react';
import {NavLink} from "react-router-dom";

export default function Navbar() {

    return (
        <header>
            <nav>
                <NavLink to="film">Voir les films</NavLink>
                <NavLink to={'film/add'}>Ajouter un film</NavLink>
                <NavLink to="logout">Logout</NavLink>
                <NavLink to="login">Login</NavLink>
            </nav>
        </header>
    )
}
