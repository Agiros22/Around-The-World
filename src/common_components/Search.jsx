import React, {useState} from "react"
import { useNavigate } from "react-router";
import {useDispatch } from "react-redux";
import Imgsearch from '../assets/img/Polygon 5.png';

const Search = () => {
    const dispatch = useDispatch();
    const [search, setSearch] = useState();

    const inputSearch = (event) => {
        setSearch(event.target.value);
    } 

    const submitAction = () => {
        dispatch(useNavigate('/places?search=' + search))
    } 

    return (
        <>
        <form onSubmit={submitAction}>
            <input type="inputbox" 
                className="search-bar"
                name="search"
                onChange = {inputSearch}
                placeholder="Search for best places to visit in Europe"
            />
        </form>
        <a onClick={() => console.log("test")}>
            <img 
            src={Imgsearch}
            alt=""
            className="search-icon" 
            onClick={() => {
                alert('test');
            }}/>
        </a>
        </>
    )
}

export default Search;