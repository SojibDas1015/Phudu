import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../Root/Root';
import Home from '../Pages/Home/Home';
import DoctorsProfileDetails from '../Pages/DoctorsProfileDetails/DoctorsProfileDetails';

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
                path: '/:id',
                loader: () => fetch('doctors.json'),
                HydrateFallback: ()=> <div className='flex justify-center h-screen items-center'><span className="loading loading-bars loading-xl"></span></div>
,
                Component: DoctorsProfileDetails
            }
        ]
    },
    {
        path: '*',
        element: <div>Page Not Found</div>
    }
])