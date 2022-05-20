import {combineReducers} from "redux";
import FilmReducer from "./FilmReducer";
import SigningReducer from "./SigningReducer";
import ReviewReducer from "./ReviewReducer";

export const RootReducer = combineReducers({films: FilmReducer, signing: SigningReducer, reviews: ReviewReducer})

