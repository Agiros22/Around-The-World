import { placesReducer } from "../places/reducers";
import { CategoriesReducer } from "../categories/reducers";
import { FavoriteReducers } from "../favorites/reducers";
import {composeWithDevTools} from 'redux-devtools-extension'

import {thunk} from 'redux-thunk';
import { legacy_createStore as reduxCreateStore, combineReducers, applyMiddleware, compose } from "redux"; 

export default function createStore() {
    return reduxCreateStore(
        combineReducers({
            places : placesReducer,
            categories : CategoriesReducer,
            favorites : FavoriteReducers
        }),
        composeWithDevTools(applyMiddleware(thunk))
    );
}

