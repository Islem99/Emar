
import { Icon } from '@iconify/react/dist/iconify.js';
import { useState } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';

import images from "../../assets/images/images-1.svg";
import RatingComponent from './Rating.component';
import CardComponent from './card.component';
const RatingData = [
    {
        ratingText: "40"
    },
    {
        ratingText: "20"
    },
    {
        ratingText: "50"
    },
    {
        ratingText: "10"
    },
    {
        ratingText: "4"
    }
]

const ReviewData = [
    {
        userName: " Sara Rasheed",
        description: "Ma Sha Allah bohot ache masheen hai color yellow green defrent hai but same prodect hai heavi duty masheen hai is price me high watt and heavi work presher.multi function ."
    },
    {
        userName: " Sara Rasheed",
        description: "Ma Sha Allah bohot ache masheen hai color yellow green defrent hai but same prodect hai heavi duty masheen hai is price me high watt and heavi work presher.multi function ."
    }
]
const RatingsReviews = () => {
    const [expanded, setExpanded] = useState(false);

    const [like, setLike] = useState(false)
    const [disLike, setDisLike] = useState(false);
    const [likeCount, setLikeCount] = useState(1);
    const [dislikeCount, setDislikeCount] = useState(1);
    const handleLikeClick = () => {

        if (!like) {
            setLikeCount(likeCount + 1);
        } else {
            setLikeCount(likeCount - 1);
        }
        setLike(!like);
    };

    const handleDislikeClick = () => {

        if (!disLike) {
            setDislikeCount(dislikeCount + 1);
        } else {
            setDislikeCount(dislikeCount - 1);
        }
        setDisLike(!disLike);

    };


    const handleViewMoreClick = () => {
        setExpanded(true);
    };



    return (
        <div className="Ratings-Reviews">
            <div className="row">
                <div className="col-lg-8">
                    <div className="ratings-reviews-content">
                        <div className="heading">
                            <h2>Ratings & Reviews</h2>
                        </div>
                        <div className="row m-0 border-buttom">
                            <div className="col-lg-4">

                                <div className="ratings">
                                    <div className='d-flex gap-3 align-items-center'>
                                        <h4>4.0</h4>
                                        <div className="rating-button">
                                            <Icon icon="tabler:star-filled" style={{ color: "white" }} width={20} height={20} />
                                            <p>Very Good</p>
                                        </div>

                                    </div>
                                    <RatingComponent />
                                    <span className='rating-text'>90 ratings</span>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="ratings rating-bar">
                                    {RatingData.map((item, index) => (
                                        <div className="d-flex align-items-center gap-2" key={index}>
                                            <RatingComponent />
                                            <ProgressBar now={40} />
                                            <span className='rating-text mt-0'>{item.ratingText}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {ReviewData.map((item, i) => (
                            <div className={`review-content ${expanded ? '' : 'hidden'}`} key={i}>
                                <div className="d-flex align-items-center justify-content-between">

                                    <div className="d-flex align-items-center">
                                        <div className="flex-shrink-0">
                                            <Icon icon="carbon:user" style={{ color: "white" }} width={25} height={25} />
                                        </div>
                                        <div className="flex-grow-1 ms-3">
                                            {item.userName}
                                        </div>
                                    </div>
                                    <div className="flex-grow">
                                        5 Month Ago <Icon icon="pepicons-pencil:dots-x" style={{ color: "#00000080" }} width={20} height={20} />
                                    </div>
                                </div>

                                <RatingComponent />
                                <p>{item.description}</p>
                                <div className="d-flex gap-2 " style={{ flexFlow: "wrap" }}>
                                    <figure>

                                        <img src={images} alt="images" />
                                    </figure>
                                    <figure>

                                        <img src={images} alt="images" />
                                    </figure>
                                </div>
                                <div className="d-flex justify-content-between align-items-center">

                                    <div className="flex-grow">
                                        Colorfamily Multicolor
                                    </div>
                                    <div className='d-flex gap-2 align-items-center'>
                                        <div onClick={handleLikeClick}>
                                            {like ? (
                                                <Icon icon="mdi:like" style={{ color: " #00000080" }} />
                                            ) : (
                                                <Icon icon="mdi:like-outline" style={{ color: "#00000080" }} />
                                            )}
                                        </div>
                                        <span className='flex-grow'>{likeCount}</span>
                                        <div onClick={handleDislikeClick}>
                                            {disLike ? (
                                                <Icon icon="mdi:dislike-outline" style={{ color: "#00000080" }} />
                                            ) : (
                                                <Icon icon="mdi:dislike" style={{ color: "#00000080" }} />
                                            )}
                                        </div>
                                        <span className='flex-grow'>1{dislikeCount}</span>
                                    </div>
                                </div>

                            </div>
                        ))}
                        {!expanded && (
                            <div className="d-flex justify-content-center py-3">
                                <button className='view-more' onClick={handleViewMoreClick}>View More</button>
                            </div>
                        )}

                    </div>

                </div>
                <div className="col-lg-4">
                    <div className="rating-card">
                        <CardComponent />
                    </div>
                </div>

            </div>

        </div>
    )
}

export default RatingsReviews
