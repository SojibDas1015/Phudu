import React from 'react';
import Navbar from '../Component/Navbar/Navbar';
import Home from '../Pages/Home/Home';
import { Outlet } from 'react-router';
import Footer from '../Component/Footer/Footer';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;