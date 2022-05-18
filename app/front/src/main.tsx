import React, {SetStateAction, useEffect, useState} from 'react'
import ReactDOM from 'react-dom'
import Nav from './Components/Navbar'
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import './index.css'
import App from './App'

import {Provider} from "react-redux";
import {createStore} from "redux";
import {RootReducer} from "./Redux/Reducers/RootReducer";


export const store = createStore(RootReducer)

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>
    , document.getElementById('root'));

