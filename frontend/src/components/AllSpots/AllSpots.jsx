import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearSpotState, getAllSpots } from "../../store/spots";

function AllSpots() {
  const dispatch = useDispatch();
//   const sessionUser = useSelector((state) => state.session.user);
  const spots = useSelector((state) => {
    return state.spots.allSpots;
  });
  useEffect(() => {
    dispatch(getAllSpots());
    return () => {
      dispatch(clearSpotState());
    };
  }, [dispatch]);
  if (!spots) {
    return null;
  }
  
  return (
    <div> 
        {spots && spots.map((spot) => (
            <div
                key={spot.id}
            >
                <p>{spot.name}</p>
        </div>  
        ))}
    </div>
    )
}

export default AllSpots;
