import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Footer from "../common_components/Footer";
import Header from "../common_components/Header";
import Search from "../common_components/Search";
import PlacesHeader from "../common_components/PlacesHeader";
import { getFavorites } from "../redux/favorites/selectors";
import { fetchFromLocalStorage } from "../redux/favorites/operations";
import FavCard from "../common_components/favCard";


const Favorites = () => {
    const dispatch = useDispatch();

    const selector = useSelector(state => state);

    const favorites = getFavorties(selector);

    useEffect(() => {
        dispatch(fetchFromLocalStorage());
    },[]);

    return (
        <>
        <PlacesHeader/>
        <section className="section-2">
            <div className="heading-favorite">Favorite Places</div>
            <div className="grid">
                {favorites.map(favorite => {
                    <FavCard favorite={favorite}/>
                })}
            </div>
        </section>
        <Footer/>
        </>
    )
}

export default Favorites;