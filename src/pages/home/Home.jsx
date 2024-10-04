import React from 'react';
import GetDishes from '../components/Dishes/GetDishes';
import Banner from '../components/Banner/Banner';
import MobileApp from '../components/MobileApp/MobileApp';
import Testimonilas from '../components/Testimonials/Testimonials';
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