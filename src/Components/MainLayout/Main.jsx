import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../SharePage/Navbar/Navbar';
import Footer from '../SharePage/Footer/Footer';

const Main = () => {
    return (
        <>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    );
};

export default Main;