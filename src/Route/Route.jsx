import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../Root/Root';

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Root
    },
    {
        path: '*',
        element: <div>Page Not Found</div>
    }
])