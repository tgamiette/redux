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
import useGetBlogList from "./Hook/useGetBlogList";
import jose from "jose";
import {useDispatch, useSelector} from "react-redux";
import FilmList from "./Components/FilmList";
import SigningReducer from "./Redux/Reducers/SigningReducer";


export default function App() {
    const isLogged = useSelector(state => state.SigningReducer)
    // const [loggedUser, setLoggedUser] = useState<LoginResponseInterface>({
    //     status: 'error',
    //     token: "",
    //     username: ""
    // })
    // const cookies = new Cookies();
    // const [localUser, setLocalUser] = useState<LocalUserInterface>({password: "", username: ""})
    // const [blogList, setBlogList] = useState<BlogInterface[]>([])
    // const [needsLogin, setNeedsLogin] = useState<boolean>(true)
    // const [needsUpdate, setNeedsUpdate] = useState<boolean>(false)
    // const [connected, setConnected] = useState<boolean>(false)
    // const [list, setList] = useState([])
    // const login = useLogin();
    // const register = useRegister();
    // const getBlogList = useGetBlogList();
    //
    //
    // useEffect(() => {
    //     if (cookies.get('token') && cookies.get('hetic_username')) {
    //         console.log('cookies exist !', loggedUser)
    //         setLoggedUser(prev => ({
    //             ...prev,
    //             username: cookies.get('hetic_username'),
    //             token: cookies.get('token')
    //         }))
    //     }
    // }, [])
    //
    //
    // useEffect(() => {
    //     if (needsLogin && localUser.username !== '') {
    //         console.log('login ?')
    //         login(localUser.username, localUser.password)
    //             .then((isLogged: boolean) => {
    //                 if (isLogged) {
    //                     console.log('tu es co')
    //                     setLoggedUser({
    //                         message: "none",
    //                         status: 'success',
    //                         username: 'toto',
    //                         token: cookies.get('token')
    //                     })
    //                 }
    //             })
    //     } else if (!needsLogin && localUser.username !== '') {
    //         console.log('register ?', localUser.username)
    //         register(localUser.username, localUser.password)
    //             .then((isRegister: any) => {
    //                 if (isRegister) {
    //                     // setLoggedUser(data)
    //                 }
    //             })
    //     }
    // }, [localUser])
    //
    //
    // // Axios
    //
    //
    // useEffect(() => {
    //     getBlogList()
    //         .then((data: SetStateAction<BlogInterface[]>) => {
    //             setBlogList(data)
    //             setNeedsUpdate(false)
    //         })
    // }, [needsUpdate])
    //
    // // useEffect(() => {
    // //     const GetPost = useGetPostFrom()
    // //     GetPost()
    // //         .then((result: any) => {
    // //             console.log(result, new Cookies().get('jwt'))
    // //             if (result.status == 200) {
    // //                 setList(result.value)
    // //                 console.log("Lecture des com ok")
    // //             } else if (result.status && result.status !== 200) {
    // //                 console.log("Lecture des com ko")
    // //             }
    // //         })
    // //         .catch((error: any) => console.log('error', error));
    // //     // console.log(list)
    // // }, [comments])
    // //
    //
    // const handleDisconnect = () => {
    //     setLoggedUser({
    //         status: 'error',
    //         token: "",
    //         username: ""
    //     });
    //
    // }
    // return (
    //     <div className='container mt-5'>
    //         <HideIfLogged loggedUser={loggedUser}>
    //             <LoginForm setLocalUser={setLocalUser} needsLogin={needsLogin} setNeedsLogin={setNeedsLogin}/>
    //         </HideIfLogged>
    //
    //         <HideIfNotLogged loggedUser={loggedUser}>
    //             <button className='btn btn-danger d-block mx-auto mb-3' onClick={handleDisconnect}>Disconnect</button>
    //             <BlogForm loggedUser={loggedUser} setNeedsUpdate={setNeedsUpdate}/>
    //         </HideIfNotLogged>
    //
    //         <FilmList filmList={filmList}/>
    //     </div>
    // )


    const dispatch = useDispatch()


    const handleAddFilm = () => {
        dispatch({
            type: 'ADD_FILM',
            payload: {
                nom: "refugié2",
                description: "il etait une fois",
                link: "url",
                de: "test",
                par: "essaie",
                sortie: "2022/01/01",
                avec: "TOTO"
            }
        })
    }


    return (
        <div className='p-5'>
            <FilmList/>
            {/*<button onClick={handleAddFilm}>Ajouter un element</button>*/}
            {/*<h1 className='text-center mb-5'>Tous les blogs</h1>*/}
            {/*{localFilm.map((film) => (*/}
            {/*    <div>*/}
            {/*        <h3>{film.nom}</h3>*/}
            {/*        <h3>{film.description}</h3>*/}
            {/*        <h3>{film.link}</h3>*/}
            {/*        <h3>{film.de}</h3>*/}
            {/*        <h3>{film.par}</h3>*/}
            {/*    </div>*/}
            {/*))}*/}
        </div>
    );

}
