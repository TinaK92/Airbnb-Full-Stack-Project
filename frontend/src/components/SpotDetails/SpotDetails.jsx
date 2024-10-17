import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSpotDetails } from "../../store/spots";
import { useParams, useNavigate } from "react-router-dom";
import SpotImages from "../SpotImages/SpotImages";
import Reviews from "../ManageSpots/Reviews/Reviews";
import { FaStar } from "react-icons/fa";

const SpotDetails = () => {
    const { spotId } = useParams();
    const newSpotId = parseInt(spotId)
    const dispatch = useDispatch();
    const spot = useSelector((state) => state.spots.spotDetails[spotId]);
    const reviews = useSelector((state) => state.reviews.reviews);

    useEffect(() => {
        dispatch(getSpotDetails(newSpotId))
    }, [dispatch, newSpotId])

    useEffect(() => {
        dispatch(getSpotDetails(newSpotId))
    }, [dispatch, newSpotId, reviews]);

    if (!spot) {
        return <p>Loading...</p>
    }

    const spotDetails = {};
    if (spot.numReviews === 1) {
        spotDetails.numReviews = 'Review'
    } else if (spot.numReviews >= 2) {
        spotDetails.numReviews = 'Reviews'
    }

    const handleClick = () => {
        alert('Feature coming soon')
    }

    return (
        <div className="spot-details-wrapper">
            <div className="spot-title-header">
                <h1 className="spot-details-title">{spot.name}</h1>
                <p>
                    {spot.city}, {spot.state}, {spot.country}
                </p>
            </div>
            <SpotImages spotId={newSpotId} />
            <div className="spot-details-info">
                <div className="spot-details-owner-description">
                    <p className="spot-owner">
                        {`Hosted by ${spot.Owner?.firstName} ${spot.Owner?.lastName}`}
                    </p>
                    <p className="spot-description">{spot.description}</p>
                </div>
                <div className="booking-spot-div">
                    <div className="price-review-title">
                        <p className="book-price">{`${spot.price} night`}</p>
                        <p className="booking-reviews">
                            <FaStar />
                            {spot.avgRating}
                            {spot.numReviews
                               ? ` · ${spot.numReviews} ${spotDetails.numReviews}`
                               : 'New'}
                        </p>
                    </div>
                    <button 
                        onClick={handleClick}
                        className="booking-button"
                    >
                        Reserve
                    </button>
                </div>
            </div>
            <div className="line-break"></div>
            <div className="review-div">
                <div className="review-heading">
                    <p className="review-title">
                        <FaStar />
                        {spot.avgRating}{' '}
                        {spot.numReviews
							? `· ${spot.numReviews} ${spot.numReviews}`
							: 'New'}
                    </p>
                </div>
                <Reviews spotId={newSpotId} />
            </div>
        </div>
    )
}


export default SpotDetails;