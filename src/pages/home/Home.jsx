import React from 'react';
import Attraction from '../components/Attraction/Attraction';
import GetDishes from '../components/Dishes/GetDishes';
import Banner from '../components/Banner/Banner';
import MobileApp from '../components/MobileApp/MobileApp';
import Testimonilas from '../components/Testimonials/Testimonials';
import Tooltips from '../components/Tooltip/Tooltips';
import DishesFormula from '../components/DishesFormula/DishesFormula';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <GetDishes></GetDishes>
            <Testimonilas></Testimonilas>
            <MobileApp></MobileApp>
            <DishesFormula></DishesFormula>
        </div>
    );
};

export default Home;