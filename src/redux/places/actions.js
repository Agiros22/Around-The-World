export const ADD_PLACE = 'ADD_PLACE';

export const addPlaceAction = places => {
    return {
        type: 'ADD_PLACES',
        payload: places
    }
}

export const FETCH_PLACES = "FETCH_PLACES" 

export const fetchPlacesAction = places => {
    return {
        type: 'FETCH_PLACES',
        payload : places
    }
}