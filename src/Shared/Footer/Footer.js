import React from 'react';
import './Footer.css'
const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='text-center my-5 any'>
            <p><small>Copyright &copy; {year}</small></p>
            <p><small>Copyright &copy; {year}</small></p>
        </footer>
    );
};

export default Footer;