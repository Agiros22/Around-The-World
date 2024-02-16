import { useNavigate } from "react-router";
import React from 'react';

const GridContent = ({category}) => {
    return (
        <div className="category-flex" onClick={() => useNavigate("/places?category=" + category.id)}>
            <img src={category.image} alt="" />
        </div>
    )
}

export default GridContent;