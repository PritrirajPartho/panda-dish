import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../pages/components/Header/Header';
import Footer from '../pages/components/Footer/Footer';
import Navbar from '../pages/components/Navbar/Navbar';

const Root = () => {
    return (
      <div>
         {/* <Header></Header> */}
         <Navbar></Navbar>
           <Outlet></Outlet>
         <Footer></Footer>
      </div>
    );
};

export default Root;