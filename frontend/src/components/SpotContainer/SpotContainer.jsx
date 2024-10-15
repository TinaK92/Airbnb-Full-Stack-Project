// import { Link } from "react-router-dom";
// // import OpenModalButton from "../OpenModalButton/OpenModalButton.jsx";
// // import DeleteSpotModal from "../DeleteSpotModal/DeleteSpotModal.jsx";

// function SpotContainer({ spot, sessionUser }) {
//     if (sessionUser === undefined) {
//         sessionUser = 0;
//     }
//     let isOwner = false;
//     if (spot.ownerId === sessionUser.id) {
//         isOwner = true;
//     }
//     return (
//         <div className="spot-container" key={spot.name}>
//             <Link to={`/spots/${spot.id}`}>
//                 <img className="spot-container-image"
//                 src={spot.previewImage}
//                 alt={spot.name}
//                 />
//             </Link>
//             <Link to={`/spots/${spot.id}`}>
//                 <div className="city-state-container">
//                     <div>
//                         {spot.city}, {spot.state}
//                     </div>
//                     <div>
//                         <span className="star-rating">
//                             <i className="fa-solid fa-star"></i>
//                             {!spot.avgRating ? "New" : parseFloat(spot.avgRating).toFixed(1)}
//                         </span>
//                     </div>
//                 </div>
//             </Link>
//             <div className="name-container">
//                 <Link to={`/spots/${spot.id}`}>
//                     <div>
//                         <span className="spot-name">{spot.name}</span>
//                     </div>
//                 </Link>
//             </div>
//             <div className="price-container">
//                 <Link to={`/spots/${spot.id}`}>
//                     <div>
//                         <span className="price">${spot.price}</span>{" "}
//                         <span className="per-night">night</span>
//                     </div>
//                 </Link>
//                 <div className="owner-options">
//                     {isOwner ? (
//                         <Link to={`/spots/${spot.id}/edit`}>
//                             <button className="submit-edits">Update</button>
//                         </Link>
//                     ) : null}
//                     {isOwner ? (
//                         <OpenModalButton classAttribute={"submit-edits"}
//                         buttonText="Delete"
//                         modalComponent={<DeleteSpotModal spot={spot} />}
//                         />
//                     ) : null}
//                 </div>
//             </div>
//             <Link to={`/spots/${spot.id}`}>
//                     <div className="empty-space"></div>
//             </Link>
//         </div>
//     );
// }

// export default SpotContainer;