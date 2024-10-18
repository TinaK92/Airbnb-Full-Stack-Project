import { useState } from "react";
import { FaStar } from "react-icons/fa";

const StarRating = ({ rating, setRating }) => {
    const [hover, setHover] = useState(0);

    return (
        <div className="star-rating">
            {[...Array(5).map((star, index) => {
                const ratingVal = index + 1;
                return (
                    <label key={index}>
                        <input 
                            type="radio"
                            name="rating"
                            value={ratingVal}
                            onClick={() => setRating(ratingVal)}
                        />
                        <FaStar
                            className="star"
                            size={30}
                            onMouseEnter={setHover(ratingVal)}
                            color={ratingVal <= (hover || rating) ? '#ffc107' : '#e4e5e9'}
                            onMouseLeave={() => setHover(0)}
                        />
                    </label>
                )
            })]}
        </div>
    )
}

export default StarRating;