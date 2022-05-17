import {FilmInterface} from "../Interface/FilmInterfaces";
import usePostBlog from "../Hook/usePostBlog";

export function AddFilm({film}: { film: FilmInterface }) {
    const postFilm = usePostBlog();

    postFilm(film)
        .then((data: any) => {
            // console.log(data.response)
            setLocalBlog({content: "", title: ""})
        })

    return {
        type: 'film/addFilm',
        payload: film
    }
}

export function AddReview({review, id}: { review: FilmInterface, id: number }) {
    return {
        type: 'film/addReview',
        id: id,
        payload: review
    }
}