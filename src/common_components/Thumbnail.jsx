import React, { useEffect, useState } from "react";
import favoriteIcon from '../assets/img/heart.png';
import { useNavigate } from "react-router";
import { useSelector} from "react-redux";
import { addFavorite } from "../redux/favorites/operations";
import { getFavorites } from "../redux/favorites/selectors";

const Thumbnail = ({place}) => {
    const clickFavorite = place => {
        useNavigate(addFavorite(place))
    };
    const selector = useSelector(state => state); 
    const favorites = getFavorites(selector);
    const [showLikeButton, setShowLikeButton] = useState(true); 
    useEffect(() => {
        let favoritePlace = favorites.filter(
            favorite => favorite.id == place.id
        );
        if(favoritePlace.length>0){
            setShowLikeButton(false)
        }
    },[favorites])

    return(
        <>
          <div className="item">
            <div className="item-image">
                {showLikeButton && (
                    <div className="like">
                        <img src={favoriteIcon} alt="" onClick={() => clickFavorite(place)}/>
                    </div>
                )}
                <img src={place.image} alt="" />
            </div>
            <div className="item-text">
                <h1>{place.name}</h1>
                <p>{place.description}</p>
            </div>
          </div>
        </>
    )
}


export default Thumbnail;
