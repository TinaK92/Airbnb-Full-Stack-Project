import { csrfFetch } from "./csrf";

const ALL_SPOTS = "spots/ALL_SPOTS";
const SPOT_DETAILS = "spots/SPOT_DETAILS";
const NEW_SPOT = "spots/NEW_SPOT";
const ADD_SPOT_IMAGE = "spots/ADD_SPOT_IMAGE";
const GET_USER_SPOTS = "spots/GET_USER_SPOTS";
const UPDATE_SPOT = "spots/UPDATE_SPOT";
const DELETE_SPOT = "spots/DELETE_SPOT";
const CLEAR_SPOT_STATE = "spots/CLEAR_SPOT_STATE";

// Actions
// Get all spots
export const allSpots = (payload) => ({
  type: ALL_SPOTS,
  payload,
});

// Get spot details
export const spotDetails = (payload) => ({
  type: SPOT_DETAILS,
  payload,
});

// Get user spots
export const userSpots = (spots) => ({
  type: GET_USER_SPOTS,
  payload: spots,
});

// Create a new spot
export const newSpot = (spot) => {
  return {
    type: NEW_SPOT,
    payload: spot,
  };
};

// Update a spot
export const updateSpot = (spot) => ({
  type: UPDATE_SPOT,
  payload: spot,
});

// Delete a spot
export const deleteSpot = (spotId) => ({
  type: DELETE_SPOT,
  spotId,
});

// Add an image to spot
export const addImage = (image) => ({
  type: ADD_SPOT_IMAGE,
  image,
});

// Clear Spot State
export const clearSpotState = () => {
  return {
    type: CLEAR_SPOT_STATE,
  };
};

// Thunks
// Get all spots THUNK
export const getAllSpots = () => async (dispatch) => {
  const response = await fetch("/api/spots");
  if (response.ok) {
    const payload = await response.json();
    dispatch(allSpots(payload));
  }
};

// Get spot details THUNK
export const getSpotDetails = (spotId) => async (dispatch) => {
  const response = await csrfFetch(`/api/spots/${spotId}`);
  if (response.ok) {
    const spot = await response.json();
    dispatch(spotDetails(spot));
    return spot;
  }
};

// Get users spots THUNK
// const GET_USER_SPOTS = "spots/GET_USER_SPOTS";
// // Get user spots
// export const userSpots = (spots) => ({
//     type: GET_USER_SPOTS,
//     payload: spots,
// })
export const getUserSpots = () => async (dispatch) => {
  const response = await csrfFetch("/api/spots/current");
  if (response.ok) {
    const spots = await response.json();
    dispatch(userSpots(spots));
  }
};

// Create a new spot THUNK
export const createNewSpot = (spot, navigate) => async () => {
  const response = await csrfFetch(`/api/spots`, {
    method: "POST",
    // headers: {
    // 	'Content-Type': 'application/json',
    // },
    body: JSON.stringify(spot),
  });
  if (response.ok) {
    const addSpot = await response.json();
    // dispatch(newSpot(addSpot));
    console.log(addSpot);
    navigate(`/spots/${addSpot.id}`);
    return addSpot;
  } else {
    const error = await response.json();
    throw error;
  }
};

// Add spot image
export const addImageToSpot = (spotId, image) => async (dispatch) => {
  const response = await csrfFetch(`/api/spots/${spotId}/images`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(image),
  });

  if (response.ok) {
    const newImage = await response.json();
    dispatch(addImage(newImage));
    return newImage;
  }
};

// Update a spot THUNK
export const updateASpot = (spotId, spotInfo) => async (dispatch) => {
  const response = await csrfFetch(`/api/spots/${spotId}`, {
    method: "PUT",
    headers: {
      // 'Content-Type': 'application/json',
    },
    body: JSON.stringify(spotInfo),
  });
  if (response.ok) {
    console.log("========> RESPONSE", response);
    const updatedSpot = await response.json();
    dispatch(updateSpot(updatedSpot));
    return updatedSpot;
  } else if (!response.ok) {
    
    return response;
  }
};

// Delete s spot THUNK
export const deleteASpot = (spotId) => async (dispatch) => {
  const response = await csrfFetch(`/api/spots/${spotId}`, {
    method: "DELETE",
  });
  if (response.ok) {
    dispatch(deleteSpot(spotId));
  }
};

// Initital State
const initialState = {
  allSpots: {},
  spotDetails: {},
  userSpots: [],
};

// REDUCER
const spotsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ALL_SPOTS: {
      const newState = { ...state, allSpots: {} };
      const spotsArray = action.payload.Spots;
      spotsArray.forEach((spot) => {
        newState.allSpots[spot.id] = spot;
      });
      return newState;
    }
    case SPOT_DETAILS: {
      return {
        ...state,
        spotDetails: {
          ...state.spotDetails,
          [action.payload.id]: action.payload,
        },
      };
    }
    case NEW_SPOT: {
      const newState = {
        allSpots: {
          [action.payload.id]: action.payload,
          ...state.allSpots,
        },
        spotDetails: {
          ...state.spotDetails,
          [action.payload.id]: action.payload,
        },
      };
      return newState;
    }
    case UPDATE_SPOT: {
      const newState = {
        ...state,
        allSpots: {
          ...state.allSpots,
          [action.payload.id]: action.payload,
        },
        spotDetails: {
          ...state.spotDetails,
          [action.payload.id]: action.payload,
        },
        userSpots: state.userSpots.map((spot) =>
          spot.id === action.payload.id ? action.payload : spot
        ),
      };
      return newState;
    }
    case DELETE_SPOT: {
      const newState = { ...state };
      delete newState.allSpots[action.spotId];
      newState.userSpots = newState.userSpots.filter(
        (spot) => spot.id !== action.spotId
      );
      delete newState.spotDetails[action.spotId];
      return newState;
    }
    case ADD_SPOT_IMAGE: {
      const newState = { ...state };
      const spot = newState.spotDetails[action.image.spotId];
      if (spot) {
        spot.images = spot.images || [];
        spot.images.push(action.image);
      }
      return newState;
    }
    case GET_USER_SPOTS: {
      return {
        ...state,
        userSpots: action.payload.Spots,
      };
    }
    case CLEAR_SPOT_STATE:
      return { ...initialState };
    default:
      return state;
  }
};

export default spotsReducer;
