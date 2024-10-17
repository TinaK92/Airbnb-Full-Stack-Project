import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearSpotState, getAllSpots } from "../../store/spots";
import { useNavigate } from "react-router-dom";


function AllSpots() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const spots = useSelector((state) => state.spots.allSpots);
    const [toolTip, setToolTip] = useState(null);


    useEffect(() => {
      dispatch(getAllSpots());
    }, [dispatch]);

    const handleSpotClick = (spotId) => {
        navigate(`/spots/${spotId}`);
    }

    const allSpots = Object.values(spots)

    return (
        <div>
            <div>
                {allSpots && allSpots.map((spot) => (
                    <div key={spot.id} 
                    onMouseOut={() => setToolTip(null)}
                    onMouseOver={() => setToolTip(spot.id)}
                    onClick={() => handleSpotClick(spot.id)}>
                        {toolTip === spot.id && <div>{spot.name}</div>}
                        <img src={spot.previewImage} alt={spot.name} />
                        <div>
                            <p>
                                {spot.city}, {spot.state}
                            </p>
                            <p>
                                {spot.avgRating ? spot.avgRating : "new"}
                            </p>
                        </div>
                        <p>{`$${spot.price}`}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default AllSpots;
