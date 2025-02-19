import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUserSpots, deleteASpot } from "../../store/spots";
import { useModal } from "../../context/Modal";
import { IoStarSharp } from "react-icons/io5";
import ConfirmDeleteModal from "../ConfirmDeleteModal/ConfirmDeleteModal";
import './ManageSpot.css';

const ManageSpots = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const sessionUser = useSelector((state) => state.session.user);
    const userSpots = useSelector((state) => state.spots.userSpots);
    const [toolTip, setToolTip] = useState(null);
    const { setModalContent, closeModal } = useModal();

    useEffect(() => {
        if (sessionUser) {
            dispatch(getUserSpots(sessionUser.id));
        }
    }, [dispatch, sessionUser]);

    const handleDelete = (spotId) => {
        setModalContent(
            <ConfirmDeleteModal
                onConfirm={() => {
                    dispatch(deleteASpot(spotId)).then(() => {
                        closeModal();
                    })
                }}
                onCancel={() => {
                    closeModal();
                }}
            />
        )
    }
        if (!userSpots.length) {
            return (
                <div className="manage-spot-wrapper">
                    <div className="manage-spot-heading">
                        <h2>Manage Spots</h2>
                    </div>
                    <div className="no-spots">
                        <p>No spots posted yet</p>
                        <button 
                            to='/spots/new'
                            className="create-new-spot-button"
                            onClick={() => navigate('/spots/new')}
                        >
                            Create a New Spot
                        </button>
                    </div>
                </div>
            )
        }
        return (
            <div className='manage-spot-wrapper'>
                <div className='manage-spot-heading'>
                    <h2 className='manage-spot-title'>Manage Spots</h2>
                    {/* <button
                        className='create-newspot-btn'
                        onClick={() => navigate('/spots/new')}
                    >
                        Create a New Spot
                    </button> */}
                </div>
                <div className='manage-spot-list'>
                    {userSpots.map((spot) => (
                        <div
                            onMouseOut={() => setToolTip(null)}
                            onMouseOver={() => setToolTip(spot.id)}
                            key={spot.id}
                            className='mspot-tile'
                            onClick={() => navigate(`/spots/${spot.id}`)}
                        >
                            {toolTip === spot.id && <div id='tooltip'>{spot.name}</div>}
                            <img
                                src={spot.previewImage}
                                alt={spot.name}
                                className='manage-spot-thumbnail'
                            />
                            <div className='manage-spot-info'>
                                <div className='manage-spot-info-sub'>
                                    <p className='manage-spot-location'>
                                        {spot.city}, {spot.state}
                                    </p>
                                    <p className='manage-spot-rating'>
                                        <IoStarSharp />
                                        {spot.avgRating ? spot.avgRating : 'New'}
                                    </p>
                                </div>
                                <p className='manage-spot-price'>${spot.price} night</p>
                                <div className='mspot-actions'>
                                    <button
                                        className='manage-spot-use-btn'
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            navigate(`/spots/${spot.id}/edit`);
                                        }}
                                    >
                                        Update
                                    </button>
                                    <button
                                        className='manage-spot-use-btn'
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleDelete(spot.id);
                                        }}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
}

export default ManageSpots;