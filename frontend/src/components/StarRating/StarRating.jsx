import { useState } from "react";
import './StarRating.css';

const StarRating = ({ rating, setRating }) => {
    const [hover, setHover] = useState(0);
    const stars = [1, 2, 3, 4, 5];

    return (
        <div className="star-rating">
            {stars.map((star) => (
                <span
                    key={star}
                    className={`star ${hover >= star || rating >= star ? 'filled' : ''}`}
                    onClick={() => setRating(star)} // Set the selected rating
                    onMouseEnter={() => setHover(star)} // Highlight stars on hover
                    onMouseLeave={() => setHover(0)} // Reset highlight when no longer hovering
                >
                    ★
                </span>
            ))}
        </div>
    );
};

export default StarRating;