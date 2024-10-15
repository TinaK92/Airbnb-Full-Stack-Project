import { csrfFetch } from "./csrf";

const ALL_SPOTS = "spots/ALL_SPOTS";
const CLEAR_SPOT_STATE = "spots/CLEAR_SPOT_STATE";

// Actions
// Get all spots 
const allSpots = payload => ({
    type: ALL_SPOTS,
    payload,
})

// Clear Spot State 
export const clearSpotState = () => {
    return {
        type: CLEAR_SPOT_STATE,
    }
};

// Thunks 
// Get all spots THUNK
export const getAllSpots = () => async (dispatch) => {
    console.log("YOUR ABOUT TO GO OUT THE WINDOW")
    const response = await fetch('/api/spots');
    console.log('=========> Response', response)
    if (response.ok) {
        const payload = await response.json();
        console.log('===========> Payload', payload)
        dispatch(allSpots(payload));
    }
};

// Initital State
const inititalState = {
    allSpots: {},
    singleSpot: {},
    userSpots: [],
};

// REDUCER
export default function spotsReducer(state = inititalState, action) {
    switch (action.type) {
        case ALL_SPOTS: {
            const newState = { ...state, allSpots: {} };
            const spotsArray = action.payload.Spots;
            spotsArray.forEach((spot) => {
                newState.allSpots[spot.id] = spot;
            });
            return newState;
            }
        case CLEAR_SPOT_STATE: 
            return { ...inititalState };
        default:
            return state;
    }
}