import React from 'react';
import { Link, NavLink, useLocation } from 'react-router';
import relogo from '../../assets/registration.png'

const DynamicError = () => {
    const location = useLocation()
    console.log(location)
    return (
        <div className='space-y-4 h-[50vh] w-full flex flex-col items-center justify-center'>
            <div className='h-screen w-full flex flex-col items-center justify-center space-y-3'>
                <h1 className='text-5xl text-red-700 font-extrabold'>Doctor Not Found!!</h1>
                <p>Oops! No Doctors Fount with This ID No:</p>
                <div className='flex items-center gap-3'>
                    <img src={relogo} alt="" />
                    <p>{location.pathname}</p>
                </div>
                <NavLink to={'/'}>
                    <button className='px-3 py-1 bg-red-700 rounded-full text-white font-extrabold cursor-pointer'>Go To Home</button>
                </NavLink>
            </div>
        </div>
    );
};

export default DynamicError;