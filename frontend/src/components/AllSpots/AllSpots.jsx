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
//   let allSpotsArr = Object.values(spots);
  return (
    <div className="all-spots-wrapper">
      <div className="all-spots-container">
        <div className="all-spots"></div>
      </div>
    </div>
  );
}

export default AllSpots;
