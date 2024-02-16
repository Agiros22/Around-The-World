import React from 'react';
import { useNavigate } from 'react-router';
import Search from './Search';
import dropdown from '../assets/img/Polygon 5.png';
import logo from '../assets/img/Group 14.png';
import { useDispatch } from 'react-redux';

const PlacesHeader = () => {
    const dispatch = useDispatch();

    return (
        <>
        <header>
            <div className="places-header">
                <div className="logo">
                    <img src={logo} alt="" onClick={() => useNavigate('/')}/>
                </div>
                <div className="right-nav">
                    <img src={dropdown} alt="" onClick={() => useNavigate('/favorites')}/>
                </div>
            </div>
            <div className="search">
                <Search/>
            </div>
        </header>
        </>
    )
}

export default PlacesHeader;