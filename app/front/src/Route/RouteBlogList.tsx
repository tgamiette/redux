import {SetStateAction, useEffect, useState} from "react";
import {BlogInterface} from "../Interface/ResponseInterfaces";
import useGetFilms from "../Hook/useGetFilms";
import BlogList from "../Components/BlogList";

const getBlogList = useGetFilms();


export default function RouteBlogList() {
    const [blogList, setBlogList] = useState<BlogInterface[]>([])

    useEffect(() => {
        getBlogList()
            .then((data: SetStateAction<BlogInterface[]>) => {
                setBlogList(data)
            })
    }, [])

    return (<>
            <BlogList blogList={blogList}></BlogList>
        </>
    )
}