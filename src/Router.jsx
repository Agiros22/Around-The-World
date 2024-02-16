import React from 'react';

import { Routes, Route } from 'react-router';

import Favorites from './containers/Favorites';

import Home from './containers/Home';

import Places from './containers/Places'; 

const Router = () => {
    return (
        <>
         <Routes>
            <Route exact path ={'/'} element = {<Home/>} />
            <Route exact path ={'/favorites'} element = {<Favorites/>} />
            <Route exact path ={'/places'} element = {<Places/>} />
         </Routes>
        </>
    )
}

export default Router;