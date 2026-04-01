import React from 'react';
import { NavLink } from 'react-router';
import Navbar from '../../Component/Navbar/Navbar';

const ErrorHandle = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='h-screen w-full flex flex-col items-center justify-center space-y-3'>
                <h1 className='text-5xl text-red-700 font-extrabold'>404 Page Not Found</h1>
                <p>Oops! The page you're looking for doesn't exist.</p>
                <NavLink to={'/'}>
                    <button className='px-3 py-1 bg-red-700 rounded-full text-white font-extrabold cursor-pointer'>Go To Home</button>
                </NavLink>
            </div>
        </div>
    );
};

export default ErrorHandle;