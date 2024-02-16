import React from 'react';
import { useNavigate } from 'react-router';
import heart  from '../assets/img/heart.png';
import { deleteFavorite } from '../redux/favorites/operations';

const FavCard = ({favorite}) => {
    return (
        <>
          <div className="favorite-list">
            <div className="favorite-img">
                <img src= {favorite.image}alt=''/>
            <div className='list'>
                <img src= {heart} onClick={()=> useNavigate(deleteFavorite(favorite.id))} />
            </div>
            </div> 
            <div className="textcontent">
                <div className="favortie-heading">
                    <h1>{favorite.name}</h1>
                </div>
                <div className="gridsubheading">
                    <h2>{favorite.place_type}</h2>
                </div>
                <div className="gridtext">
                    <p>"Opens: {favorite.item_to_travel}"hours</p>
                    <p>{favorite.description}</p>
                </div>
                <div className="input-button">
                    <a href={favorite.google_map_link} className="direction">Directions</a>
                </div>
            </div>
          </div>
        </>
    )
}

export default FavCard;