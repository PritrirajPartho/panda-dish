import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/components/Footer/Footer';
import Navbar from '../pages/components/Navbar/Navbar';

const Root = () => {
    return (
      <div>
          <div className='mb-14 sm:mb-8 md:mb-0'>
             <Navbar></Navbar>
          </div>
           <Outlet></Outlet>
         <Footer></Footer>
      </div>
    );
};

export default Root;