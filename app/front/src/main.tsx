import React from 'react'
import ReactDOM from "react-dom/client"
import './index.css'
import {createStore} from "redux";
import {RootReducer} from "./Redux/Reducers/RootReducer";
import {Provider} from "react-redux";
import Router from "./Router";


export const store = createStore(RootReducer)
const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <Router/>
        </Provider>
    </React.StrictMode>
    );