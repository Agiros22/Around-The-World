import React from 'react';
import {useDispatch} from 'react-redux';
import logo from '../assets/img/Group 14.png';
import dropdown from '../assets/img/Polygon 5.png';
import search from '../assets/img/search.png';  
import {useNavigate} from 'react-router-dom';

const Header = () => {
    const dispatch = useDispatch();
    return (
        <>
        <header>
            <nav>
                <div className="logo">
                    <img src={logo} alt="" onClick={() => useNavigate('/')}/>
                </div> 
                <div className="right-nav">
                    <img src={dropdown} alt="" onClick={()=> useNavigate('/favorites')} />
                </div>
            </nav>
        </header>
        </>
    )
}

export default Header;