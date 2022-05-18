import {FilmInterface} from "../../Interface/FilmInterfaces";
import {selectSigning} from "../Selector";
import {Store} from "redux";

export function addFilm(film: FilmInterface) {
    return {
        type: '',

    }

}

export function logout(store: Store) {
    const status = selectSigning(store.getState().status)
    if (status === 'pending' || status === 'updating' || status === 'logout') {
        return false
    }
    store.dispatch(userLogout());
    return;
}

export function login(store: Store) {
    const status = selectSigning(store.getState().status)
    if (status === 'pending' || status === 'updating') {
        return;
    }
    store.dispatch(userFetching());
    postLogin()
        .then((data: any) => {
            store.dispatch(userLogin(data));
        })
        .catch((error: any) => {
            store.dispatch(userError(error));
        })
    return;
}
