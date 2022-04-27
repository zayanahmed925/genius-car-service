import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useServiceDetail from '../../../Hooks/useServiceDetail';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
const Checkout = () => {
    const { serviceId } = useParams()
    const [service] = useServiceDetail(serviceId);
    const [user] = useAuthState(auth);
    // const [user, setUser] = useState({
    //     name: 'raj',
    //     email: 'raj@gmail.com',
    //     address: 'mirpur',
    //     PHone: '01888888'
    // });
    // const handleChangeAddress = (e) => {
    //     const { address, ...rest } = user;
    //     const newAddress = e.target.value;
    //     const newUser = { newAddress, ...rest };
    //     setUser(newUser);
    // }
    const handlePlaceOrder = event => {
        event.preventDefault()
        const order = {
            email: user.email,
            service: service,
            serviceId: serviceId,
            address: event.target.address.value,
            phone: event.target.phone.value
        }
        axios.post('http://localhost:5000/order', order)
            .then(response => {
                const { data } = response;
                if (data.insertedId) {
                    toast('Order has been succeed');
                    event.target.reset();
                }
            })
    }

    return (
        <div className='w-50 mx-auto'>
            <h1>This is Checkout: {service.name}</h1>
            <form onSubmit={handlePlaceOrder} >
                <input className='w-100 mb-3' value={user?.displayName} type="text" name="name" placeholder='Name' id="" readOnly /><br />
                <input className='w-100 mb-3' value={user?.email} type="email" name="email" placeholder='Email' id="" readOnly /><br />
                <input className='w-100 mb-3' value={service.name} type="text" name="service" placeholder='Service' id="" readOnly /><br />
                <input className='w-100 mb-3' value={user?.address} type="text" name="address" placeholder='Address' id="" /><br />
                <input className='w-100 mb-3' value={user.phone} type="text" name="phone" placeholder='Phone' id="" /><br />
                <button className='btn btn-primary' type="submit">Book for Service</button>
            </form>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Checkout;