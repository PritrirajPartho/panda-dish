import React from 'react';
import Attraction from '../components/Attraction/Attraction';
import GetDishes from '../components/Dishes/GetDishes';
import Banner from '../components/Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <GetDishes></GetDishes>
        </div>
    );
};

export default Home;