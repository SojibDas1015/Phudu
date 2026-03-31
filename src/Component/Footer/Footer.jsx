import React from 'react';
import logo from '../../assets/logo.png'
import { FaFacebook, FaLinkedin } from 'react-icons/fa';
import { FaSquareXTwitter, FaSquareYoutube } from 'react-icons/fa6';
import { NavLink } from 'react-router';
const Footer = () => {
    return (
        <div className='space-y-2 bg-white py-14'>
            <div className='flex items-center gap-2 justify-center'>
                <img width={48} src={logo} alt="" />
                <h2 className='text-3xl font-extrabold'>Phudu</h2>
            </div>
            <div className='flex justify-center'>
                <ul className="menu menu-horizontal px-1 gap-3 text-base">
                    <NavLink to={'/'} className={({ isActive }) => isActive ? 'border-b-2' : ''}><li>Home</li></NavLink>
                    <li>My-Bookings</li>
                    <li>Blogs</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div className='border-1 max-w-[1061px] mx-auto border-[#0F0F0F20]'></div>
            <div className='text-3xl flex items-center justify-center gap-2'>
                <FaFacebook />
                <FaSquareXTwitter />
                <FaLinkedin />
                <FaSquareYoutube />
            </div>
        </div>
    );
};

export default Footer;