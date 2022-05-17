import {SetStateAction, useEffect, useState} from "react";
import {BlogInterface} from "../Interface/ResponseInterfaces";
import useGetBlogList from "../Hook/useGetBlogList";
import BlogList from "../Components/BlogList";

const getBlogList = useGetBlogList();


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