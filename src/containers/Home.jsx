import React, { useEffect } from "react";
import Footer from "../common_components/Footer";
import GridContent from "../common_components/GridContent";
import Header from "../common_components/Header"; 
import Search from "../common_components/Search"; 
import Thumbnail from "../common_components/Thumbnail";
import search from '../assets/img/search.png';
import { getPlaces } from "../redux/places/selectors";
import { getCategories } from "../redux/categories/selectors"; 
import { fetchPlaces } from "../redux/places/operations";
import { useNavigate } from "react-router";
import {  useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../redux/categories/operations";
import { fetchFromLocalStorage } from "../redux/favorites/operations";
import mainImage from '../assets/img/main-image.png';


const Home = () => {
    const dispatch = useDispatch();
    const selector = useSelector(state => state);
    const places = getPlaces(selector);
    useEffect(() => {
        dispatch(fetchPlaces())
    },[]);
    const categories = getCategories(selector); 
    console.log(`places: ${places}`);
    console.log(`categories: ${categories}`);
    useEffect(() => {
        dispatch(fetchCategories());
        dispatch(fetchFromLocalStorage());
    },[]);


    return (
        <>
         <Header/>
         <main>
            <section className="main-image">
                <img src={mainImage} alt="" />
            </section>
            <section className="heading">
                <p>Popular places</p>
            </section>
            <section className="popular-places">
                {categories.map((category) => 
                    <GridContent key={category.id} category={category}></GridContent>
                )}
            </section>
            <section className="attractions">
                <div className="heading">
                <p>Tourist Attractions</p>
                </div>
                <div className="grid-container">
                    <div className="grid-items">
                        {
                            places.map(place => {
                                <Thumbnail place = {place}/>
                            })
                        }
                    </div>
                </div>
            </section>
         </main>
         <Footer/>
        </>
    )
}

export default Home;
