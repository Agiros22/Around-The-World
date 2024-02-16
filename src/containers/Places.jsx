import Footer from "../common_components/Footer";
import {  useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import React from "react";
import PlacesHeader from "../common_components/PlacesHeader";
import { getCategories } from "../redux/categories/selectors";
import { getPlaces } from "../redux/places/selectors";
import { fetchPlaces } from "../redux/places/operations";
import { fetchFromLocalStorage } from "../redux/favorites/operations";
import Card from "../common_components/Card";
import queryString from 'query-string'

// arrow functions are anonymous 
const Places = () => {
    const parsed = queryString.parse(window.location.search);
    const [search , setSearch ] = useState(null);
    const [category, setCategory] = useState([]);
    const dispatch = useDispatch();
    const selector = useSelector(state => state);
    const places = getPlaces(selector);

    useEffect(() => {
        dispatch(fetchFromLocalStorage());


        if(parsed.search !== undefined){
            setSearch(parsed.search)
        } 

        if(parsed.category !== undefined){
            setCategory(parsed.category);
        }
    }, []);

    const categories =getCategories(selector)
    useEffect(()=>{
        if(search !== null || category !== null) {
            dispatch(fetchPlaces(search,category))
        }
    }, [search, category]);

    return (
        <>
          <PlacesHeader/>
          <section className="places-container">
            <h2 className="place-heading">
                Places to Visit
            </h2>
            <div className="places-items">
                {
                    places.map(place => {
                        <Card key={place.id} place = {place}/>
                    })
                }
            </div>
          </section>
          <Footer/>
        </>
    )
}

export default Places;