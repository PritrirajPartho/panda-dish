import React from 'react';
import Attraction from '../components/Attraction/Attraction';
import GetDishes from '../components/Dishes/GetDishes';
import Banner from '../components/Banner/Banner';
import MobileApp from '../components/MobileApp/MobileApp';
import Testimonilas from '../components/Testimonials/Testimonials';
import { Tooltip } from 'react-tooltip';
import Tooltips from '../components/Tooltip/Tooltips';

const Home = () => {
    return (
        <div className='main-container'>
            <Banner></Banner>
            <GetDishes></GetDishes>
            <Testimonilas></Testimonilas>
            <MobileApp></MobileApp>
            <Tooltips></Tooltips>
        </div>
    );
};

export default Home;