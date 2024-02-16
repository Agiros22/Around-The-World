import { createSelector } from "reselect"; 

const placeSelector = state => state.places;

export const getPlaces = createSelector(
    [placeSelector],
    state => state.list,
);

