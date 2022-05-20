import {Provider, useSelector} from "react-redux";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import App from "./App";
import FilmList from "./Components/FilmList";
import FilmDetails from "./Components/FilmDetails";
import FilmForm from "./Components/FilmForm";
import React from "react";
import Navbar from "./Components/Navbar";
import LoginForm from "./Components/LoginForm";
import {SelectTheme} from "./Redux/Selector";
import {ThemeProvider} from "styled-components";
import {basicTheme, darkTheme, GlobalStyles} from "./Theme";

export default function Router() {
    const theme = useSelector(SelectTheme)
    return (
        <ThemeProvider theme={theme == 'light' ? basicTheme : darkTheme}>
            <GlobalStyles/>
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<App />}></Route>
                    <Route path="film" element={<FilmList/>}/>
                    <Route path="/film/:filmId" element={<FilmDetails/>}/>
                    <Route path="film/addFilm" element={<FilmForm />}/>
                    <Route path="logout" element={<App theme={theme}/>}/>
                    <Route path="login" element={<LoginForm theme={theme}/>}/>
                </Routes>
            </BrowserRouter>
        </ThemeProvider>

    )
}