import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';
const Service = ({ service }) => {
    const { id, name, img, price, description } = service;
    const navigate = useNavigate();
    const handleServiceDetail = (id) => {
        navigate(`/service/${id}`)
    }
    return (
        <div className='service-container'>

            <img src={img} className='w-100' alt="" />
            <h2> {name}</h2>
            <p>Price: {price}</p>
            <p><small>{description}</small></p>
            <button onClick={() => handleServiceDetail(id)} className='btn btn-primary'>BOOK FOR {name}</button>
        </div>
    );
};

export default Service;