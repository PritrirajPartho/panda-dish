import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../pages/components/Header/Header';
import Footer from '../pages/components/Footer/Footer';

const Root = () => {
    return (
      <div>
         <Header></Header>
         <Outlet></Outlet>
         <Footer></Footer>
      </div>
    );
};

export default Root;