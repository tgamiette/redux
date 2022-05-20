import React, {useState} from "react";
import {LocalUserInterface} from "../Interface/LocalUserInterface";
import {useDispatch, useSelector} from "react-redux";
import {SelectSigning} from "../Redux/Selector";
import {logged} from "../Redux/actions/SigningAction";
import Cookies from "universal-cookie";
import useLogin from "../Hook/useLogin";
import useRegister from "../Hook/useRegister";
import {useNavigate} from 'react-router-dom'

export default function LoginForm() {
    const [formInput, setFormInput] = useState<LocalUserInterface>({password: "", username: ""})
    const [needsLogin, setNeedsLogin] = useState<boolean>(true)
    const login = useLogin()
    const register = useRegister()
    const cookies = new Cookies()
    const dispatch = useDispatch()
    const navigate = useNavigate()


    const handleChange = ({target}: any) => {
        setFormInput(prev => ({
            ...prev,
            [target.name]: target.value
        }))
    }
    const handleSubmit = async (e: any) => {
        e.preventDefault();
        if (needsLogin) {
            login(formInput.username, formInput.password)
                .then((isLogged: boolean) => {
                    if (isLogged) {
                        dispatch(logged(cookies.get('token')))
                        navigate('/')
                    } else {
                        setFormInput(prevState => {
                            return {...prevState, password: ""}
                        })
                    }
                })
        } else if (!needsLogin) {
            register(formInput.username, formInput.password)
                .then((isRegister: any) => {
                })
        }
    }

    return (
        <form className='mx-auto' style={{maxWidth: '350px'}} onSubmit={handleSubmit}>
            <h2 className='mb-3 text-center'>{needsLogin ? 'Please Log In' : 'Please Register'}</h2>
            <div className="form-floating mb-3">
                <input required type="text" className="form-control" id="floatingInput" placeholder="FrancisHuster"
                       name='username' onChange={handleChange} value={formInput.username}/>
                <label htmlFor="floatingInput">Username</label>
            </div>
            <div className="mb-3 form-floating">
                <input required type="password" className="form-control" id="floatingPassword"
                       placeholder="Password"
                       name='password' onChange={handleChange} value={formInput.password}/>
                <label htmlFor="floatingPassword">Password</label>
            </div>
            <button type='submit' className='btn btn-primary w-100'>{needsLogin ? 'Login' : 'Register'}</button>
            <button className='btn btn-warning mt-3 w-100'
                    onClick={() => setNeedsLogin(!needsLogin)}>{needsLogin ? 'Register' : 'Login'} instead ?
            </button>
        </form>
    )
}
