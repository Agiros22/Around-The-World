import React, {useState, useEffect} from "react"
import { addFavorite } from "../redux/favorites/operations";
import { getFavorites } from "../redux/favorites/selectors";
import {  useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router"; 
import Places from "../containers/Places";
import heart from "../assets/img/heart.png"




const Card = ({place}) => {
    const dispatch = useDispatch();
    const clickFavorite = place  => {
        dispatch(addFavorite(place));
    };
    const selector = useSelector(state => state); 

    const favorites = getFavorites(selector);

    const [showLikeButton, setShowLikeButton] = useState(true);

    useEffect(() => {
        let favoritePlace = favorites.filter(
            favorite => favorite.id == place.id
        ); 
        if(favoritePlace.length > 0){
            setShowLikeButton(false);
        }
    }, [favorites]); 

    return (
        <>
          <div className="category-list">
            <div className="category-image">
                <img src={place.image} alt="" /> 
            </div>
            <div className="like">
                <img src={heart} alt="" onClick={() => {clickFavorite(place)}}/>
            </div>
            <div className="cagtegory-text">
                <div className="category-heading">
                    <h1>{place.name}</h1>
                </div>
                <div className="gridsubheading">
                    <h2>{place.place_type}</h2>
                </div>
                <div className="gridtext">
                    <p>"Opens"{place.time_to_travel}"hours."</p>
                    <p>{place.description}</p>
                </div>
                <div className="input-button">
                    <a href={place.google_map_link} target="_blank">
                       {" "}
                       Direction{" "}
                    </a>
                </div>
            </div>
          </div>
        </>
    )

};


export default Card;