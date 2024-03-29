import * as Actions from './actions';

import initialState from '../store/initialState'; 

export const placesReducer = (state = initialState.places, action) => {
    switch (action.type) {
        case Actions.ADD_PLACE:
            return {
                ...state,
                list: action.payload
            }
        case Actions.FETCH_PLACES:
            return {
                ...state,
                list: action.payload
            }
    
        default:
            return state;
    }
}