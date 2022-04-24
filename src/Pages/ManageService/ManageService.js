import React from 'react';
import useServices from '../../Hooks/useServices';

const ManageService = () => {
    const [services, setServices] = useServices();
    console.log(services);

    const handleDelete = (id) => {
        console.log(id)
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `http://localhost:5000/service/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log('clicked', data)
                    const reaming = services.filter(service => service._id !== id);
                    setServices(reaming);

                })
        }

    }
    return (
        <div className='w-50 mx-auto'>
            <h1>This is Checkout</h1>
            {
                services.map(service => <div key={service._id}>

                    <h4>{service.name} <button onClick={() => handleDelete(service._id)}>X</button></h4>
                </div>)
            }
        </div>
    );
};

export default ManageService;