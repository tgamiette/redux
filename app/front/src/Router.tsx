import {Provider} from "react-redux";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import App from "./App";
import FilmList from "./Components/FilmList";
import FilmDetails from "./Components/FilmDetails";
import FilmForm from "./Components/FilmForm";
import React, {useState} from "react";
import {store} from "./main";
import Navbar from "./Components/Navbar";
import RouteHome from "./Route/RouteHome";
import LoginForm from "./Components/LoginForm";

export default function Router() {

// const [theme, setTheme] = useState("light");

    // return (
    //     // <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
    //     <BrowserRouter>
    //             <Navbar/>
    //             <Routes>
    //                 <Route path="/" element={<RouteHome/>}>
    //                     <Route index element={<App/>}/>
    //                     <Route path="film" element={<FilmList/>}>
    //                         <Route path=":filmId" element={<FilmDetails/>}/>
    //                         <Route path="add" element={<FilmForm/>}/>
    //                     </Route>
    //                     <Route path="logout" element={<App/>}/>
    //                     <Route path="login" element={<Login/>}/>
    //
    //                 </Route>
    //             </Routes>
    //     </BrowserRouter>
    //     // </ThemeProvider>
    //
    // )

    return (
        // <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={<App/>}></Route>
                <Route path="film" element={<FilmList/>}/>
                <Route path="/film/:filmId" element={<FilmDetails/>}/>
                <Route path="film/addFilm" element={<FilmForm/>}/>
                <Route path="logout" element={<App/>}/>
                <Route path="login" element={<LoginForm/>}/>
            </Routes>
        </BrowserRouter>
        // </ThemeProvider>

    )
}