import {useSelector, useStore} from "react-redux";
import {SelectFilms} from "../Redux/Selector";
import {FilmInterface, ReviewInterface} from "../Interface/FilmInterfaces";
import Film from "./Film";
import Review from "./Review";

export default function ReviewList(reviews: any) {
    const reviewList = reviews.reviews
    return (
        <div className='p-5'>
            <h1 className='text-center mb-5'>Review</h1>
            <div className="row justify-content-between">
                {reviewList.map((review: ReviewInterface) =>
                    <Review review={review} key={review.id}/>
                )}
            </div>
        </div>
    )
}