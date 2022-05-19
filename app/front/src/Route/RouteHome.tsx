import {SetStateAction, useEffect, useState} from "react";
import {BlogInterface} from "../Interface/ResponseInterfaces";
import useGetFilms from "../Hook/useGetFilms";
import BlogList from "../Components/BlogList";

const getBlogList = useGetFilms();


export default function RouteHome() {
    return (<>
        <h1>coucou home
        </h1>
    </>)
}