import {combineReducers} from "redux";
import FilmReducer from "./FilmReducer";
import SigningReducer from "./SigningReducer";

export const RootReducer = combineReducers({films: FilmReducer, signing: SigningReducer})

