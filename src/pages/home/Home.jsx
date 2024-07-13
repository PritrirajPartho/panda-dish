import React from 'react';
import Attraction from '../components/Attraction/Attraction';
import GetDishes from '../components/Dishes/GetDishes';

const Home = () => {
    return (
        <div className='ml-8 text-2xl'>
            <GetDishes></GetDishes>
        </div>
    );
};

export default Home;