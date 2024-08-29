import React from 'react';
import Attraction from '../components/Attraction/Attraction';
import GetDishes from '../components/Dishes/GetDishes';
import Banner from '../components/Banner/Banner';
import MobileApp from '../components/MobileApp/MobileApp';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <GetDishes></GetDishes>
            <MobileApp></MobileApp>
        </div>
    );
};

export default Home;