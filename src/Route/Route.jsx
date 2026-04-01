import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../Root/Root';
import Home from '../Pages/Home/Home';
import DoctorsProfileDetails from '../Pages/DoctorsProfileDetails/DoctorsProfileDetails';
import MyBookings from '../Pages/MyBookings/MyBookings';
import Blogs from '../Pages/Blogs/Blogs';
import ErrorHandle from '../Pages/404Error/ErrorHandle';
import DynamicError from '../Pages/DynamicError/DynamicError';

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: 'doctor/:id',
                loader: () => fetch('/doctors.json'),
                HydrateFallback: () => <div className='flex justify-center h-screen items-center'><span className="loading loading-bars loading-xl"></span></div>,
                Component: DoctorsProfileDetails,
                errorElement: <DynamicError></DynamicError>
            },
            {
                path: 'mybookings',
                loader: () => fetch('/doctors.json'),
                HydrateFallback: () => <div className='flex justify-center h-screen items-center'><span className="loading loading-bars loading-xl"></span></div>,
                Component: MyBookings
            },
            {
                path: 'blogs',
                loader: () => fetch('/blogs.json'),
                HydrateFallback: () => <div className='flex justify-center h-screen items-center'><span className="loading loading-bars loading-xl"></span></div>,
                Component: Blogs
            }
        ]
    },
    {
        path: '*',
        Component: ErrorHandle
    }
])