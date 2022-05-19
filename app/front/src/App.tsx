import React, {SetStateAction, useEffect, useState} from 'react'
import "bootstrap/dist/css/bootstrap.css"
import {CommentInterface} from "./Interface/Comment";
import Cookies from "universal-cookie";
import {LocalUserInterface} from "./Interface/LocalUserInterface";
import {BlogInterface, LoginResponseInterface} from "./Interface/ResponseInterfaces";
import HideIfLogged from "./Components/HideIfLogged";
import HideIfNotLogged from "./Components/HideIfNotLogged";
import BlogList from "./Components/BlogList";
import LoginForm from "./Components/LoginForm";
import FilmForm from "./Components/FilmForm";
import useLogin from "./Hook/useLogin";
import useRegister from "./Hook/useRegister";
import useGetFilms from "./Hook/useGetFilms";
import jose from "jose";
import {useDispatch, useSelector} from "react-redux";
import FilmList from "./Components/FilmList";
import {FilmInterface} from "./Interface/FilmInterfaces";
import * as FilmAction from "./Redux/actions/FilmAction"
import * as SigningAction from "./Redux/actions/SigningAction"
import {Link} from 'react-router-dom';


export default function App() {
    const isLogged = useSelector(state => state.SigningReducer)
    // const [loggedUser, setLoggedUser] = useState<LoginResponseInterface>({
    //     status: 'error',
    //     token: "",
    //     username: ""
    // })
    // const cookies = new Cookies();
    const [localUser, setLocalUser] = useState<LocalUserInterface>({password: "", username: ""})
    // const [blogList, setBlogList] = useState<BlogInterface[]>([])
    const [needsLogin, setNeedsLogin] = useState<boolean>(true)
    // const [needsUpdate, setNeedsUpdate] = useState<boolean>(false)
    // const [connected, setConnected] = useState<boolean>(false)
    // const [list, setList] = useState([])
    // const login = useLogin();
    // const register = useRegister();
    const getFilmList = useGetFilms();
    const dispatch = useDispatch()


    useEffect(() => {
        getFilmList()
            .then((data: SetStateAction<FilmInterface[]>) => {
                console.log("data")
                console.log(data)
                dispatch(FilmAction.addAllFilm(data));
            })
    })
    const handleDisconnect = () => {
        dispatch(SigningAction.logout())
    }

    // const x: FilmInterface = {
    //     id: 56,
    //     title: "refugijé2",
    //     content: "il etait une fois",
    //     image: "url",
    //     author: "test",
    //     createdAt: "2022/01/01",
    //     actor: "TOTO",
    // }
    // const handleAddFilm = () => {
    //     dispatch(FilmAction.addFilm(x))
    // }

    return (
        <div className='p-5'>
            <Link to="/">Home</Link> |{" "}
            <Link to="film">Film</Link>

            <HideIfLogged>
                <LoginForm/>
            </HideIfLogged><HideIfNotLogged>
            <button className='btn btn-danger d-block mx-auto mb-3' onClick={handleDisconnect}>Disconnect</button>
            <FilmForm></FilmForm>
            {/*<BlogForm loggedUser={loggedUser} setNeedsUpdate={setNeedsUpdate}/>*/}
        </HideIfNotLogged>
            <FilmList/>
        </div>

    );


}

