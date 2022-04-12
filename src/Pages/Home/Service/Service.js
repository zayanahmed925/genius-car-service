import React from 'react';
import './Service.css';
const Service = ({ service }) => {
    const { name, img, price, description } = service;
    return (
        <div className='service-container'>

            <img src={img} alt="" />
            <h2>Service: {name}</h2>
            <p>Price: {price}</p>
            <p><small>{description}</small></p>
            <button>Book</button>
        </div>
    );
};

export default Service;